import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { BASE_URL, apiVersion } from "../../../utils/apiRoutes";
import { getHeaders } from "../../../utils/helperFunctions";
import Modal from "react-modal";
import { customStyles } from "../my-profile/contactInfo";
import Textarea from "../../general-components/input/textarea";
import { SubmitButton } from "../my-profile/profileModals/academicInfoModal";
import Loader from "../../general-components/loader";
import { toast } from "react-toastify";

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  background: #fecdca;
  border-radius: 41px;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  color: #b42318;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
`;

const Header = styled.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  h4 {
    font-size: 16px;
    border-bottom: 1px solid black;
  }
`;

const ModalWrapper = styled.div`
  /* border: 1px solid red; */

  textarea {
    margin-bottom: 2rem;
  }

  button {
    &:first-child {
      margin-right: 1rem;
    }
  }
`;

interface reportProps {
  userToken: string;
}

const ReportUser = ({ userToken }: reportProps) => {
  const [userId, setUserId] = useState<string>("");

  const location = useLocation();
  useEffect(() => {
    const id = location.state.userId;
    setUserId(id);
  }, [location]);

  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toastOptions = {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
  };

  const reportUserHandler = async () => {
    if (feedback != "") {
      setIsLoading(true);
      await axios
        .post(
          `${BASE_URL}${apiVersion}/user/${userId}/report`,
          {
            feedback,
          },
          {
            headers: getHeaders(userToken),
          }
        )
        .then(({ data }) => {
          console.log(data);
          setIsLoading(false);
          setFeedback("");
          toast.success("We have recieved your report!!", toastOptions);
          closeModal();
        })
        .catch((data) => {
          console.log(data);
          setIsLoading(false);
          toast.error("Error in recieving report!!", toastOptions);
        });
    }
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function updateFields(content: string) {
    setFeedback(content);
  }

  return (
    <>
      <Section onClick={openModal}>Report User</Section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ModalWrapper>
          <Header>
            <h4>Report User</h4>
          </Header>
          <Textarea
            label="Report User"
            name="feedback"
            value={feedback}
            areaHeight="10rem"
            placeholderText="Report User"
            updateSingleField={updateFields}
          />
          <SubmitButton>
            <button type="submit" onClick={closeModal}>
              Go back
            </button>
            <button type="submit" onClick={reportUserHandler}>
              {isLoading ? (
                <Loader loaderHeight="1.6rem" color="white" />
              ) : (
                "Report"
              )}
            </button>
          </SubmitButton>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default ReportUser;

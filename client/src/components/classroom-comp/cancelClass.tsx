import React, { useState } from "react";
import { styled } from "styled-components";
import Modal from "react-modal";
import { customStyles } from "../profile-comp/my-profile/contactInfo";
import Loader from "../general-components/loader";
import { SubmitButton } from "../profile-comp/my-profile/profileModals/academicInfoModal";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { getHeaders } from "../../utils/helperFunctions";

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
  width: fit-content;
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
  width: 50vw;
  p {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 3rem;
  }

  button {
    &:first-child {
      margin-right: 1rem;
    }

    &:last-child {
      background-color: #ef4565;
    }
  }
`;

interface cancelClassProps {
  teachCardId: string;
  userToken: string;
}

const CancelClass = (props: cancelClassProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const cancelClasshandler = async () => {
    await axios
      .patch(
        `${BASE_URL}${apiVersion}/teach/${props.teachCardId}/cancel`,
        {},
        {
          headers: getHeaders(props.userToken),
        }
      )
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Section onClick={openModal}>Cancel Class</Section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ModalWrapper>
          <Header>
            <h4>Cancel Class</h4>
          </Header>
          <p>
            Are you sure you want to cancel this class? On cancelling this
            class, the students would be refunded their coins and deducted from
            your side.
          </p>
          <SubmitButton>
            <button type="button" onClick={closeModal}>
              Go back
            </button>
            <button type="button" onClick={cancelClasshandler} >
              {isLoading ? (
                <Loader loaderHeight="1.6rem" color="white" />
              ) : (
                "Cancel Class"
              )}
            </button>
          </SubmitButton>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default CancelClass;

import React, { useEffect, useState } from "react";
import { PostBtn } from "../../pages/forum/singleForum";
import { customStyles } from "../profile-comp/my-profile/contactInfo";
import Modal from "react-modal";
import { UserCookie } from "../../utils/userCookie";
import styled from "styled-components";
import Textarea from "../general-components/input/textarea";
import { SubmitButton } from "../profile-comp/my-profile/profileModals/academicInfoModal";
import { Arrow } from "../general-components/svg";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { getHeaders } from "../../utils/helperFunctions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Section = styled.div`
  width: 50vw;
  padding: 20px 32px;

  h4 {
    font-size: 16px;
    width: fit-content;
    margin-bottom: 3rem;
    border-bottom: 1px solid black;
  }

  textarea {
    margin-bottom: 3rem;
  }
`;

interface forumanswerProps {
  forumId: string;
}

const PostAnswer = (props: forumanswerProps) => {
  const [userToken, setUserToken] = useState<string>();
  const { fetchLocalUserToken } = UserCookie();

  useEffect(() => {
    fetchLocalUserToken().then((token) => {
      console.log(token);
      setUserToken(token);
    });
  }, []);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [answer, setAnswer] = useState<string>("");

  function updateFields(content: string) {
    setAnswer(content);
  }

  const toastOptions = {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
  };

  const handleValidation = () => {
    if (answer === "") {
      toast.error("Answer cannot be empty", toastOptions);
      return false;
    }
    return true;
  };

  const answerhandler = async () => {
    if (handleValidation()) {
      await axios
        .post(
          `${BASE_URL}${apiVersion}/forum/${props.forumId}/answers`,
          {
            answer,
          },
          {
            headers: getHeaders(userToken ?? ""),
          }
        )
        .then(() => {
          setAnswer("");
          toast.success("Answer posted on Forum :)", toastOptions);
          window.location.reload();
        })
        .catch((data) => {
          toast.error(data.response.data.message, toastOptions);
        });
    }
  };

  return (
    <>
      <PostBtn onClick={openModal}>Post Answer</PostBtn>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Section>
          <header>
            <h4>Post an Answer</h4>
          </header>
          <Textarea
            label="Forum Answer"
            name="answer"
            value={answer}
            areaHeight="10rem"
            updateSingleField={updateFields}
          />
          <SubmitButton>
            <button onClick={answerhandler}>
              <span>Submit Answer</span>
              <Arrow strokeColor="#FFFFFF" />
            </button>
          </SubmitButton>
        </Section>
      </Modal>
    </>
  );
};

export default PostAnswer;

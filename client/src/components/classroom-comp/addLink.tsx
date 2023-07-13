import React, { useState } from "react";
import Modal from "react-modal";
import { customStyles } from "../profile-comp/my-profile/contactInfo";
import styled from "styled-components";
import { Arrow } from "../general-components/svg";
import Textarea from "../general-components/input/textarea";
import { SubmitButton } from "../profile-comp/my-profile/profileModals/academicInfoModal";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { getHeaders } from "../../utils/helperFunctions";
import { Link } from "react-router-dom";

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 22px;
  gap: 10px;
  width: fit-content;
  background: #054f31;
  background: #ef4565;
  border-radius: 30px;

  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
`;

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
    margin-bottom: 2rem;
  }
`;

const ModalBtns = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

interface callProps {
  callLink: string;
  teachCardId: string;
  userId: string;
  userToken: string;
}

const AddLink = (props: callProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [classLink, setClassLink] = useState<string>(props.callLink);

  function updateFields(content: string) {
    setClassLink(content);
  }

  const addLinkHandler = async () => {
    await axios
      .patch(
        `${BASE_URL}${apiVersion}/teach/${props.teachCardId}/callLink`,
        {
          callLink: classLink,
        },
        {
          headers: getHeaders(props.userToken ?? ""),
        }
      )
      .then(() => {
        closeModal();
        window.location.reload();
      });
  };

  return (
    <>
      <LinkContainer onClick={openModal}>
        {props.callLink ? <span>Show Link</span> : <span>Add Class Link</span>}
        <Arrow strokeColor="white" />
      </LinkContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Section>
          <header>
            <h4>{props.callLink ? "Class Link" : "Add Link"}</h4>
          </header>
          <Textarea
            label="Class Link"
            name="callLink"
            value={classLink}
            updateSingleField={updateFields}
          />
          <ModalBtns>
            {props.callLink ? (
              <>
                <SubmitButton>
                  <button type="submit" onClick={addLinkHandler}>
                    <span>Edit Class Link</span>
                    <Arrow strokeColor="#FFFFFF" />
                  </button>
                </SubmitButton>
                <SubmitButton>
                  <Link to={props.callLink} target="_blank">
                    <button type="submit">
                      <span>Join</span>
                      <Arrow strokeColor="#FFFFFF" />
                    </button>
                  </Link>
                </SubmitButton>
              </>
            ) : (
              <SubmitButton>
                <button type="submit" onClick={addLinkHandler}>
                  <span>Add Class Link</span>
                  <Arrow strokeColor="#FFFFFF" />
                </button>
              </SubmitButton>
            )}
          </ModalBtns>
        </Section>
      </Modal>
    </>
  );
};

export default AddLink;

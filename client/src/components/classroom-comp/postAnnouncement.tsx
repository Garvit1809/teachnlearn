import styled from "styled-components";
import { Plus } from "../general-components/svg";
import Modal from "react-modal";
import { useState } from "react";
import { customStyles } from "../profile-comp/my-profile/contactInfo";
import AnnouncementModal from "./announcementModal";

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 20px;
  gap: 8px;
  width: fit-content;
  background: #000000;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
    0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  border-radius: 56px;
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
  /* margin-bottom:; */
`;

interface announcementModalProps {
  teachCardId: string
}

const PostAnnouncement = (props: announcementModalProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Section onClick={openModal}>
        <span>Make an Announcement</span>
        <Plus color="white" />
      </Section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <AnnouncementModal teachCardId={props.teachCardId} closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default PostAnnouncement;

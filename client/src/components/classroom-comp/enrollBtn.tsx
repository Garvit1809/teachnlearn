import React, { useState } from "react";
import styled from "styled-components";
import { Arrow } from "../general-components/svg";
import Modal from "react-modal";
import { customStyles } from "../profile-comp/my-profile/contactInfo";
import EnrollModal from "./enrollModal";

const Section = styled.div`
  /* border: 1px solid red; */

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 26px;
  gap: 12px;
  /* background: #332ad5; */
  border-radius: 4px;
  width: fit-content;
  cursor: pointer;
  background: #054f31;
  border-radius: 30px;

  span {
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #ffffff;
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;

interface enrollProps {
  title: string;
  price: number;
  date: string;
  classStartsAt: string;
  classEndsAt: string;
}

const EnrollBtn = (props: enrollProps) => {
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
        <span>Enroll Now</span>
        <Arrow strokeColor="white" />
      </Section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <EnrollModal  {...props} />
      </Modal>
    </>
  );
};

export default EnrollBtn;

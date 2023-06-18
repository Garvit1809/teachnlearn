import React, { useState } from "react";
import styled from "styled-components";
import { Arrow, Plus } from "../general-components/svg";
import Modal from "react-modal";
import { customStyles } from "../profile-comp/my-profile/contactInfo";

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  gap: 8px;
  background: #332ad5;
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

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 22px;
  gap: 10px;
  width: fit-content;
  background: #054f31;
  border-radius: 30px;

  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
`;

interface callProps {
  callLink: string;
}

const JoinCall = ({ callLink }: callProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      {!callLink ? (
        <LinkContainer>
          <span>Add class link</span>
          <Plus color="white" />
        </LinkContainer>
      ) : (
        <Section>
          <span>Join Class</span>
          <Arrow strokeColor="white" />
        </Section>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
      </Modal>
    </>
  );
};

export default JoinCall;

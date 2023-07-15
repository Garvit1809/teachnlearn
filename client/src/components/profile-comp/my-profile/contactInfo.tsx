import React, { useState } from "react";
import styled from "styled-components";
import EditBtn from "./editBtn";
import Modal from "react-modal";
import ContactInfoModal from "./profileModals/contactInfoModal";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 28px;
  gap: 18px;
  border: 1px solid #d5d9eb;
  border-radius: 32px;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;

  h4 {
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.02em;
    color: #000000;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  row-gap: 1rem;
  column-gap: 1.5rem;
  width: 100%;

  div {
    /* border: 1px solid red; */
    h4 {
      font-size: 16px;
      line-height: 25px;
      letter-spacing: 0.02em;
      color: #4b5565;
      text-transform: capitalize;
      margin-bottom: 0.2rem;
    }
  }
  span {
    font-size: 18px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0.02em;
    color: #000000;
  }
`;

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface ContactProps {
  username: string;
  email: string;
  phone: string;
  updateFields: any;
  userToken: string;
}

const ContactInfo = (props: ContactProps) => {
  console.log("Checking");

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Section>
        <Header>
          <h4>Contact Information</h4>
          <EditBtn onClickFunc={openModal} />
        </Header>
        <Wrapper>
          <div>
            <h4>Username</h4>
            <span>{props.username}</span>
          </div>
          <div>
            <h4>Email</h4>
            <span>{props.email}</span>
          </div>
          <div>
            <h4>Phone Number</h4>
            <span>{props.phone}</span>
          </div>
        </Wrapper>
      </Section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ContactInfoModal
          email={props.email}
          phone={props.phone}
          username={props.username}
          // updateFields={props.updateFields}
          userToken={props.userToken}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
};

export default ContactInfo;

import React, { useState } from "react";
import styled from "styled-components";
import { userProps } from "./myProfile";
import Modal from "react-modal";
import { customStyles } from "./contactInfo";
import UploadImage from "../../general-components/input/uploadImage";
import ModalField from "../../classroom-comp/modalField";
import FormField from "../../request-comp/formField";

const Section = styled.div`
  width: 50vw;
  padding: 20px 32px;
`;

const ImageContainer = styled.div`
  box-sizing: border-box;

  width: 84.54px;
  height: 84.54px;
  padding: 2px;
  border: 0.87156px solid #d5d9eb;
  border-radius: 50%;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: block;
    object-fit: cover;
  }
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

const ImagePreview = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 40vh;
  margin-bottom: 4rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const BottomButtons = styled.div`
  border: 1px solid red;
`;

interface profileImageProps {
  photo: string;
  userToken: string;
  closeModal: any;
}

type modalProps = profileImageProps & {
  updateFields: (fields: Partial<userProps>) => void;
};

const ProfileImage = (props: modalProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <ImageContainer onClick={openModal}>
        <img src={props.photo} alt="user-img" />
      </ImageContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <Section>
          <Header>
            <h4>Your Profile Image</h4>
          </Header>
          <ImagePreview>
            <img src={props.photo} alt="" />
          </ImagePreview>
          {/* <ModalField title="Change your profile picture" value={
            <UploadImage updateFields={props.updateFields} />
          } /> */}
          <FormField
            elem={<UploadImage updateFields={props.updateFields} />}
            inputDesc="Change your profile picture"
          />
          <BottomButtons></BottomButtons>
        </Section>
      </Modal>
    </div>
  );
};

export default ProfileImage;

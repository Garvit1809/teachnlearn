import React, { useState } from "react";
import styled from "styled-components";
import { userProps } from "./myProfile";
import Modal from "react-modal";
import UploadImage from "../../general-components/input/uploadImage";
import FormField from "../../request-comp/formField";
import { SubmitButton } from "./profileModals/academicInfoModal";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../../utils/apiRoutes";
import { getHeaders } from "../../../utils/helperFunctions";
import { localStorageUser } from "../../../utils/globalConstants";
import { toast } from "react-toastify";
import Loader from "../../general-components/loader";

const Section = styled.div`
  /* border: 1px solid red; */
  width: 50vw;
  padding: 20px 32px;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 3;

  button {
    &:first-child {
      margin-right: 1rem;
    }
  }
`;

interface imgProps {
  modalIsOpen: boolean;
}

const ImageContainer = styled.div<imgProps>`
  box-sizing: border-box;
  width: 84.54px;
  height: 84.54px;
  padding: 2px;
  border: 0.87156px solid #d5d9eb;
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: block;
    object-fit: cover;
    z-index: 1;
  }

  &:hover {
    img {
      filter: blur(0.5px);
      -webkit-filter: blur(0.5px);
    }

    &:before {
      content: "Edit";
      position: absolute;
      z-index: 2;
      top: 50%;
      display: block;
      display: ${(p) => (p.modalIsOpen ? "none" : "block")};
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 22px;
      font-weight: 700;
      mix-blend-mode: hard-light;
    }
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
  border: 1px solid #7d89b0;
  border-radius: 6px;
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
  height: 40vh;
  margin-bottom: 4rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 6px;
  }
`;

const FieldWrapper = styled.div`
  /* border: 1px solid red; */
  margin-bottom: 3rem;
`;

interface profileImageProps {
  photo: string;
  userToken: string;
}

type modalProps = profileImageProps & {
  updateFields: (fields: Partial<userProps>) => void;
};

const customStyles = {
  content: {
    width: "50vw",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ProfileImage = (props: modalProps) => {
  const [prevImage, setPrevImage] = useState(props.photo);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const updateImageCancelHandler = async () => {
    props.updateFields({ photo: prevImage });
    closeModal();
  };

  const toastOptions = {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
  };

  const updateUserImageHandler = async () => {
    setIsLoading(true);
    await axios
      .patch(
        `${BASE_URL}${apiVersion}/user/myPhoto`,
        {
          photo: props.photo,
        },
        {
          headers: getHeaders(props.userToken),
        }
      )
      .then(({ data }) => {
        console.log(data.updatedUser);
        setIsLoading(false);
        const user = data.updatedUser;
        user.token = props.userToken;
        localStorage.setItem(localStorageUser, JSON.stringify(user));
        closeModal();
      })
      .catch((data) => {
        setIsLoading(false);
        toast.error("Some error occured, couldnt update", toastOptions);
      });
  };

  return (
    <div>
      <ImageContainer onClick={openModal} modalIsOpen={modalIsOpen}>
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
          <FieldWrapper>
            <FormField
              elem={
                <UploadImage
                  updateFields={props.updateFields}
                  photoName=""
                  photoOnCross={prevImage}
                />
              }
              inputDesc="Change profile image"
            />
          </FieldWrapper>
          <SubmitButton>
            <button type="submit" onClick={updateImageCancelHandler}>
              Go back
            </button>
            <button type="submit" onClick={updateUserImageHandler}>
              {isLoading ? (
                <Loader loaderHeight="1.6rem" color="white" />
              ) : (
                "Ok"
              )}
            </button>
          </SubmitButton>
        </Section>
      </Modal>
    </div>
  );
};

export default ProfileImage;

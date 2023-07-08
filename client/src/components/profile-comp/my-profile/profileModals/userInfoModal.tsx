import React, { useState } from "react";
import styled from "styled-components";
import { userProps } from "../myProfile";
import FormField from "../../../request-comp/formField";
import Inputholder from "../../../general-components/input/inputholder";
import Textarea from "../../../general-components/input/textarea";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../../../utils/apiRoutes";
import { getHeaders } from "../../../../utils/helperFunctions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { localStorageUser } from "../../../../utils/globalConstants";

const Section = styled.div`
  width: 50vw;
  padding: 20px 32px;
  form {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    margin-bottom: 3rem;
    /* border: 1px solid red; */
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

const SubmitButton = styled.div`
  /* border: 1px solid green; */
  display: flex;
  /* align-items: flex-end; */
  justify-content: flex-end;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 40px;
    gap: 10px;
    background: #332ad5;
    border-radius: 8px;
    outline: none;
    border: none;
    cursor: pointer;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
  }
`;

interface userInfoProps {
  name: string;
  tagline: string;
}

type modalProps = userInfoProps & {
  userToken: string;
  closeModal: any;
  // updateFields: (fields: Partial<userProps>) => void;
};

const UserInfoModal = (props: modalProps) => {
  const [userInfo, setUserInfo] = useState<userInfoProps>({
    name: props.name,
    tagline: props.tagline,
  });

  const toastOptions = {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
  };

  const handleValidation = () => {
    const { name, tagline } = userInfo;
    if (name == "" || tagline == "") {
      toast.error("Fill in all the details", toastOptions);
      return false;
    } else if (tagline.length < 30) {
      toast.error("Tagline in too short", toastOptions);
      return false;
    }
    return true;
  };

  const updateUserInfoHandler = async () => {
    if (handleValidation()) {
      await axios
        .patch(
          `${BASE_URL}${apiVersion}/user/myInfo`,
          {
            name: userInfo.name,
            tagline: userInfo.tagline,
          },
          {
            headers: getHeaders(props.userToken ?? ""),
          }
        )
        .then(({ data }) => {
          console.log(data.updatedUser);
          const user = data.updatedUser;
          user.token = props.userToken;
          localStorage.setItem(localStorageUser, JSON.stringify(user));
          window.dispatchEvent(new Event("storage"));
          // props.closeModal();
          window.location.reload();
        })
        .catch((data) => {
          // console.log(data);
          toast.error("Some error occured, couldnt update", toastOptions);
        });
    }
  };

  const updateFields = (fields: Partial<userInfoProps>) => {
    setUserInfo((prev) => {
      return { ...prev, ...fields };
    });
  };

  return (
    <Section>
      <Header>
        <h4>Contact Information</h4>
      </Header>
      <form action="">
        <FormField
          elem={
            <Inputholder
              label="Name"
              name="name"
              type="text"
              value={userInfo.name}
              updateFields={updateFields}
            />
          }
          inputDesc="Change your Name :-"
        />
        <FormField
          elem={
            <Textarea
              label="Tagline"
              name="tagline"
              value={userInfo.tagline}
              updateFields={updateFields}
              areaHeight="10rem"
            />
          }
          inputDesc="Change your Tagline :-"
        />
      </form>
      <SubmitButton>
        <button type="submit" onClick={updateUserInfoHandler}>
          Edit User Info
        </button>
      </SubmitButton>
      {/* <ToastContainer theme="dark" /> */}
    </Section>
  );
};

export default UserInfoModal;

import React from "react";
import styled from "styled-components";
import Inputholder from "../../../general-components/input/inputholder";
import FormField from "../../../request-comp/formField";
import { userProps } from "../myProfile";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../../../utils/apiRoutes";
import { getHeaders } from "../../../../utils/helperFunctions";
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

interface ContactProps {
  username: string;
  email: string;
  phone: string;
  userToken: string;
  closeModal: any;
}

type modalProps = ContactProps & {
  updateFields: (fields: Partial<userProps>) => void;
};

const ContactInfoModal = (props: modalProps) => {
  const updateContactUserHandler = async () => {
    await axios
      .patch(
        `${BASE_URL}${apiVersion}/user/mycontactInfo`,
        {
          userName: props.username,
          email: props.email,
          phoneNumber: props.phone,
        },
        {
          headers: getHeaders(props.userToken),
        }
      )
      .then(({ data }) => {
        console.log(data.updatedUser);
        const user = data.updatedUser;
        user.token = props.userToken;
        localStorage.setItem(localStorageUser, JSON.stringify(user));
        props.closeModal();
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
              label="UserName"
              name="userName"
              type="text"
              value={props.username}
              updateFields={props.updateFields}
            />
          }
          inputDesc="Change your Username :-"
        />
        <FormField
          elem={
            <Inputholder
              label="Email"
              name="email"
              type="email"
              value={props.email}
              updateFields={props.updateFields}
            />
          }
          inputDesc="Change your Email :-"
        />
        <FormField
          elem={
            <Inputholder
              label="Phone Number"
              name="phoneNumber"
              type="string"
              value={props.phone}
              updateFields={props.updateFields}
            />
          }
          inputDesc="Change your Phone Number :-"
        />
      </form>
      <SubmitButton>
        <button type="submit" onClick={updateContactUserHandler}>
          Edit User Info
        </button>
      </SubmitButton>
    </Section>
  );
};

export default ContactInfoModal;

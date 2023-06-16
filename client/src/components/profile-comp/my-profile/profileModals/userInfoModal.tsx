import React from "react";
import styled from "styled-components";
import { userProps } from "../myProfile";
import FormField from "../../../request-comp/formField";
import Inputholder from "../../../general-components/input/inputholder";
import Textarea from "../../../general-components/input/textarea";

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

interface userInfo {
  name: string;
  photo: string;
  tagline: string;
}

type modalProps = userInfo & {
  updateFields: (fields: Partial<userProps>) => void;
};

const UserInfoModal = (props: modalProps) => {
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
              value={props.name}
              updateFields={props.updateFields}
            />
          }
          inputDesc="Change your Name :-"
        />
        <FormField
          elem={
            <Textarea
              label="Tagline"
              name="tagline"
              value={props.tagline}
              updateFields={props.updateFields}
            />
          }
          inputDesc="Change your Tagline :-"
        />
        {/* <FormField
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
        /> */}
      </form>
      <SubmitButton>
        <button type="submit">Edit User Info</button>
      </SubmitButton>
    </Section>
  );
};

export default UserInfoModal;

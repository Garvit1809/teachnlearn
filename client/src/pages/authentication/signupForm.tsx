import React, { useState } from "react";
import styled from "styled-components";
import Inputholder from "../../components/general-components/inputholder";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  margin: auto;
  margin-bottom: 2rem;
  /* border: 1px solid red; */

  form {
    width: 90%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding: 0px; */
    padding-right: 10px;
    gap: 20px;
  }
`;

interface SignUpData {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

type SignupFormProps = SignUpData & {
  updateFields: (fields: Partial<SignUpData>) => void;
};

const SignupForm = (props: SignupFormProps) => {
  console.log('kjfvvb');
  
  return (
    <Section>
      <form>
        <Inputholder
          type="text"
          label="Full Name"
          value={props.fullName}
          name="fullName"
          updateFields={props.updateFields}
        />
        <Inputholder
          type="text"
          label="Username"
          value={props.userName}
          name="userName"
          updateFields={props.updateFields}
        />
        <Inputholder
          type="email"
          label="Email"
          name="email"
          value={props.email}
          updateFields={props.updateFields}
        />
        <Inputholder
          type="password"
          label="Password"
          name="password"
          value={props.password}
          updateFields={props.updateFields}
        />
        <Inputholder
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          value={props.confirmPassword}
          updateFields={props.updateFields}
        />
      </form>
    </Section>
  );
};

export default SignupForm;
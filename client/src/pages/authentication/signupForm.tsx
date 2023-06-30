import React, { useState } from "react";
import styled from "styled-components";
import Inputholder from "../../components/general-components/input/inputholder";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  margin: auto;
  margin-bottom: 2rem;
  /* border: 1px solid red; */

  form {
    width: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 25px;
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

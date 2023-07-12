import React from "react";
import styled from "styled-components";
import Inputholder from "../general-components/input/inputholder";

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

interface loginFormProps {
  email: string;
  password: string;
}

type UserLoginFormProps = loginFormProps & {
  updateFields: (fields: Partial<loginFormProps>) => void;
};

const LoginForm = (props: UserLoginFormProps) => {
  return (
    <Section>
      <form action="">
        <Inputholder
          type="email"
          label="Email"
          value={props.email}
          name="email"
          updateFields={props.updateFields}
          placeholderText="Email"
        />
        <Inputholder
          type="password"
          label="Password"
          value={props.password}
          name="password"
          updateFields={props.updateFields}
          placeholderText="Password"
        />
      </form>
    </Section>
  );
};

export default LoginForm;

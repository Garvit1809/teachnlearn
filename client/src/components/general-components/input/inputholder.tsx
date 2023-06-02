import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  position: relative;
  width: 100%;
  /* margin: 0 auto; */
  height: 20px;
  margin-bottom: 2rem;
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 15px 0px 15px 10px;
  border: 1.5px solid #d5d9eb;
  box-sizing: content-box;
  border-radius: 8px;
  color: #000000;
  outline: none;
  font-size: 16px;
  font-weight: 400;
`;

interface labelProps {
  isValid: boolean;
}

const Label = styled.span<labelProps>`
  position: absolute;
  top: 0;
  left: 10px;
  transform: translateY(19px);
  pointer-events: none;
  font-size: 16px;
  text-transform: uppercase;
  transition: 0.25s;
  line-height: 1;
  transform: ${(props) =>
    props.isValid ? "translateX(5px) translateY(-5px)" : "null"};
  font-size: ${(props) => (props.isValid ? "11px" : "16px")};
  background-color: ${(props) => (props.isValid ? "white" : "none")};
  color: ${(props) => (props.isValid ? "#b3b8db" : "black")};
  padding: ${(props) => (props.isValid ? "0 5px" : "none")};

  ${Section}:focus-within & {
    transform: translateX(5px) translateY(-5px);
    font-size: 11px;
    background-color: white;
    color: #b3b8db;
    padding: 0 5px;
  }
`;

interface USERDATA {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  profilePic: string;
  number: string;
  course: string;
  interestedSubjects: string[];
  subject: string;
  strongSubjects: string[];
  preferredLanguages: string[];
}

interface inputProps {
  value: string;
  type: string;
  label: string;
  name: string;
  allSubjects?: string[];
  updateFields: (fields: Partial<USERDATA>) => void;
}

const Inputholder = (props: inputProps) => {
  const [isValid, setisValid] = useState(false);

  useEffect(() => {
    if (props.value?.trim().length > 0) {
      setisValid(true);
    }
  }, []);

  const inputhandler = (e: any) => {
    props.updateFields({ [e.target.name]: e.target.value });

    const value = e.target.value;

    if (value?.trim().length > 0) {
      setisValid(true);
    } else {
      setisValid(false);
    }
  };

  return (
    <Section>
      <Input
        type={props.type}
        required
        value={props.value}
        name={props.name}
        onChange={(e) => inputhandler(e)}
      />
      <Label isValid={isValid}>{props.label}</Label>
    </Section>
  );
};

export default Inputholder;

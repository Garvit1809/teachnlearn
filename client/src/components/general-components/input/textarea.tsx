import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  position: relative;
  width: 100%;
  /* height: 20px; */
  /* margin-bottom: 2rem; */
  box-sizing: border-box;

  textarea {
    width: 100%;
    height: 3rem;
    padding: 15px 0px 15px 10px;
    border: 1.5px solid #d5d9eb;
    box-sizing: content-box;
    border-radius: 8px;
    color: #000000;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    resize: none;
  }
`;

const Input = styled.input``;

interface labelProps {
  isValid: boolean;
}

const Label = styled.span<labelProps>`
  position: absolute;
  top: 0;
  font-family: "Nunito";
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
  color: ${(props) => (props.isValid ? "#b3b8db" : "#564c4d")};
  padding: ${(props) => (props.isValid ? "0 5px" : "none")};

  ${Section}:focus-within & {
    text-transform: none;
    transform: translateX(5px) translateY(-5px);
    font-size: 11px;
    background-color: white;
    color: #b3b8db;
    padding: 0 5px;
  }
`;

interface learnCardDetails {
  subject: string;
  topic: string;
  educationLevel: string;
  standard: string;
  preferredLanguage: string;
  description: string;
  expectations: string[];
  tags: string[];
  dueDate: string;
}

interface inputProps {
  value: string;
  label: string;
  name: string;
  // updateFields: (fields: Partial<learnCardDetails>) => void;
  updateFields: any;
}

const Textarea = (props: inputProps) => {
  const [isValid, setisValid] = useState(false);

  useEffect(() => {
    if (props.value?.trim().length > 0) {
      setisValid(true);
    }
  }, [props]);

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
      <textarea
        required
        value={props.value}
        name={props.name}
        onChange={(e) => inputhandler(e)}
      />
      <Label isValid={isValid}>{props.label}</Label>
    </Section>
  );
};

export default Textarea;

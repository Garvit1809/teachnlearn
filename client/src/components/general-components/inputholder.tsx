import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  position: relative;
  width: 200px;
  height: 20px;
  /* border: 1px solid red; */
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 1.5px solid #d5d9eb;
  border-radius: 8px;
  color: #000000;
  outline: none;
  font-size: 16px;
`;

interface labelProps {
  isValid: boolean;
}

const Label = styled.span<labelProps>`
  position: absolute;
  top: 0;
  left: 10px;
  transform: translateY(13px);
  /* padding-left: 10px; */
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

  ${Section}:focus-within & {
    transform: translateX(5px) translateY(-5px);
    font-size: 11px;
    background-color: white;
    color: #b3b8db;
    padding: 0 5px;
  }
`;

interface inputProps {
  value: string;
  // onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
  setname: React.Dispatch<React.SetStateAction<string>>;
}

const Inputholder = (props: inputProps) => {
  const [isValid, setisValid] = useState(false);
  const inputhandler = (value: string) => {
    props.setname(value);

    if (value.trim().length > 0) {
      setisValid(true);
    } else {
      setisValid(false);
    }
  };
  return (
    <Section>
      <Input
        type="text"
        required
        value={props.value}
        onChange={(e) => inputhandler(e.target.value)}
      />
      <Label isValid={isValid}>First Name</Label>
    </Section>
  );
};

export default Inputholder;

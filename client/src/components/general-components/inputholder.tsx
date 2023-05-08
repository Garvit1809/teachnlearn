import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "./input";

const Section = styled.div`
  position: relative;
  padding: 15px;
  margin: 10px;
  border: 1px solid red;

  .form__field:placeholder-shown ~ .form__label {
    font-size: 16px;
    cursor: text;
    top: 20px;
  }

  label,
  .form__field:focus ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 12px;
    color: #9b9b9b;
  }

  .form__field:focus ~ .form__label {
    color: #009788;
  }
`;

const Label = styled.div``;

interface inputProps {
  value: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

const Inputholder = (props: inputProps) => {
  const [isInputSelected, setIsInputSelected] = useState(false);
  const selectInput = () => {
    setIsInputSelected(!isInputSelected);
  };

  useEffect(() => {
    console.log(isInputSelected);
  }, [isInputSelected])  

  return (
    <Section>
      <Input
        value={props.value}
        onChangeHandler={props.onChangeHandler}
        onSelect={selectInput}
      />
      {isInputSelected ? (
        <Label className="form__label">your label</Label>
      ) : null}
    </Section>
  );
};

export default Inputholder;

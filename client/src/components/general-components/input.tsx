import React from "react";
import styled from "styled-components";

const Section = styled.div`
  /* font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #d2d2d2;
  outline: 0;
  font-size: 16px;
  color: #212121;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  } */

  /* &::placeholder-shown ~ .form__label {
  font-size: 16px;
  cursor: text;
  top: 20px;
} */

`;

interface inputProps {
  value: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = (props: inputProps) => {
  return (
    <Section>
      <input type="text" value={props.value} onChange={props.onChangeHandler} />
    </Section>
  );
};

export default Input;

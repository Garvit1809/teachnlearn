import React from "react";
import styled from "styled-components";

const Section = styled.div`
  input {
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
    }

    &:focus {
      padding-bottom: 6px;
      border-bottom: 2px solid #009788;
    }
  }
`;

interface inputProps {
  value: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
  onSelect: React.FocusEventHandler<HTMLInputElement>;
}

const Input = (props: inputProps) => {
  return (
    <Section>
      <input
        type="text"
        value={props.value}
        onChange={props.onChangeHandler}
        onFocus={props.onSelect}
        onBlur={props.onSelect}
      /> 
    </Section>
  );
};

export default Input;

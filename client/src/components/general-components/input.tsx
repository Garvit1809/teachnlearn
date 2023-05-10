import React from "react";
import styled from "styled-components";

const Section = styled.div`
  input {
    width: 100%;
    padding: 10px;
    border: 1.5px solid #d5d9eb;
    border-radius: 8px;
    color: #000000;
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

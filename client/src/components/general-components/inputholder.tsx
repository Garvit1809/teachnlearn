import React from "react";
import styled from "styled-components";
import Input from "./input";

const Section = styled.div`
  position: relative;
  padding: 15px;
  margin: 10px;
  border: 1px solid red;

  .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 1px solid #d2d2d2;
    outline: 0;
    font-size: 16px;
    color: #212121;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  }

  .form__field::placeholder {
    color: transparent;
  }

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

  .form__field:focus {
    padding-bottom: 6px;
    border-bottom: 2px solid #009788;
  }
`;

const Label = styled.div``;

interface inputProps {
  value: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

const Inputholder = (props: inputProps) => {
  return (
    <Section>
      <div className="form_field">
        <Input value={props.value} onChangeHandler={props.onChangeHandler} />
      </div>
      <label className="form_label">Labelhjfb</label>
      {/* <Label className="form__label">your label</Label> */}
    </Section>
  );
};

export default Inputholder;

import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  /* border: 1px solid red; */
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: space-around; */
  display: grid;
  grid-template-columns: 2.5fr 4fr;
  /* column-gap: 32px; */

  h3 {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: flex-start;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
  }
`;

const ElementWrapper = styled.div`
  /* border: 1px solid red; */
  width: 80%;
  display: flex;
  margin-left: 32px;
`;

interface learnCardDetails {
  subject: string;
  topic: string;
  educationLevel: string;
  standard: string;
  preferredLanguage: string;
  description: string;
  expectation: string;
  expectations: string[];
  tags: string[];
  dueDate: string;
}

const initialData: learnCardDetails = {
  subject: "",
  topic: "",
  educationLevel: "",
  standard: "",
  preferredLanguage: "",
  description: "",
  expectation: "",
  expectations: [],
  tags: [],
  dueDate: "",
};

interface fieldProps {
  inputDesc: string;
  elem: JSX.Element;
}

const FormField = (props: fieldProps) => {
  const [learnCard, setLearnCard] = useState<learnCardDetails>(initialData);

  function updateFields(fields: Partial<learnCardDetails>) {
    setLearnCard((prev) => {
      return { ...prev, ...fields };
    });
  }

  return (
    <Section>
      <h3>{props.inputDesc}</h3>
      <ElementWrapper>{props.elem}</ElementWrapper>
    </Section>
  );
};

export default FormField;

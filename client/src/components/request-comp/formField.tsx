import React, { useState } from "react";
import styled from "styled-components";

interface stylingProps {
  alignCenter?: boolean;
  marginTop?: string;
}

const Section = styled.div<stylingProps>`
  display: grid;
  grid-template-columns: 2fr 4fr;
  /* border: 1px solid red; */

  h3 {
    /* border: 1px solid red; */
    margin-top: ${(p) => (p.marginTop ? p.marginTop : "1rem")};
    display: flex;
    align-items: ${(p) => (p.alignCenter ? "center" : "flex-start")};
    justify-content: flex-start;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
  }
`;

const ElementWrapper = styled.div`
  /* border: 1px solid red; */
  /* width: 100%; */
  display: flex;
  margin-left: 32px;
`;

interface fieldProps {
  inputDesc: string;
  elem: JSX.Element;
  alignCenter?: boolean;
  marginTop?: string;
}

const FormField = (props: fieldProps) => {
  return (
    <Section>
      <h3>{props.inputDesc}</h3>
      <ElementWrapper>{props.elem}</ElementWrapper>
    </Section>
  );
};

export default FormField;

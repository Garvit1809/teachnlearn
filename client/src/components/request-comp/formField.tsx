import React, { useState } from "react";
import styled from "styled-components";

interface stylingProps {
  alignCenter?: boolean;
  marginTop?: string;
}

const Section = styled.div<stylingProps>`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 2fr 4fr;
  overflow-wrap: break-word;
  /* wid */

  @media only screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }

  h3 {
    /* border: 1px solid red; */
    width: 100%;
    overflow-wrap: break-word;
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
  
  @media only screen and (max-width: 1100px) {
    margin-left: 0px;
    margin-top: 1rem;
  }
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

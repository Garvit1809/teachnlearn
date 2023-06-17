import React from "react";
import styled from "styled-components";

const Section = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h3 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 22px;
    color: #4a5578;
  }
`;

interface fieldProps {
  title: string;
  value: JSX.Element;
}

const ModalField = (props: fieldProps) => {
  return (
    <Section>
      <h3>{props.title}</h3>
      {props.value}
    </Section>
  );
};

export default ModalField;

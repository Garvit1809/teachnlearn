import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 4fr;

  h3 {
    /* border: 1px solid red; */
    margin-top: 1rem;
    display: flex;
    align-items: flex-start;
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

interface fieldProps {
    inputDesc: string;
    elem: JSX.Element;
  }

const ModalField = () => {
  return (
    <Section>
      {/* <h3>{props.inputDesc}</h3> */}
      {/* <ElementWrapper>{props.elem}</ElementWrapper> */}
    </Section>
  )
}

export default ModalField

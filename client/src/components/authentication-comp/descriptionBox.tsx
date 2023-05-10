import React from "react";
import styled from "styled-components";
import { DoubleQuoteIcon } from "../general-components/svg";

const Section = styled.div`
  background-color: #0d1c2e;
  /* border-radius: 24px; */
/* width: 50vw; */
  /* width: calc(50vw - 4rem); */
  /* height: 100%; */
  /* height: calc(100vh - 4rem); */

  h4 {
    font-weight: 600;
    font-size: 28px;
    line-height: 60px;
    color: #ffffff;
  }

  p {
    color: #ffffff;
    font-weight: 600;
    font-size: 24px;
    line-height: 60px;
  }

  span {
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
  }
`;

const DescriptionBox = () => {
  return (
    <Section>
      <h4>Get Started</h4>
      <DoubleQuoteIcon />
      <p>If you want to master something, teach it.</p>
      <span>- Richard Feynman</span>
    </Section>
  );
};

export default DescriptionBox;

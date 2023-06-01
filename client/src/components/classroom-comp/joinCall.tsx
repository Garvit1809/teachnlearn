import React from "react";
import styled from "styled-components";
import { Arrow } from "../general-components/svg";

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  gap: 8px;
  background: #332ad5;
  border-radius: 4px;
  width: fit-content;
  cursor: pointer;
  background: #054F31;
border-radius: 30px;

  span {
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #ffffff;
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;

const JoinCall = () => {
  return (
    <Section>
      <span>Join Class</span>
      <Arrow strokeColor="white" />
    </Section>
  );
};

export default JoinCall;

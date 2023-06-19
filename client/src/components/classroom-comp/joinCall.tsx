import React, { useState } from "react";
import styled from "styled-components";
import { Arrow, Plus } from "../general-components/svg";
import { Link } from "react-router-dom";

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
  background: #054f31;
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

interface callProps {
  callLink: string;
}

const JoinCall = ({ callLink }: callProps) => {

  return (
    <>
      {!callLink ? null : (
        <Section>
          <Link to={callLink} target="_blank">
            <span>Join Class</span>
            <Arrow strokeColor="white" />
          </Link>
        </Section>
      )}
    </>
  );
};

export default JoinCall;

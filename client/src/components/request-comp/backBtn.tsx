import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  border: 1px solid #d5d9eb;
  width: fit-content;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 14px;
  gap: 6px;
  border-radius: 42px;

  span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #4b5565;
    cursor: pointer;
  }
`;

const BackBtn = () => {
  return (
    <Section>
      <Link to="/">
        <span>Back</span>
      </Link>
    </Section>
  );
};

export default BackBtn;

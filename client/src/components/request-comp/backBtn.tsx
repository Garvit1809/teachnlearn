import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BackArrowIcon } from "../general-components/svg";

const Section = styled.div`
  border: 1px solid #d5d9eb;
  width: fit-content;

  padding: 10px 14px;
  border-radius: 42px;
  margin-bottom: 2.5rem;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
  }

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
        <BackArrowIcon />
        <span>Back</span>
      </Link>
    </Section>
  );
};

export default BackBtn;

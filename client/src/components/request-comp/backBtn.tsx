import React from "react";
import { Link, useNavigate } from "react-router-dom";
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

interface backProps {
  link: string;
  cardId?: string;
}

const BackBtn = (props: backProps) => {
  const navigate = useNavigate();

  const navigationHandler = () => {
    if (props.cardId) {
      navigate(`/learncard-overview/${props.cardId}`, {
        state: { learnCardId: props.cardId },
      });
    } else {
      navigate(props.link);
    }
  };

  return (
    <Section onClick={navigationHandler}>
      <BackArrowIcon />
      <span>Back</span>
    </Section>
  );
};

export default BackBtn;

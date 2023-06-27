import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { UserCookie } from "../../utils/userCookie";
import { UpvoteIcon } from "../general-components/svg";

interface ratingStyleProps {
  isAnswer: boolean;
}

const Section = styled.div<ratingStyleProps>`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  svg {
    /* border: 1px solid red; */
    width: 2rem;
    width: ${(p) => (p.isAnswer ? "1.6rem" : "2rem")};
    height: 1.8rem;
    cursor: pointer;
  }

  span {
    color: #000;
    font-size: 1.175rem;
    font-size: ${(p) => (p.isAnswer ? "1.175rem" : "1.375")};
    font-family: "Nunito";
    font-weight: 500;
    letter-spacing: 0.0275rem;
  }
`;

interface ratingProps {
  upvotes: string[];
  userId: string;
  isAnswer: boolean;
}

const RatingContainer = (props: ratingProps) => {
  const upvoteCheck = () => {
    return props.upvotes.includes(props.userId);
  };

  return (
    <Section isAnswer={props.isAnswer}>
      <UpvoteIcon
        color={upvoteCheck() ? "#094067" : "rgba(125, 137, 176, 0.4)"}
      />
      <span>{props.upvotes.length}</span>
    </Section>
  );
};

export default RatingContainer;

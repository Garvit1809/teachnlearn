import React from "react";
import { ThumbsUp } from "../general-components/svg";
import styled, { keyframes } from "styled-components";

const thumbsup = keyframes`
    0%{
        transform: rotate(45deg);
    /* } 50% { */
        /* transform: rotate(0); */
    } 100% {
        transform: rotate(0deg);
    }
`;

const Section = styled.div`
  width: 50vw;
  padding: 2rem 0;
  svg {
    width: 80px;
    height: 80px;
    fill: #094067;
    margin-bottom: 1rem;
    animation: ${thumbsup} 0.25s linear 1;
  }

  h2 {
    font-size: 2.5rem;
    font-family: "Nunito";
    font-weight: 600;
  }

  h4 {
    color: #4a5578;
    font-size: 1.2rem;
    padding-left: 2px;
    font-weight: 500;
  }
`;

const ReviewSubmitted = () => {
  return (
    <Section>
      <ThumbsUp />
      <h2>Thanks for reviewing!!</h2>
      <h4>Your feedback has been submitted</h4>
    </Section>
  );
};

export default ReviewSubmitted;

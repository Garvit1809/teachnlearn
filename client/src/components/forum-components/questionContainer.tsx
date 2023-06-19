import React from "react";
import styled from "styled-components";
import RatingContainer from "./ratingContainer";

const Section = styled.div`
  display: flex;
  border-bottom: 1px solid #cdd5df;
  padding-bottom: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  /* border: 2px solid red; */
`;

const Question = styled.div`
  /* border: 2px solid green; */
  width: 90%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  h2 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 35px;

    color: #000000;
  }

  p {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: #4a5578;
  }
`;

interface questionProps {
  tagline: string;
  question: string;
  rating: number;
}

const QuestionContainer = (props: questionProps) => {
  return (
    <Section>
      <RatingContainer rating={props.rating} />
      <Question>
        <div>
          <h2>{props.tagline}</h2>
        </div>
        <div>
          <p>{props.question}</p>
        </div>
      </Question>
    </Section>
  );
};

export default QuestionContainer;

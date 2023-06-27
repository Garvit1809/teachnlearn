import React from "react";
import styled from "styled-components";
import RatingContainer from "./ratingContainer";

const Section = styled.div`
  /* display: flex; */
  display: grid;
  grid-template-columns: 0.5fr 9fr;
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
  upvotes: string[];
  forumId: string;
  userId: string;
  userToken: string;
}

const QuestionContainer = (props: questionProps) => {
  return (
    <Section>
      <RatingContainer
        upvotes={props.upvotes}
        userId={props.userId}
        isAnswer={false}
        forumId={props.forumId}
        userToken={props.userToken}
      />
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

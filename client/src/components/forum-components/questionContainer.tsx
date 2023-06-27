import React from "react";
import styled from "styled-components";
import RatingContainer from "./ratingContainer";

const Section = styled.div`
  /* border: 2px solid red; */
  display: grid;
  grid-template-columns: 0.6fr 9fr 0.5fr;
  row-gap: 1rem;
  border-bottom: 1px solid #cdd5df;
  padding-bottom: 2.5rem;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  width: 100%;
`;

const UserWrapper = styled.div`
  /* border: 1px solid red; */

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid black;
    cursor: pointer;
  }
`;

const Question = styled.div`
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
  createdBy: {
    _id: string;
    userName: string;
    name: string;
    photo: string;
  };
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
      <UserWrapper>
        <img src={props.createdBy.photo} alt="" />
      </UserWrapper>
    </Section>
  );
};

export default QuestionContainer;

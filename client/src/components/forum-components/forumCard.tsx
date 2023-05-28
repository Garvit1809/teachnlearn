import React from "react";
import styled from "styled-components";
import { Comments, Plus } from "../general-components/svg";
import { useNavigate } from "react-router-dom";

const Section = styled.div`
  /* border: 1px solid red; */
  background: #ffffff;
  box-shadow: -4px 12px 16px -4px rgba(16, 24, 40, 0.08),
    -2px 4px 6px -2px rgba(16, 24, 40, 0.03);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 32px;
  gap: 16px;
  cursor: pointer;
  transition: all 0.15s linear;

  &:hover {
    transform: scale(1.05);
    -webkit-box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.49);
    -moz-box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.49);
    box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.49);
  }
`;

const Header = styled.div`
  /* border: 1px solid red; */
`;

const Tag = styled.div`
  color: #332ad5;
  font-size: 20px;
  line-height: 27px;
  font-weight: 600;
`;

const Options = styled.div``;

const Question = styled.div`
  font-weight: 600;
  font-size: 22px;
  /* line-height: 35px; */

  color: #000000;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
`;

const User = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 1rem;
  margin-bottom: 12px;

  span {
    font-weight: 500;
    font-size: 18px;
    color: #98a2b3;
    letter-spacing: 0.035em;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.25rem;
  }

  span.dot {
    height: 5px;
    width: 5px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
  }
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;

  div {
    /* border: 1px solid red; */
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.2rem;

    span {
      font-weight: 500;
      font-size: 18px;
      color: #475467;
      letter-spacing: 0.035em;
    }
  }
`;

interface forumProps {
  id: number;
  tag: string;
  question: string;
  userName: string;
  time: string;
  likes: number;
  comments: number;
}

const ForumCard = (props: forumProps) => {
  const navigate = useNavigate();

  const forumNavigator = () => {
    console.log("hello");

    navigate(`/forum/${props.id}`, { state: { id: props.id } });
  };

  return (
    <Section onClick={forumNavigator}>
      <Header>
        <Tag>{props.tag}</Tag>
        <Options></Options>
      </Header>
      <Question>{props.question}</Question>
      <Details>
        <User>
          <span>@{props.userName}</span>
          <div>
            <span className="dot"></span>
            <span>{props.time}</span>
          </div>
        </User>
        <Stats>
          <div>
            <Plus />
            <span>{props.likes}</span>
          </div>
          <div>
            <Comments />
            <span>{props.comments}</span>
          </div>
        </Stats>
      </Details>
    </Section>
  );
};

export default ForumCard;

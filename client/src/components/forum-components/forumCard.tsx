import React from "react";
import styled from "styled-components";
import { Comments, Plus } from "../general-components/svg";
import { useNavigate } from "react-router-dom";
import { forumProps } from "../../pages/forum/forum";
import moment from "moment";
import { topNavigator } from "../../utils/helperFunctions";

const Section = styled.div`
  /* border: 1px solid red; */
  background: #094067;
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
    transform: translateY(-10px);
  }

  @media only screen and (max-width: 500px) {
    gap: 12px;
  }
`;

const Header = styled.div`
  /* border: 1px solid red; */
`;

const Tag = styled.div`
  color: #ef4565;
  font-size: 20px;
  line-height: 27px;
  font-weight: 600;

  @media only screen and (max-width: 950px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 500px) {
    /* font-size: 18px; */
  }
`;

const Options = styled.div``;

const Question = styled.div`
  font-weight: 600;
  font-size: 22px;
  color: #d8eefe;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 36px;

  @media only screen and (max-width: 950px) {
    font-size: 24px;
    line-height: 32px;
  }

  @media only screen and (max-width: 800px) {
    font-size: 22px;
    line-height: 28px;
  }
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
    color: #ffffff;
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
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
  }

  @media only screen and (max-width: 800px) {
    span {
      font-size: 16px;
    }
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
      color: #fff;
      letter-spacing: 0.035em;
    }
  }

  @media only screen and (max-width: 800px) {
    div {
      span {
        font-size: 16px;
      }
    }
  }
`;

type forumCardProps = forumProps & {
  userToken: string;
};

const ForumCard = (props: forumCardProps) => {
  const navigate = useNavigate();

  const forumNavigator = () => {
    topNavigator();
    navigate(`/forum/${props._id}`, {
      state: {
        forumId: props._id,
        userToken: props.userToken,
      },
    });
  };

  return props._id ? (
    <Section onClick={forumNavigator}>
      <Header>
        <Tag>{props.topic}</Tag>
        <Options></Options>
      </Header>
      <Question>
        {props.tagline.length > 85 ? (
          <>
            {props.tagline.slice(0, 84)}
            &nbsp;
            <span>...</span>
          </>
        ) : (
          props.tagline
        )}
      </Question>
      <Details>
        <User>
          <span>@{props.createdBy.userName}</span>
          <div>
            <span className="dot"></span>
            <span>{moment(props.createdAt).fromNow()}</span>
          </div>
        </User>
        <Stats>
          <div>
            <Plus color="#fff" />
            <span>{props.upvotes.length}</span>
          </div>
          <div>
            <Comments />
            <span>{props.answers.length}</span>
          </div>
        </Stats>
      </Details>
    </Section>
  ) : null;
};

export default ForumCard;

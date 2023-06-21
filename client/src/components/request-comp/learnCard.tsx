import React from "react";
import styled from "styled-components";
import UserChip from "../general-components/userChip";
import {
  InterestedIcon,
  PurchaseCoinIcon,
  RightArrowIcon,
} from "../general-components/svg";
import { getReadableDate } from "../../utils/helperFunctions";
import { useNavigate } from "react-router-dom";
import { learnCardProps } from "../../pages/requests/requests";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 22px;
  gap: 18px;
  background: #674ff1;
  background: #094067;
  border-radius: 16px;
  /* cursor: pointer; */
  font-family: "Nunito";
  transition: all 0.15s linear;
  font-family: "Nunito";
  font-style: normal;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Subject = styled.div`
  h4 {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #ffffff;
    color: #ef4565;
  }
`;

const Topic = styled.div`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #ffffff;
  /* max-height: 65px; */
  /*  */
  /* border: 1px solid white; */
  white-space: wrap;
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    gap: 6px;

    span {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      color: #ffffff;
    }
  }
`;

const TagBox = styled.div`
  /* border: 1px solid white; */
  width: 100%;
  margin-top: 0.6rem;

  display: flex;
  /* align-items: center; */
  column-gap: 12px;
  row-gap: 16px;
  flex-wrap: wrap;

  div {
    /* border: 1px solid white; */
    padding: 6px 10px;
    border-radius: 4px;
    background-color: white;
    background-color: #3da9fc;
    color: white;
    font-weight: 600;
  }
`;

const DateCont = styled.div`
  /* border: 1px solid white; */
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
`;

// const RequestWrapper = styled.div`
//   border: 1px solid red;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

const ExpandButton = styled.div`
  /* border: 1px solid red; */
  margin-top: 1rem;
  width: 100%;
  display: flex;
  /* justify-content: flex-end; */
  button {
    /* margin-right: rem; */
    outline: none;
    cursor: pointer;
    border: none;
    padding: 14px 24px;
    border-radius: 4px;
    background-color: #ef4565;
    color: white;

    display: flex;
    align-items: center;
    gap: 6px;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    /* line-height: 22px; */
    letter-spacing: 0.02em;
    color: #ffffff;
  }
`;

interface requestCardProps {
  _id: string;
  createdBy: {
    name: string;
    photo: string;
    id: string;
  };
  subject: string;
  topic: string;
  programme: string;
  standard: string;
  dueDate: string;
  interestedStudents: string[];
  preferredLanguage: string;
  description: string;
  expectations: string[];
  tags: string[];
}

const LearnCard = (props: learnCardProps) => {
  const navigate = useNavigate();

  const leanrCardOverviewNavigator = () => {
    navigate(`/learncard-overview/${props._id}`, {
      state: { learnCardId: props._id, backLink: "/requests" },
    });
  };

  return (
    <Section>
      <Subject>
        <h4>{props.subject}</h4>
      </Subject>
      <Topic>
        <span>
          {props.topic.length > 52
            ? props.topic.slice(0, 50) + "..."
            : props.topic}
        </span>
      </Topic>
      <UserChip
        name={props.createdBy.name}
        photo={props.createdBy.photo}
        imgBorder="#FFFFFF"
        textColor="#FFFFFF"
      />
      <Stats>
        <div>
          <InterestedIcon />
          <span>{props.interestedStudents.length} Interested</span>
        </div>
        <div>
          <DateCont>
            <span>Due - {getReadableDate(props.dueDate)}</span>
          </DateCont>
        </div>
      </Stats>
      <TagBox>
        {props.tags.map((tag, index) => {
          return (
            <div key={index}>
              <span>{tag}</span>
            </div>
          );
        })}
      </TagBox>
      <ExpandButton>
        <button type="button" onClick={leanrCardOverviewNavigator}>
          <span>Expand</span>
          <RightArrowIcon />
        </button>
      </ExpandButton>
    </Section>
  );
};

export default LearnCard;

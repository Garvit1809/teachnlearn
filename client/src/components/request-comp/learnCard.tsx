import React from "react";
import styled from "styled-components";
import UserChip from "../general-components/userChip";
import {
  InterestedIcon,
  PurchaseCoinIcon,
  RightArrowIcon,
} from "../general-components/svg";
import { getReadableDate, topNavigator } from "../../utils/helperFunctions";
import { useNavigate } from "react-router-dom";
import { learnCardProps } from "../../pages/requests/requests";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 22px;
  gap: 18px;
  background: #094067;
  border-radius: 16px;
  font-family: "Nunito";
  font-style: normal;
  transition: all 0.15s linear;

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
    color: #ef4565;
  }
`;

const Topic = styled.div`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #d8eefe;
  /* border: 1px solid white; */
  white-space: wrap;
`;

export const CardStats = styled.div`
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
      /* line-height: 30px; */
      color: #ffffff;
    }
  }
`;

export const TagBox = styled.div`
  /* border: 1px solid white; */
  width: 100%;
  margin-top: 0.2rem;
  display: flex;
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
  line-height: 20px;
  color: #ffffff;
`;

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

const LearnCard = (props: learnCardProps) => {
  const navigate = useNavigate();

  const leanrCardOverviewNavigator = () => {
    topNavigator();
    navigate(`/learncard-overview/${props._id}`, {
      state: { learnCardId: props._id, backLink: "/requests" },
    });
  };

  return (
    <Section onClick={leanrCardOverviewNavigator}>
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
        name={props.createdBy.userName}
        photo={props.createdBy.photo}
        imgBorder="#FFFFFF"
        textColor="#FFFFFF"
        userId={props.createdBy._id}
        hasUnderline={false}
        imgSize="26px"
        textSize="18px"
      />
      <CardStats>
        <div>
          <InterestedIcon />
          <span>{props.interestedStudents.length} Interested</span>
        </div>
        <div>
          <DateCont>
            <span>Due - {getReadableDate(props.dueDate)}</span>
          </DateCont>
        </div>
      </CardStats>
      <TagBox>
        {props.tags.map((tag, index) => {
          return (
            <div key={index}>
              <span>{tag}</span>
            </div>
          );
        })}
      </TagBox>
      {/* <ExpandButton>
        <button type="button" onClick={leanrCardOverviewNavigator}>
          <span>Expand</span>
          <RightArrowIcon />
        </button>
      </ExpandButton> */}
    </Section>
  );
};

export default LearnCard;

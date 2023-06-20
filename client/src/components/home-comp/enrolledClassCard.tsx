import React from "react";
import styled from "styled-components";
import { Calender } from "../general-components/svg";
import zoro from "../../assets/zoro.jpg";
import { classroomCardProps } from "../classroom-comp/classroomCard";
import { getReadableTime } from "../../utils/helperFunctions";

const Section = styled.div`
  background: #e7e5f1;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 14px;
  cursor: pointer;
  font-family: "Nunito";
  font-style: normal;

  transition: all 0.15s linear;

  &:hover {
    transform: translateY(-10px);
  }
`;

const TimeContainer = styled.div`
  background: rgba(0, 0, 0, 0.1);
  border-radius: 46px;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 10px;
  gap: 6px;

  span {
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    color: #1f2a37;
  }
`;

const Topic = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #000000;

  font-size: 24px;
  line-height: 33px;
`;

const Teacher = styled.div`
  display: flex;
  align-items: center;
  /* border: 1px solid red; */

  img {
    display: block;
    width: 28px;
    height: 28px;
    border: 1px solid #000000;
    border-radius: 50%;
    object-fit: contain;
    margin-right: 0.4rem;
  }

  span {
    font-weight: 400;
    font-size: 18px;
    /* line-height: 25px; */
    color: #000000;
  }
`;

// interface enrolledCardProps {
//   title: string;
//   author: string;
//   startingTime?: string;
//   endTime?: string;
// }

const EnrolledClassCard = (props: classroomCardProps) => {
  return (
    <Section>
      <TimeContainer>
        <Calender color="#1F2A37" />
        <span>
          {getReadableTime(props.classStartsAt) +
            " - " +
            getReadableTime(props.classEndsAt)}
        </span>
      </TimeContainer>
      <Topic>
        <span>{props.topic}</span>
      </Topic>
      <Teacher>
        <img src={props.createdBy.photo} alt="user-img" />
        <span>{props.createdBy.name}</span>
      </Teacher>
    </Section>
  );
};

export default EnrolledClassCard;

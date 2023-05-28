import React from "react";
import styled from "styled-components";
import { Calender } from "../general-components/svg";
// import Garvit from "../../assets/garvit.png";
import zoro from '../../assets/zoro.jpg'

const Section = styled.div`
  background: #e7e5f1;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 10px;
  cursor: pointer;

transition: all 0.15s linear;

&:hover{
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
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
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

interface enrolledCardProps {
  title: string;
  author: string;
  startingTime?: string;
  endTime?: string;
}

const EnrolledClassCard = (props: enrolledCardProps) => {
  return (
    <Section>
      <TimeContainer>
        <Calender color="#1F2A37" />
        <span>
          {props.startingTime} - {props.endTime}
        </span>
      </TimeContainer>
      <Topic>
        <span>{props.title}</span>
      </Topic>
      <Teacher>
        <img src={zoro} alt="user-img" />
        <span>{props.author}</span>
      </Teacher>
    </Section>
  );
};

export default EnrolledClassCard;

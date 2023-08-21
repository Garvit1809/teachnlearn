import React from "react";
import styled from "styled-components";
import { Calender } from "../general-components/svg";
import {
  getReadableDate,
  getReadableTime,
  topNavigator,
} from "../../utils/helperFunctions";
import UserChip from "../general-components/userChip";
import { useNavigate } from "react-router-dom";
import { teachinCardProps } from "../../types/teachingCardType";
import { DueCont, UserWrapper } from "./recommendedClassCard";

interface styleProps {
  isFirstCard: boolean;
}

const Section = styled.div<styleProps>`
  background: ${(p) => (p.isFirstCard ? "#094067" : "#D8EEFE")};
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

const TimeContainer = styled.div<styleProps>`
  background-color: ${(p) =>
    p.isFirstCard ? "rgba(255, 255, 255, 0.15)" : "#094067"};
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
    color: #ffffff;
  }
`;

const Topic = styled.div<styleProps>`
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  /* color: #000000; */
  color: ${(p) => (p.isFirstCard ? "#FFFFFF" : "#000000")};
  font-size: 24px;
  line-height: 33px;
`;

interface enrolledClassCardProps {
  card: teachinCardProps;
  isFirstCard: boolean;
  isSingleCard?: boolean;
}

const EnrolledClassCard = ({
  card,
  isFirstCard,
  isSingleCard,
}: enrolledClassCardProps) => {
  const navigate = useNavigate();
  const classNavigator = () => {
    topNavigator();
    navigate(`/classes/class/${card._id}`, {
      state: {
        classroomId: card._id,
        backPageLink: "/",
      },
    });
  };

  const firstCardCondn = isSingleCard ? false : isFirstCard;

  return (
    <Section isFirstCard={firstCardCondn} onClick={classNavigator}>
      <TimeContainer isFirstCard={firstCardCondn}>
        <Calender color="#FFFFFF" />
        <span>
          {getReadableTime(card.classStartsAt) +
            " - " +
            getReadableTime(card.classEndsAt)}
        </span>
      </TimeContainer>
      <Topic isFirstCard={firstCardCondn}>
        <span>
          {card.topic.length > 50
            ? card.topic.slice(0, 50) + " ..."
            : card.topic}
        </span>
      </Topic>
      <UserWrapper>
        <UserChip
          name={card.createdBy.userName}
          photo={card.createdBy.photo}
          imgBorder={firstCardCondn ? "white" : "black"}
          textColor={firstCardCondn ? "white" : "black"}
          userId={card.createdBy._id}
        />
      </UserWrapper>
    </Section>
  );
};

export default EnrolledClassCard;

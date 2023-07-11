import React from "react";
import styled from "styled-components";
import { InterestedIcon, PurchaseCoinIcon } from "../general-components/svg";
import UserChip from "../general-components/userChip";
import { learnCardProps } from "../../pages/requests/requests";
import { getReadableDate, topNavigator } from "../../utils/helperFunctions";
import { useNavigate } from "react-router-dom";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 22px;
  gap: 22px;
  background: #094067;
  border-radius: 16px;
  cursor: pointer;
  font-family: "Nunito";
  transition: all 0.15s linear;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Tag = styled.div`
  h4 {
    font-weight: 800;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #ef4565;
  }
`;

const Topic = styled.div`
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #ffffff;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
`;

const Stats = styled.div`
  /* border: 1px solid white; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

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

const UserWrapper = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DueCont = styled.div`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;

// const ExploreBtn = styled.div``;

const RequestCard = (props: learnCardProps) => {
  const navigate = useNavigate();

  const requestCardNavigator = () => {
    topNavigator();
    navigate(`/learncard-overview/${props._id}`, {
      state: {
        learnCardId: props._id,
        backLink: "/",
      },
    });
  };

  return (
    <Section onClick={requestCardNavigator}>
      <Tag>
        <h4>{props.subject}</h4>
      </Tag>
      <Topic>
        <span>
          {props.topic.length > 50
            ? props.topic.slice(0, 50) + " ..."
            : props.topic}
        </span>
      </Topic>
      <UserWrapper>
        <UserChip
          name={props.createdBy.name}
          photo={props.createdBy.photo}
          imgBorder="#FFFFFF"
          textColor="#FFFFFF"
          userId={props.createdBy._id}
        />
      </UserWrapper>
      <Stats>
        <div>
          <InterestedIcon />
          <span>{props.interestedStudents.length} Interested</span>
        </div>
        <DueCont>
          <span>Due - {getReadableDate(props.dueDate)}</span>
        </DueCont>
      </Stats>
    </Section>
  );
};

export default RequestCard;

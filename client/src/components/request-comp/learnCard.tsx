import React from "react";
import styled from "styled-components";
import UserChip from "../general-components/userChip";
import { InterestedIcon, PurchaseCoinIcon } from "../general-components/svg";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 22px;
  gap: 16px;
  background: #674ff1;
  border-radius: 16px;
  cursor: pointer;
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
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #ffffff;
  }
`;

const Topic = styled.div`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #ffffff;
`;

const Stats = styled.div`
  /* border: 1px solid white; */
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
  row-gap: 12px;
  flex-wrap: wrap;

  div {
    /* border: 1px solid white; */
    padding: 6px 8px;
    border-radius: 8px;
    background-color: white;
  }
`;

const DateCont = styled.div`
  /* border: 1px solid white; */

  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
`;

const RequestWrapper = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface requestCardProps {
  subject: string;
  title: string;
  author: string;
  interested?: number;
  preferredLanguage: string;
  coins?: number;
  description: string;
  expectations: string[];
  tags: string[];
  dueDate: string;
}

const LearnCard = (props: requestCardProps) => {
  return (
    <Section>
      <Subject>
        <h4>{props.subject}</h4>
      </Subject>
      <Topic>
        <span>{props.title}</span>
      </Topic>
      <RequestWrapper>
        <UserChip name={props.author} imgBorder="#FFFFFF" textColor="#FFFFFF" />
        <DateCont>
          <span>Due - {props.dueDate}</span>
        </DateCont>
      </RequestWrapper>
      <Stats>
        <div>
          <InterestedIcon />
          <span>{props.interested} Interested</span>
        </div>
        <div>
          <PurchaseCoinIcon />
          <span>{props.coins} Coins</span>
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
    </Section>
  );
};

export default LearnCard;

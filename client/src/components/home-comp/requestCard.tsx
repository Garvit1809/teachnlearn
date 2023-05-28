import React from "react";
import styled from "styled-components";
import zoro from "../../assets/zoro.jpg";
import { InterestedIcon, PurchaseCoinIcon } from "../general-components/svg";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 22px;
  gap: 14px;
  background: #674ff1;
  border-radius: 16px;
  cursor: pointer;

  transition: all 0.15s linear;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Tag = styled.div`
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
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #ffffff;
`;

const Teacher = styled.div`
  display: flex;
  align-items: center;
  /* border: 1px solid red; */

  img {
    display: block;
    width: 28px;
    height: 28px;
    border: 1px solid #ffffff;
    border-radius: 50%;
    object-fit: contain;
    margin-right: 0.4rem;
  }

  span {
    font-weight: 400;
    font-size: 18px;
    /* line-height: 25px; */
    color: #ffffff;
  }
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

interface requestCardProps {
  category?: string;
  title: string;
  author: string;
  interested?: number;
  coins?: number;
}

const RequestCard = (props: requestCardProps) => {
  return (
    <Section>
      <Tag>
        <h4>{props.category}</h4>
      </Tag>
      <Topic>
        <span>{props.title}</span>
      </Topic>
      <Teacher>
        <img src={zoro} alt="user-img" />
        <span>{props.author}</span>
      </Teacher>
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
    </Section>
  );
};

export default RequestCard;

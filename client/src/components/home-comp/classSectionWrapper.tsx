import React from "react";
import styled from "styled-components";
import { Arrow } from "../general-components/svg";
import EnrolledClassCard from "./enrolledClassCard";

const Section = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Heading = styled.h3`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #000000;
`;

const SeeAll = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 16px;
  gap: 12px;
  cursor: pointer;

  /* width: 110px; */
  height: 41px;

  background: #eeeeee;
  border-radius: 46px;

  span {
    margin: 0;
    padding: 0;
    /* border: 1px solid red; */
  }
`;

const CardGrid = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

interface wrapperProps {
  heading: string;
  cardArr: Array<cardObj>;
  type: string;
}

interface cardObj {
  category?: string;
  title: string;
  author: string;
  interested?: number;
  coins?: number;
  startingTime?: string;
  endTime?: string;
}

const ClassSectionWrapper = (props: wrapperProps) => {
  return (
    <Section>
      <Header>
        <Heading>Classes recommended to you!</Heading>
        <SeeAll>
          <span>See All</span>
          <Arrow strokeColor="#384250" />
        </SeeAll>
      </Header>
      <CardGrid>
        {props.cardArr.map((card, index) => {
          return props.type == 'enrolled' ? <EnrolledClassCard key={index} {...card} /> : "hebvhbhv";
        })}
      </CardGrid>
    </Section>
  );
};

export default ClassSectionWrapper;

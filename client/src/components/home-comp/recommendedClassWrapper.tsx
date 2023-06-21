import React from "react";
import styled from "styled-components";
import { classroomCardProps } from "../classroom-comp/classroomCard";
import { Arrow } from "../general-components/svg";
import { useNavigate } from "react-router-dom";
import EnrolledClassCard from "./enrolledClassCard";
import RequestCard from "./requestCard";
import RecommendedClassCard from "./recommendedClassCard";

const Section = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  /* margin-bottom: 4rem; */
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Nunito";
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
  height: 41px;
  background: #eeeeee;
  border-radius: 46px;

  span {
    margin: 0;
    padding: 0;
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
  cardArr: Array<classroomCardProps>;
  userId: string;
}

const RecommendedClassWrapper = (props: wrapperProps) => {
  const navigate = useNavigate();
  const classNavigator = () => {
    navigate("/classes");
  };

  return (
    <Section>
      <Header>
        <Heading>{props.heading}</Heading>
        <SeeAll onClick={classNavigator}>
          <span>See All</span>
          <Arrow strokeColor="#384250" />
        </SeeAll>
      </Header>
      <CardGrid>
        {props.cardArr.map((card, index) => {
          return (
            <RecommendedClassCard
              key={index}
              card={card}
              userId={props.userId}
            />
          );
        })}
      </CardGrid>
    </Section>
  );
};

export default RecommendedClassWrapper;
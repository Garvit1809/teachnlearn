import React from "react";
import styled from "styled-components";
import { Arrow } from "../general-components/svg";
import EnrolledClassCard from "./enrolledClassCard";
import RequestCard from "./requestCard";
import { classroomCardProps } from "../classroom-comp/classroomCard";
import { useNavigate } from "react-router-dom";

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
}

const EnrolledClassWrapper = (props: wrapperProps) => {
  const navigate = useNavigate();

  const enrolledClassNavigator = () => {
    navigate("/classes", {
      state: {
        elemLink: "upcoming",
      },
    });
  };

  return (
    <Section>
      <Header>
        <Heading>{props.heading}</Heading>
        <SeeAll onClick={enrolledClassNavigator}>
          <span>See All</span>
          <Arrow strokeColor="#384250" />
        </SeeAll>
      </Header>
      <CardGrid>
        {props.cardArr.map((card, index) => {
          return <EnrolledClassCard key={index} {...card} />;
        })}
      </CardGrid>
    </Section>
  );
};

export default EnrolledClassWrapper;

import React, { useState } from "react";
import styled from "styled-components";
import { Arrow } from "../general-components/svg";
import { useNavigate } from "react-router-dom";
import RecommendedClassCard from "./recommendedClassCard";
import { topNavigator } from "../../utils/helperFunctions";
import { teachinCardProps } from "../../types/teachingCardType";
import Loader from "../general-components/loader";
import ClassroomCard from "../classroom-comp/classroomCard";

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

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1rem;
  }
`;

const Heading = styled.h3`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #000000;
  /* border: 1px solid red; */
  width: 70%;

  @media only screen and (max-width: 1000px) {
    font-size: 26px;
    line-height: 32px;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const SeeAll = styled.div`
  /* border: 1px solid red; */
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

  @media only screen and (max-width: 600px) {
    align-self: flex-end;
    gap: 10px;
    span {
      font-size: 14px;
      font-weight: 600;
    }

    svg {
      width: 1rem;
      /* height: 1rem; */
    }
  }
`;

const CardGrid = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @media only screen and (max-width: 1170px) {
    /* grid-template-columns: 1fr 1fr; */
    /* gap: 1rem; */
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

interface wrapperProps {
  heading: string;
  cardArr: Array<teachinCardProps>;
  userId: string;
  loading: boolean;
}

const RecommendedClassWrapper = (props: wrapperProps) => {
  const navigate = useNavigate();
  const classNavigator = () => {
    topNavigator();
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
      {
        props.loading ? (
          <Loader />
        ) : (
          // props.cardArr && props.cardArr.length != 0 ? (
          props.cardArr.length != 0 && (
            <CardGrid>
              {props.cardArr.map((card, index) => {
                return (
                  <RecommendedClassCard
                    key={index}
                    card={card}
                    userId={props.userId}
                  />
                  // <ClassroomCard teachCard={card} />
                );
              })}
            </CardGrid>
          )
        )
        // ) : (
        // <h3>No cards here</h3>
        // )
      }
    </Section>
  );
};

export default RecommendedClassWrapper;

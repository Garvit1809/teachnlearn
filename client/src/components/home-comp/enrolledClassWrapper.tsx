import React from "react";
import styled from "styled-components";
import { Arrow } from "../general-components/svg";
import EnrolledClassCard from "./enrolledClassCard";
import { useNavigate } from "react-router-dom";
import { topNavigator } from "../../utils/helperFunctions";
import { teachinCardProps } from "../../types/teachingCardType";
import Loader from "../general-components/loader";
import NoClassComp from "../classroom-comp/noClassComp";

const Section = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  /* margin-bottom: 1rem; */
`;

const Header = styled.div`
  /* border: 1px solid red; */
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
  loading: boolean;
}

const EnrolledClassWrapper = (props: wrapperProps) => {
  const navigate = useNavigate();

  const enrolledClassNavigator = () => {
    topNavigator();
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
        {!props.loading && props.cardArr.length != 0 && (
          <SeeAll onClick={enrolledClassNavigator}>
            <span>See All</span>
            <Arrow strokeColor="#384250" />
          </SeeAll>
        )}
      </Header>
      {props.loading ? (
        <Loader />
      ) : props.cardArr.length != 0 ? (
        <CardGrid>
          {props.cardArr.map((card, index) => {
            return (
              <EnrolledClassCard
                key={index}
                card={card}
                isFirstCard={index == 0}
                isSingleCard={props.cardArr.length == 1}
              />
            );
          })}
        </CardGrid>
      ) : (
        <NoClassComp
          elemLink="all classes"
          // heading="No upcoming classes"
          subHeading="You don't have any upcoming classes. Enroll in a class and start your
        learning"
        />
      )}
    </Section>
  );
};

export default EnrolledClassWrapper;

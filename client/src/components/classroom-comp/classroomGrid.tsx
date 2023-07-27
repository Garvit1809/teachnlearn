import React from "react";
import styled from "styled-components";
import ClassroomCard from "./classroomCard";
import { teachinCardProps } from "../../types/teachingCardType";

const Section = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 3.2rem;

  @media only screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1.6rem;
    row-gap: 1.6rem;
  }
  /* @media only screen and (max-width: 750px) {
    column-gap: 1.5rem;
    row-gap: 1.5rem;
  } */
  @media only screen and (max-width: 750px) {
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
  }
`;

interface gridProps {
  teachCards: Array<teachinCardProps>;
  elemType?: string;
}

export const cardSizes = {
  hasAnimation: true,
  imageHeight: "180px",
  gap: "18px",
  headerSize: "16px",
  titleSize: "20px",
  titleLineHeight: "30px",
  btnSize: "16px",
  svgSize: "18px",
  userChipImgSize: "26px",
  userChipTextSize: "18px",
};

const ClassroomGrid = (props: gridProps) => {
  return (
    <Section>
      {props.teachCards.map((teachCard, index) => {
        return (
          <ClassroomCard
            cssArr={cardSizes}
            teachCard={teachCard}
            key={index}
            elemType={props.elemType}
          />
        );
      })}
    </Section>
  );
};

export default ClassroomGrid;

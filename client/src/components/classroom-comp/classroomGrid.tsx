import React from "react";
import styled from "styled-components";
import ClassroomCard from "./classroomCard";
import { teachCardProps } from "../../pages/classroom/classrooms";
import { teachingCardProps } from "../../types/teachingCardType";

const Section = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 4rem;
`;

interface gridProps {
  teachCards: Array<teachingCardProps>;
  elemType: string,
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
  userChipTextSize: "16px",
};

const ClassroomGrid = (props: gridProps) => {
  return (
    <Section>
      {props.teachCards.map((teachCard, index) => {
        return (
          <ClassroomCard cssArr={cardSizes} teachCard={teachCard} key={index} elemType={props.elemType} />
        );
      })}
    </Section>
  );
};

export default ClassroomGrid;

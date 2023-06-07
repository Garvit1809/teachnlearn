import React from "react";
import styled from "styled-components";
import ClassroomCard from "./classroomCard";

const Section = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 4rem;
`;

const ClassroomGrid = () => {
  const cardSizes = {
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

  return (
    <Section>
      <ClassroomCard cssArr={cardSizes} />
      <ClassroomCard cssArr={cardSizes} />
      <ClassroomCard cssArr={cardSizes} />
      <ClassroomCard cssArr={cardSizes} />
      <ClassroomCard cssArr={cardSizes} />
    </Section>
  );
};

export default ClassroomGrid;

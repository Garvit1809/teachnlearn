import React from "react";
import { styled } from "styled-components";
import LearnCard from "./learnCard";
import { learnCardProps } from "../../pages/requests/requests";

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2.5rem;
`;

interface learnCardGridProps {
  learnCards: Array<learnCardProps>;
}

const LearnCardGrid = ({ learnCards }: learnCardGridProps) => {
  return (
    <CardGrid>
      {learnCards.map((card, index) => {
        return <LearnCard key={index} {...card} />;
      })}
    </CardGrid>
  );
};

export default LearnCardGrid;

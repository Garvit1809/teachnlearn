import { styled } from "styled-components";
import LearnCard from "./learnCard";
import { learnCardProps } from "../../pages/requests/requests";

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2.5rem;

  @media only screen and (max-width: 1100px) {
    column-gap: 1rem;
  }
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1.6rem;
    row-gap: 1.6rem;
  }
  @media only screen and (max-width: 750px) {
    column-gap: 1.5rem;
    row-gap: 1.5rem;
  }
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
  }
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

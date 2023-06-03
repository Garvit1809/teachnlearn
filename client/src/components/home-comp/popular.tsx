import React from "react";
import styled from "styled-components";
import ClassroomCard from "../classroom-comp/classroomCard";
import RequestCard from "./requestCard";
import PopularFilter from "./popularFilter";

const Section = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr 1fr;
  gap: 24px;

  div {
    /* border: 1px solid red; */
  }
`;

const FilterContainer = styled.div`
  /* border: 1px solid red; */
`;

const ClassroomCardContainer = styled.div`
  display: flex;
  position: relative;
`;

const PopularTag = styled.div`
  position: absolute;
  padding: 4px 8px;
  background: #ffffff;
  border-radius: 4px;
  top: 1rem;
  left: 1rem;

  span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #364152;
  }
`;

const RequestCardContainer = styled.div`
  /* padding-top: 1rem; */
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  grid-template-rows: 1fr 1fr;
`;

const CardCont = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 50%;
`;

const CARDDATA = [
  {
    author: "Garvit Varshney",
    title: "Learn Serverless in 1 hour with AWS and Apache for XYZ",
    coins: 200,
    interested: 22,
    category: "Web Development",
  },
  {
    author: "Garvit Varshney",
    title: "Learn Serverless in 1 hour with AWS and Apache for XYZ fellow",
    coins: 200,
    interested: 22,
    category: "Web Development",
  },
];

const Popular = () => {
  return (
    <Section>
      <FilterContainer>
        <PopularFilter />
      </FilterContainer>
      <ClassroomCardContainer>
        <ClassroomCard />
        <PopularTag>
          <span>Popular</span>
        </PopularTag>
      </ClassroomCardContainer>
      <RequestCardContainer>
        {CARDDATA.map((card, index) => {
          return (
            <CardCont key={index}>
              <RequestCard {...card} />
            </CardCont>
          );
        })}
      </RequestCardContainer>
    </Section>
  );
};

export default Popular;

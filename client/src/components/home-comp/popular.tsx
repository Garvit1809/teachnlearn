import React from "react";
import styled from "styled-components";
import ClassroomCard from "../classroom-comp/classroomCard";
import RequestCard from "./requestCard";
import PopularFilter from "./popularFilter";

const Section = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr 1fr;
  gap: 24px;

  div{
    /* border: 1px solid red; */
  }
`;

const FilterContainer = styled.div`
  /* border: 1px solid red; */
  `;

const ClassroomCardContainer = styled.div`
/* border: 1px solid red;   */
display: flex;
/* align-items: flex-start; */
/* justify-content: flex-start; */
`

const Popular = () => {
  return (
    <Section>
      <FilterContainer>
        <PopularFilter />
      </FilterContainer>
      <ClassroomCardContainer>

        <ClassroomCard />
      </ClassroomCardContainer>
      <div>
        <RequestCard
          author="Garvit Varshney"
          title="Learn Serverless in ! hour"
          category="Web Development"
          coins={220}
          interested={19}
        />
      </div>
    </Section>
  );
};

export default Popular;

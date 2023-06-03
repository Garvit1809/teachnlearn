import React from "react";
import styled from "styled-components";
import ClassroomCard from "../../components/classroom-comp/classroomCard";
import Navbar from "../../components/general-components/navbar";
import Intro from "../../components/home-comp/intro";

const Section = styled.div`
  /* display: grid; */
  /* grid-template-columns: auto auto auto; */
  /* gap: 20px; */
  padding: 0 6.3vw;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const Classrooms = () => {
  return (
    <>
      <Navbar />
      <Section>
        <Intro />
      </Section>
    </>
  );
};

export default Classrooms;

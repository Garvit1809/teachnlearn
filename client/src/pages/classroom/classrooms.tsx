import React from "react";
import styled from "styled-components";
import ClassroomCard from "../../components/classroom-comp/classroomCard";
import Navbar from "../../components/general-components/navbar";

const Section = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
`;

const Classrooms = () => {
  return (
    <>
      <Navbar />
      <Section>
        <ClassroomCard />
        <ClassroomCard />
        <ClassroomCard />
      </Section>
    </>
  );
};

export default Classrooms;

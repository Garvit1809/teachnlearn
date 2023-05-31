import React, { useState } from "react";
import Navbar from "../../components/general-components/navbar";
import styled from "styled-components";

const Section = styled.div`
  margin-top: 1.5rem;
`;

const ClassroomRouter = styled.div`
  border-bottom: 1px solid #b4b4b4;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s linear;

  .highlighted {
    color: #000000;
    &::after {
      content: "";
      transition: all 0.15s linear;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 4px solid #674ff1;
    }
  }
`;

const ClassNavOption = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  padding: 0 4.5rem 0.5rem;
  position: relative;
  color: #979797;
  cursor: pointer;
`;

const SingleClassroom = () => {
  const [activeLink, setActiveLink] = useState("overview");

  return (
    <>
      <Navbar />
      <Section>
        <ClassroomRouter>
          <ClassNavOption
            className={activeLink == "overview" ? "highlighted" : undefined}
            onClick={() => setActiveLink("overview")}
          >
            Overview
          </ClassNavOption>
          <ClassNavOption
            className={activeLink == "classroom" ? "highlighted" : undefined}
            onClick={() => setActiveLink("classroom")}
          >
            Classroom
          </ClassNavOption>
          <ClassNavOption
            className={activeLink == "people" ? "highlighted" : undefined}
            onClick={() => setActiveLink("people")}
          >
            People
          </ClassNavOption>
        </ClassroomRouter>
      </Section>
    </>
  );
};

export default SingleClassroom;

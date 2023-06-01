import React, { ReactElement, useEffect, useState } from "react";
import Navbar from "../../components/general-components/navbar";
import styled from "styled-components";
import Overview from "../../components/classroom-comp/overview";
import Participants from "../../components/classroom-comp/participants";
import Footer from "../../components/general-components/footer/footer";

const Section = styled.div`
  margin-top: 2rem;
`;

const ClassroomRouter = styled.div`
  border-bottom: 1px solid #b4b4b4;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s linear;
  width: 80%;
  margin: 0 auto;

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

const ElementWrapper = styled.div`
  margin: 3rem 10vw 0;
  /* border: 1px solid red; */
`;

const SingleClassroom = () => {
  const [activeLink, setActiveLink] = useState("overview");

  useEffect(() => {
    if (activeLink == "overview") {
      setElement(<Overview />);
    } else if (activeLink == "people") {
      setElement(<Participants />);
    }
  }, [activeLink]);

  const [element, setElement] = useState<ReactElement>(<Overview />);

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
        <ElementWrapper>{element}</ElementWrapper>
      </Section>
      <Footer />
    </>
  );
};

export default SingleClassroom;

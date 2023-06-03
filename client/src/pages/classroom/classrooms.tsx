import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import ClassroomCard from "../../components/classroom-comp/classroomCard";
import Navbar from "../../components/general-components/navbar";
import Intro from "../../components/home-comp/intro";
import HorizontalNavigator from "../../components/general-components/horizontalNavigator";
import Footer from "../../components/general-components/footer/footer";

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

  const [activeLink, setActiveLink] = useState("all classes");

  // useEffect(() => {
  //   if (activeLink == "overview") {
  //     setElement(<Overview />);
  //   } else if (activeLink == "classroom") {
  //     setElement(<Classroom />);
  //   } else if (activeLink == "people") {
  //     setElement(<Participants />);
  //   }
  // }, [activeLink]);

  // const [element, setElement] = useState<ReactElement>(<Overview />);

  const navigationHandler = (navigateTo: string) => {
    setActiveLink(navigateTo);
  };

  const labels = ['all classes', 'upcoming', 'completed']

  return (
    <>
      <Navbar />
      <Section>
        <Intro />
        <HorizontalNavigator activeLink={activeLink} labelArr={labels} navigationHandler={navigationHandler}  />
        <Footer />
      </Section>
    </>
  );
};

export default Classrooms;

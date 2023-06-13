import React from "react";
import Navbar from "../../components/general-components/navbar";
import styled from "styled-components";
import Intro from "../../components/home-comp/intro";
import RecommendedClasses from "../../components/home-comp/recommendedClasses";
import Footer from "../../components/general-components/footer/footer";
import ClassSectionWrapper from "../../components/home-comp/classSectionWrapper";
import Popular from "../../components/home-comp/popular";

const Section = styled.div`
  /* border: 1px solid brown; */
  padding: 0 6.3vw;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const cardDetails = [
  {
    category: "Web Development",
    title: "Get started in Web Development and get selected in MH Fellowsip",
    author: "Garvit Varshney",
    interested: 22,
    coins: 220,
  },
  {
    category: "Web Dev",
    title: "Get started in Web Development and get selected in MH Fellowsip",
    author: "Garvit Varshney",
    interested: 22,
    coins: 220,
  },
  {
    category: "Web Dev",
    title: "Get started in Web Development and get selected in MH Fellowsip",
    author: "Garvit Varshney",
    interested: 22,
    coins: 220,
  },
  {
    category: "Web Dev",
    title: "Get started in Web Development and get selected in MH Fellowsip",
    author: "Garvit Varshney",
    interested: 22,
    coins: 220,
  },
];

const enrolledClassData = [
  {
    title: "Get started in Web Development and get selected in MH Fellowsip",
    author: "Garvit Varshney",
    startingTime: "10:00",
    endTime: "11:00 AM",
  },
  {
    title: "Get started in Web Development and get selected in MH Fellowsip",
    author: "Garvit Varshney",
    startingTime: "10:00",
    endTime: "11:00 AM",
  },
  {
    title: "Get started in Web Development and get selected in MH Fellowsip",
    author: "Garvit Varshney",
    startingTime: "10:00",
    endTime: "11:00 AM",
  },
  {
    title: "Get started in Web Development and get selected in MH Fellowsip",
    author: "Garvit Varshney",
    startingTime: "10:00",
    endTime: "11:00 AM",
  },
  {
    title: "Get started in Web Development and get selected in MH Fellowsip",
    author: "Garvit Varshney",
    startingTime: "10:00",
    endTime: "11:00 AM",
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <Section>
        <Intro />
        {/* <Popular /> */}
        <ClassSectionWrapper
          heading="Classes recommended for you!"
          cardArr={cardDetails}
          type="request"
        />
        <ClassSectionWrapper heading="Upcoming Enrolled Classes!" cardArr={enrolledClassData} type="enrolled" />
        <ClassSectionWrapper heading="Rising Requests!" cardArr={cardDetails} type="request"/>
        <Footer />
      </Section>
    </>
  );
};

export default Home;

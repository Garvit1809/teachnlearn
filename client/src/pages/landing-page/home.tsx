import React from "react";
import Navbar from "../../components/general-components/navbar";
import styled from "styled-components";
import Intro from "../../components/home-comp/intro";
import RecommendedClasses from "../../components/home-comp/recommendedClasses";
import Footer from "../../components/general-components/footer/footer";

const Section = styled.div`
  /* border: 1px solid brown; */
  padding: 0 6.3vw;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <Section>
        <Intro />
        <RecommendedClasses />
        <Footer/>
      </Section>
    </>
  );
};

export default Home;

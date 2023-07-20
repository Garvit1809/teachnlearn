import React from "react";
import Navbar from "../../components/general-components/navbar";
import Footer from "../../components/general-components/footer/footer";
import styled from "styled-components";
import LandingpageNav from "../../components/profile-comp/landingpageNav";

const Section = styled.div`
  padding: 4rem 6.3vw 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: 2.8rem;
    font-weight: 500;
    border-bottom: 2px solid black;
    width: fit-content;
    line-height: 1;
  }

  span {
    width: 90%;
    font-size: 1.2rem;
  }
`;

const About = () => {
  return (
    <>
      <LandingpageNav />
      <Navbar />
      <Section>
        <h2>About us</h2>
        <span>
          We are group of enthusiastic youngsters from various backgrounds and
          we are here to bring you some of the best ways in which you can apply
          the Feynman Technique to master any topic you want to learn and turn
          you into a SUPER STUDENT!
        </span>
      </Section>
      <Footer />
    </>
  );
};

export default About;

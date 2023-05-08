import React from "react";
import Navbar from "../../components/general-components/navbar";
import styled from "styled-components";
import Intro from "../../components/home-comp/intro";

const Section = styled.div`
/* border: 1px solid brown; */
`

const Home = () => {
  return (
    <Section>
      <Navbar />
      <Intro/>
    </Section>
  );
};

export default Home;

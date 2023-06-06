import React, { ReactElement, useEffect, useState } from "react";
import Navbar from "../../components/general-components/navbar";
import styled from "styled-components";
import Overview from "../../components/classroom-comp/overview";
import Participants from "../../components/classroom-comp/participants";
import Footer from "../../components/general-components/footer/footer";
import Classroom from "../../components/classroom-comp/classroom";
import HorizontalNavigator from "../../components/general-components/horizontalNavigator";
import FooterWrapper from "../../components/general-components/footer/footerWrapper";

const Section = styled.div`
  /* margin: 2rem 0 3rem; */
  padding: 2rem 15vw 0;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  /* gap: 2.5rem; */

  font-family: "Nunito";
  font-style: normal;
`;

const ElementWrapper = styled.div`
  margin: 3rem 0 0;
`;

const SingleClassroom = () => {
  const [activeLink, setActiveLink] = useState("overview");

  useEffect(() => {
    if (activeLink == "overview") {
      setElement(<Overview />);
    } else if (activeLink == "classroom") {
      setElement(<Classroom />);
    } else if (activeLink == "people") {
      setElement(<Participants />);
    }
  }, [activeLink]);

  const [element, setElement] = useState<ReactElement>(<Overview />);

  const navigationHandler = (navigateTo: string) => {
    setActiveLink(navigateTo);
  };

  const labels = ["overview", "classroom", "people"];

  return (
    <>
      <Navbar />
      <Section>
        <HorizontalNavigator
          activeLink={activeLink}
          labelArr={labels}
          navigationHandler={navigationHandler}
        />
        <ElementWrapper>{element}</ElementWrapper>
      </Section>
      <FooterWrapper />
    </>
  );
};

export default SingleClassroom;

import React from "react";
import styled from "styled-components";
import Footer from "./footer";

const Section = styled.div`
  padding: 0 6.3vw;
`;

const FooterWrapper = () => {
  return (
    <Section>
      <Footer />
    </Section>
  );
};

export default FooterWrapper;

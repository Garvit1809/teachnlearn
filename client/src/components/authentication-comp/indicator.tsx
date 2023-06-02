import React from "react";
import styled from "styled-components";

const Section = styled.div<indicatorProps>`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 70%;
  margin-bottom: 2.5rem;

  div {
    transition: all 0.15s linear;
    height: 10px;
    border-radius: 38px;
    width: 100%;
  }

  div.first {
    background: ${(p) => (p.index == 0 ? "#332ad5" : "#D5D9EB")};
  }

  div.second {
    background: ${(p) => (p.index == 1 ? "#332ad5" : "#D5D9EB")};
  }
`;

interface indicatorProps {
  index: number;
}

const Indicator = (props: indicatorProps) => {
  return (
    <Section index={props.index}>
      <div className="first"></div>
      <div className="second"></div>
    </Section>
  );
};

export default Indicator;

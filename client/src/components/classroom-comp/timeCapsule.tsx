import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 22px;
  gap: 10px;
  background: #d1fadf;
  border-radius: 30px;

  font-weight: 600;
  font-size: 17px;
  line-height: 27px;
  color: #054f31;
  margin-bottom: 1.5rem;

  div {
    width: 4px;
    height: 4px;
    background-color: #054f31;
    border-radius: 50%;
    /* border: 1px solid red; */
  }
`;

const TimeCapsule = () => {
  return (
    <Section>
      <span>27th April</span>
      <div></div>
      <span>01 - 02 PM</span>
    </Section>
  );
};

export default TimeCapsule;
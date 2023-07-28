import React from "react";
import { styled } from "styled-components";

const Section = styled.div`
  /* border: 1px solid red; */
  font-size: 2rem;
  font-weight: 500;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Message = () => {
  return <Section>Coming Soon...</Section>;
};

export default Message;

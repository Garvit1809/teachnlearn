import React from "react";
import styled from "styled-components";
import EditBtn from "./editBtn";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 28px;
  gap: 18px;

  /* width: 764px; */
  /* height: 312px; */
  border: 1px solid #d5d9eb;
  border-radius: 32px;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  /* border: 1px solid red; */
  width: 100%;
  justify-content: space-between;

  h4 {
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.02em;
    color: #000000;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  row-gap: 1rem;
  /* border: 1px solid red; */
  width: 100%;

  div {
    /* border: 1px solid red; */
    h4 {
      font-size: 16px;
      line-height: 25px;
      letter-spacing: 0.02em;
      color: #4b5565;
      text-transform: capitalize;
    }
  }
  span {
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0.02em;
    color: #000000;
  }
`;

interface wrapperProps {
  children?: JSX.Element;
}

const InfoWrapper = ({ children }: wrapperProps) => {
  return (
    <Section>
      <Header>
        <h4>Contact Information</h4>
        <EditBtn />
      </Header>
      <>{children}</>
    </Section>
  );
};

export default InfoWrapper;

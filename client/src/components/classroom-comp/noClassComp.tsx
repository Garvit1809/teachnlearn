import React from "react";
import styled from "styled-components";
import { Arrow } from "../general-components/svg";
import { useNavigate } from "react-router-dom";

const Section = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 0.7rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: 500;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #98a2b3;
  }

  button {
    display: flex;
    padding: 1.125rem 2.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.5rem;
    background: #332ad5;
    color: #fff;
    border: none;
    cursor: pointer;
    font-family: "Nunito";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

interface noClassProps {
  elemLink: string;
  heading: string;
  subHeading: string;
}

const NoClassComp = (props: noClassProps) => {
  const navigate = useNavigate();
  const checkClassNavigator = () => {
    navigate("/classes", {
      state: {
        elemLink: props.elemLink,
      },
    });
  };
  return (
    <Section>
      <h2>{props.heading}</h2>
      <h3>{props.subHeading}</h3>
      <button onClick={checkClassNavigator}>
        <span>Check Classes</span>
        <Arrow strokeColor="white" />
      </button>
    </Section>
  );
};

export default NoClassComp;

import React from "react";
import styled from "styled-components";
import IntroImg from "../../assets/home-intro-img.png";
// import Arrow from "../../assets/Arrow.svg";
import { Arrow } from "../general-components/svg";
import { Link } from "react-router-dom";

const Section = styled.div`
  /* border: 1px solid pink; */
  background: #fdf5ec;
  border-radius: 12px;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 60px;
  margin-top: 50px;
  margin-bottom: 1rem;
  box-sizing: border-box;

  font-family: "Nunito";
  font-style: normal;
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 35px;
  width: 60%;
  margin-right: 5vw;

  p {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
`;

const Headers = styled.div``;

const Heading = styled.h2`
  font-weight: 700;
  font-size: 39px;
  line-height: 121.4%;
  color: #000000;
`;

const ImageContainer = styled.div`
  width: 419.57px;
  height: 335.33px;
  /* border: 1px solid red; */

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px 40px;
    gap: 10px;

    height: 61px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;

    background: #332ad5;
    color: #ffffff;
    border-radius: 8px;
    border: 0;
    outline: none;
    cursor: pointer;
  }

  button.request {
    color: #364152;
    background: rgba(51, 42, 213, 0.05);
  }

  button:first-child {
    margin-right: 3vw;
  }
`;

const Intro = () => {
  return (
    <Section>
      <InfoContainer>
        <Headers>
          <Heading>Quick and Easy Learning:</Heading>
          <Heading>Byte-Sized Classes for Everyone</Heading>
        </Headers>
        <p>
          Discover bite-sized classes designed to make learning accessible and
          fun for everyone, regardless of prior knowledge.
        </p>
        <Buttons>
          <Link to="/classes">
            <button>
              <span>See all classes</span>
              <Arrow strokeColor="white" />
            </button>
          </Link>
          <Link to="/create-learn-request">
            <button className="request">
              <span>Create a request</span>
              <Arrow strokeColor="#364152" />
            </button>
          </Link>
        </Buttons>
      </InfoContainer>
      <ImageContainer>
        <img src={IntroImg} alt="intro-img" />
      </ImageContainer>
    </Section>
  );
};

export default Intro;

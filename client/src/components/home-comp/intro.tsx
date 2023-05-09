import React from "react";
import styled from "styled-components";
import IntroImg from "../../assets/home-intro-img.png";
// import Arrow from "../../assets/Arrow.svg";
import { Arrow } from "../general-components/svg";

const Section = styled.div`
  /* border: 1px solid pink; */
  background: #fdf5ec;
  border-radius: 12px;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 60px;
  /* margin: 5rem 6.3vw 0 6.3vw; */
  margin-top: 3.5rem;
  margin-bottom: 2rem;
  box-sizing: border-box;
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 35px;;
  width: 60%;
  margin-right: 5vw;
  /* border: 1px solid red; */

  p {
    /* font-style: normal; */
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
  /* justify-content: space-between; */
  /* width: 80%; */
  /* border: 1px solid red; */

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px 40px;
    gap: 10px;

    width: 237px;
    height: 61px;

    background: #332ad5;
    border-radius: 8px;
    border: 0;
    outline: none;

    font-weight: 500;
    font-size: 18px;
    color: #ffffff;
    cursor: pointer;
  }

  button.request {
    color: #364152;
    background: rgba(51, 42, 213, 0.05);
  }

  button:first-child{
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
          <button>
            <span>See all classes</span>
            <Arrow strokeColor="white" />
          </button>
          <button className="request">
            <span>Create a request</span>
            <Arrow strokeColor="#364152" />
          </button>
        </Buttons>
      </InfoContainer>
      <ImageContainer>
        <img src={IntroImg} alt="intro-img" />
      </ImageContainer>
    </Section>
  );
};

export default Intro;

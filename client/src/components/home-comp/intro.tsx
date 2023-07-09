import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IntroImg from "../../assets/home-intro-img.png";
// import Arrow from "../../assets/Arrow.svg";
import { Arrow } from "../general-components/svg";
import { Link, useNavigate } from "react-router-dom";
import { topNavigator } from "../../utils/helperFunctions";
import { UserCookie } from "../../utils/userCookie";
import { localStorageUser } from "../../utils/globalConstants";

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

interface introProps {
  role: string;
}

const Intro = () => {
  const navigate = useNavigate();

  const navigationHandler = (link: string) => {
    topNavigator();
    navigate(link);
  };

  const [role, setRole] = useState();

  const { fetchLocalUserData } = UserCookie();

  useEffect(() => {
    fetchLocalUserData().then((data) => {
      setRole(data.role);
    });

    window.addEventListener("storage", () => {
      console.log("Change to local storage!");
      fetchLocalUserData().then((data) => {
        setRole(data.role);
      });
    });
  }, []);

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
          <button
            onClick={() =>
              navigationHandler(role == "learn" ? "/classes" : "/requests")
            }
          >
            <span>
              {role == "learn" ? "See all classes" : "See all requests"}
            </span>
            <Arrow strokeColor="white" />
          </button>
          <button
            className="request"
            onClick={() => navigationHandler(`/create-${role}-request`)}
          >
            <span>Create a {role == "learn" ? "request" : "class"}</span>
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

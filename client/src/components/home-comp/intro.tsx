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
  background: #d8eefe;
  border-radius: 12px;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 60px;
  box-sizing: border-box;

  font-family: "Nunito";
  font-style: normal;

  @media only screen and (max-width: 750px) {
    padding: 42px;
  }
`;

const InfoContainer = styled.div`
  /* border: 1px solid red; */
  display: grid;
  gap: 35px;
  width: 65%;
  margin-right: 5vw;

  p {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
    color: #ffffff;
  }

  @media only screen and (max-width: 850px) {
    gap: 25px;
  }

  @media only screen and (max-width: 750px) {
    width: 100%;
    margin-right: 0vw;
  }
`;

const Headers = styled.div`
  /* margin-bottom: 1rem; */
`;

const Heading = styled.h2`
  font-weight: 700;
  font-size: 39px;
  line-height: 121.4%;
  color: #000000;

  @media only screen and (max-width: 850px) {
    font-size: 32px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 28px;
  }
`;

const ImageContainer = styled.div`
  /* border: 1px solid red; */

  img {
    width: 319.57px;
    height: 235.33px;
    object-fit: contain;
  }

  @media only screen and (max-width: 1000px) {
    img {
      width: 289.57px;
      height: 215.33px;
    }
  }
  @media only screen and (max-width: 850px) {
    img {
      width: 249.57px;
      height: 185.33px;
    }
  }
  @media only screen and (max-width: 750px) {
    display: none;
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

    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;

    background: #ef4565;
    color: #ffffff;
    border-radius: 8px;
    border: 0;
    outline: none;
    cursor: pointer;
  }

  button.request {
    color: #364152;
    color: #ffffff;
    background: rgba(51, 42, 213, 0.05);
    background: #094067;
  }

  button:first-child {
    margin-right: 3vw;
  }

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1rem;

    button:first-child {
      margin-right: 0vw;
    }
  }

  @media only screen and (max-width: 850px) {
    button {
      padding: 16px 32px;
      gap: 10px;
    }
  }

  @media only screen and (max-width: 750px) {
    flex-direction: row;
    button:first-child {
      margin-right: 3vw;
    }
  }
  @media only screen and (max-width: 620px) {
    /* border: 1px solid red; */
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    row-gap: 0.8rem;

    button:first-child {
      margin-right: 0vw;
    }
  }

  @media only screen and (max-width: 400px) {
    button {
      font-size: 16px;
      gap: 8px;
      padding: 16px 32px;
    }
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
          <Heading>
            {role == "learn"
              ? "Learn something from your peers!!"
              : "Teach something you know!!"}
          </Heading>
        </Headers>
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
            <Arrow strokeColor="#ffffff" />
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

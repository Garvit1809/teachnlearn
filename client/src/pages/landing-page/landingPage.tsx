import React, { useState } from "react";
import styled from "styled-components";

import TNLLogo from "../../assets/tnl-logo.png";
import { Arrow, WaveSVG } from "../../components/general-components/svg";

import img1 from "../../assets/landingPageImg1.png";
import img2 from "../../assets/landingPageImg2.png";
import img3 from "../../assets/landingPageImg3.png";
import img4 from "../../assets/landingPageImg4.png";
import img5 from "../../assets/landingPageImg5.png";
import img6 from "../../assets/landingPageImg6.png";
import Footer from "../../components/general-components/footer/footer";

import wave from "../../assets/wave.png";
import wave2 from "../../assets/wave2.png";
import { navigateTo } from "../../utils/navigationHook";
import YoutubeLinks from "../../components/home-comp/youtubeLinks";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px 50px;
  gap: 40px;
  background: #d8eefe;
  /* min-height: 100vh; */
  /* border: 1px solid red; */
`;
const Header = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;

const ImageContainer = styled.div`
  /* border: 1px solid red; */
  width: 200px;
  height: 80px;
  margin-left: 2vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const AuthButtons = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4rem;
  gap: 20px;

  div.signup {
    background: #3da9fc;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #fffffe;
  }
`;

const AuthButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 32px;
  gap: 10px;
  background: #ffffff;
  border-radius: 2px;
  margin-right: 10px;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #2b2c34;
  cursor: pointer;
`;

const BlogHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 20px;
  width: 80%;
  background: #094067;
  border-radius: 4px;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  cursor: pointer;
`;

const SlideContainer = styled.div`
  display: flex;
  /* flex-direction: row; */
  /* align-items: center; */
  padding: 0px;
  /* border: 1px solid red; */
  width: 80%;
`;

const InfoContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  padding: 0px;
  padding-top: 60px;
`;

const Diagram = styled.div`
  /* border: 1px solid green; */
`;

const Headings = styled.div`
  /* border: 1px solid green; */
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.2;
  color: #000000;
`;

const Description = styled.div`
  /* border: 1px solid red; */
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
  color: #000000;
  width: 85%;
`;

const GetStartedContainer = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  padding: 0px;
  gap: 20px;
  width: 80%;

  div {
    display: flex;
    align-items: flex-start;
    padding: 22px 34px;
    gap: 10px;
    background: #ef4565;
    border-radius: 2px;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.02em;
    color: #ffffff;
    cursor: pointer;
  }

  span {
    /* border: 1px solid red; */
    width: 40%;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #000000;
  }
`;

const Indicator = styled.div`
  /* border: 1px solid green; */
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 4px;
  transition: all 0.15s linear;

  div {
    width: 12px;
    height: 12px;
    background: #094067;
    border-radius: 25px;
  }

  div.rect {
    width: 32px;
    height: 10px;
  }
`;

const WaveCont = styled.div`
  /* overflow-x: hidden; */
  /* border: 1px solid yellow; */
  position: relative;
  z-index: 1;

  img {
    z-index: 1;
    width: 100%;
  }

  div {
    position: absolute;
    top: 4px;
    z-index: -1;
  }
`;

const slideData = [
  {
    heading1: "Connect with students from all across the globe",
    description:
      "Leverage our interactive platform to foster cross cultural connections and collaborative learning with students from all around the world.",
    img: img1,
  },
  {
    heading1: "Share your problems Share their solutions.",
    description:
      "Participate in open discussions to share your problems, while gaining insights and solutions from others in a collaborative environment.",
    img: img2,
  },
  {
    heading: "Organize bite sizes class Schedule as you want.",
    description:
      "Flexible scheduling allows you to organize and attend bite-sized classes according to your preferences.",
    img: img3,
  },
  {
    heading: "Teach and Learn to master any concept",
    description:
      "Unlock the power of teaching and learning to achieve mastery in any concept, fostering a dynamic exchange of knowledge and growth.",
    img: img4,
  },
  {
    heading: "Free but reliable classes, attend as you like.",
    description:
      "Experience the best of both worlds with free, reliable classes that you can attend at your own pace and convenience.",
    img: img5,
  },
  {
    heading: "Based on tried and tested Feynman Technique of learning!",
    description:
      "Experience the best of both worlds with free, reliable classes that you can attend at your own pace and convenience.",
    img: img6,
  },
];

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  // const totalSlides = 6;

  const loginNavigator = () => {};

  return (
    <>
      <Section>
        <Header>
          <ImageContainer>
            <img src={TNLLogo} alt="tnl-logo" />
          </ImageContainer>
          <AuthButtons>
            <AuthButton>Login</AuthButton>
            <AuthButton className="signup">Signup</AuthButton>
          </AuthButtons>
        </Header>
        <BlogHeader>
          <span>
            Check out our blog to learn about Feyman’s Technique and much more
          </span>
          <Arrow strokeColor="#FFFFFF" />
        </BlogHeader>
        <SlideContainer>
          <InfoContainer>
            <Headings>
              <h2>Connect with students from all across the globe</h2>
            </Headings>
            <Description>
              <p>
                Leverage our interactive platform to foster cross cultural
                connections and collaborative learning with students from all
                around the world.
              </p>
            </Description>
            <GetStartedContainer>
              <div>Get Started</div>
              <span>
                You can join and enroll in your first class in under 3 minutes!
              </span>
            </GetStartedContainer>
            <Indicator>
              {slideData.map((slide, index) => {
                console.log(index);
                return (
                  <div
                    className={currentSlide == index ? "rect" : undefined}
                  ></div>
                );
              })}
            </Indicator>
          </InfoContainer>
          <Diagram>
            <img src={img1} alt="" />
          </Diagram>
        </SlideContainer>
      </Section>
      <WaveCont>
        <img src={wave} alt="" />
        <div className="wave2">
          <img src={wave2} alt="" />
        </div>
      </WaveCont>
      <YoutubeLinks />
      <Footer />
    </>
  );
};

export default LandingPage;

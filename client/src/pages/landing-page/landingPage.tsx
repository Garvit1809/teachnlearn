import React, { useState } from "react";
import styled from "styled-components";

import TNLLogo from "../../assets/tnl-logo.png";
import { Arrow } from "../../components/general-components/svg";

import img1 from "../../assets/landingPageImg1.png";
import img2 from "../../assets/landingPageImg2.png";
import img3 from "../../assets/landingPageImg3.png";
import img4 from "../../assets/landingPageImg4.png";
import img5 from "../../assets/landingPageImg5.png";
import img6 from "../../assets/landingPageImg6.png";
import Footer from "../../components/general-components/footer/footer";

import { useNavigate } from "react-router-dom";
import YoutubeCarousel from "../../components/home-comp/youtubeCarousel";
import { topNavigator } from "../../utils/helperFunctions";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import feynaman from "../../assets/feynman.png";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px 40px;
  gap: 18px;
  background: #d8eefe;
  /* min-height: 100vh; */

  div.carousel-wrapper {
    /* border: 1px solid red; */
    width: 90vw;
    position: relative;
  }

  .carousel-container {
    width: 90vw;
    position: unset;

    .react-multiple-carousel__arrow {
      position: absolute;
      width: 2rem;
      height: 2rem;
    }

    .react-multiple-carousel__arrow--left {
      left: calc(-4% + 2px);
      /* width: 2rem; */
      /* height: 2rem; */
      border-radius: 2.6875rem;
      background: #094067;
    }

    .react-multiple-carousel__arrow--right {
      right: calc(-4% + 1px);
      /* width: 2rem; */
      /* height: 2rem; */
      border-radius: 2.6875rem;
      background: #094067;
    }
  }
`;
const Header = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  /* padding: 20px 4vw 0; */
  padding-top: 20px;
`;

const ImageContainer = styled.div`
  /* border: 1px solid red; */
  width: 160px;
  height: 60px;
  margin-left: 4vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const AuthButtons = styled.div`
  /* border: 1px solid red; */
  display: flex;
  margin-right: 4vw;
  align-items: center;
  justify-content: center;
  /* margin-right: 4rem; */
  gap: 20px;

  div.signup {
    background: #3da9fc;
    color: #fffffe;
  }
`;

const AuthButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 26px;
  gap: 10px;
  background: #ffffff;
  border-radius: 2px;
  margin-right: 10px;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
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
  width: 85%;
  background: #094067;
  border-radius: 4px;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #ffffff;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.15s ease;

  span.bold {
    color: #ef4565;
    text-transform: uppercase;
    font-weight: 700;
  }

  &:hover {
    background: #ef4565;
    /* background: #90b4ce; */
    color: #094067;
    font-weight: 500;
    span.bold {
      color: #ffffff;
    }
  }
`;

const SlideContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px;
  box-sizing: border-box;
`;

const InfoContainer = styled.div`
  /* border: 1px solid red; */
  /* width: 60%; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* align-items: center; */
  justify-content: center;
  box-sizing: border-box;
  gap: 32px;
  padding: 0px;
  padding-left: 20px;
  /* padding-top: 60px; */
`;

const Diagram = styled.div`
  /* border: 1px solid green; */
  width: 20.1875rem;
  height: 18.75rem;

  img {
    width: 20.1875rem;
    height: 18.75rem;
    object-fit: contain;
  }
`;

const Headings = styled.div`
  /* border: 1px solid green; */

  h2 {
    color: #000;
    font-size: 3.75rem;
    font-family: "Nunito";
    font-weight: 700;
    line-height: 124.9%;
  }
`;

const Indicator = styled.div`
  /* border: 1px solid green; */
  display: flex;
  align-items: center;
  padding: 0px;
  margin-right: 1rem;
  cursor: pointer;

  div {
    transition: all 0.15s linear;
    width: 12px;
    height: 12px;
    background: #094067;
    border-radius: 25px;
  }

  div.rect {
    transition: all 0.15s linear;
    width: 32px;
    height: 10px;
  }
`;

const DescContainer = styled.div`
  display: flex;
  /* width: 77.5rem; */
  width: 90%;
  margin: 4rem auto 8rem;
  padding: 3.75rem 0rem 3rem;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  border-radius: 10px;
  background: #d8eefe;

  h2 {
    color: #2b2c34;
    font-size: 3.625rem;
    font-family: "Nunito";
    font-weight: 500;

    span {
      color: #3da9fc;
      font-weight: 700;
    }
  }

  p {
    width: 100%;
    color: #2b2c34;
    text-align: center;
    font-size: 1.25rem;
    font-family: "Nunito";
    line-height: 141.9%;
    font-weight: 500;
  }

  button {
    display: flex;
    padding: 1.375rem 2.125rem;
    align-items: flex-start;
    gap: 0.625rem;
    border-radius: 2px;
    background: #3da9fc;
    color: #fffffe;
    font-size: 1.125rem;
    font-family: "Nunito";
    font-weight: 700;
    border: none;
    cursor: pointer;
    margin-top: 2rem;
  }

  div.main-container {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0 2rem;

    div.content {
      /* border: 1px solid red; */
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 2rem 0 0;
    }

    img {
      /* border: 1px solid red; */
      /* padding-bottom: 5rem; */
      /* margin-bottom: 1rem; */
      width: 400px;
      height: 100%;
      object-fit: cover;
      transform: translateY(-10%);
    }
  }
`;

const YoutubeWrapper = styled.div`
  /* border: 1px solid red; */
  width: 90%;
  margin: 2rem auto 0;
`;

const slideData = [
  {
    heading: "Connect with students from all across the globe",
    description:
      "Leverage our interactive platform to foster cross cultural connections and collaborative learning with students from all around the world.",
    img: img1,
  },
  {
    heading: "Share your problems. Share their solutions.",
    description:
      "Participate in open discussions to share your problems, while gaining insights and solutions from others in a collaborative environment.",
    img: img2,
  },
  {
    heading: "Organize bite sized classes. Schedule as you want.",
    description:
      "Flexible scheduling allows you to organize and attend bite-sized classes according to your preferences.",
    img: img3,
  },
  {
    heading: "Free but reliable classes from students just like you.",
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
  {
    heading: "Teach and Learn",
    description:
      "Unlock the power of teaching and learning to achieve mastery in any concept, fostering a dynamic exchange of knowledge and growth.",
    img: img4,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CustomDot = ({ onMove, index, onClick, active }: any) => {
  return (
    <Indicator onClick={() => onClick()}>
      <div className={active ? "rect" : undefined}></div>
    </Indicator>
  );
};

const slides = slideData.map((data, index) => {
  return (
    <SlideContainer key={index}>
      <InfoContainer>
        <Headings>
          <h2>{data.heading}</h2>
        </Headings>
      </InfoContainer>
      <Diagram>
        <img src={data.img} alt="" />
      </Diagram>
    </SlideContainer>
  );
});

const LandingPage = () => {
  const navigate = useNavigate();
  const navigationHandler = (link: string) => {
    topNavigator();
    navigate(link);
  };

  return (
    <>
      <Section>
        <Header>
          <ImageContainer>
            <img src={TNLLogo} alt="tnl-logo" />
          </ImageContainer>
          <AuthButtons>
            <AuthButton onClick={() => navigationHandler("/signin")}>
              Login
            </AuthButton>
            <AuthButton
              className="signup"
              onClick={() => navigationHandler("/signup")}
            >
              Signup
            </AuthButton>
          </AuthButtons>
        </Header>
        <BlogHeader>
          <span>
            Check out our <span className="bold">blog</span> for free guidance
            on how to improve in your studies.
          </span>
          <Arrow strokeColor="#FFFFFF" />
        </BlogHeader>
        <div className="carousel-wrapper">
          <Carousel
            containerClass="carousel-container"
            responsive={responsive}
            infinite={true}
            showDots={true}
            autoPlay={true}
            autoPlaySpeed={3500}
            customTransition="all 1s"
            transitionDuration={1000}
            customDot={<CustomDot />}
          >
            {slides}
          </Carousel>
        </div>
      </Section>
      <YoutubeWrapper>
        <YoutubeCarousel />
      </YoutubeWrapper>
      <DescContainer>
        <h2>Richard Feynman</h2>
        <div className="main-container">
          <div className="content">
            <p>
              Richard Feynman was a Nobel-prize winning US theoretical
              physicist. Famed for his brilliant mind and mercurial personality,
              his main work was in quantum physics and particle physics, where
              he is particularly known for the Feynman diagram, a way of
              depicting particle processes graphically. But he was a prolific
              writer and thinker who also pioneered ideas in quantum computing
              and nanotechnology.
              <br />
              <br />
              We, in Teach and Learn, have made a platform where students from
              all across the globe and all sections of society can come
              together, collaborate and elevate each other’s level of knowledge
              by using the Feynman Technique of learning to teach each other and
              learn from each other.
            </p>
            <button type="button" onClick={() => navigationHandler("/signup")}>
              Create an account
            </button>
          </div>
          <img src={feynaman} alt="" />
        </div>
      </DescContainer>
      <Footer />
    </>
  );
};

export default LandingPage;

import React, { useEffect, useState } from "react";
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
import LandingpageNav from "../../components/profile-comp/landingpageNav";
import { localStorageUser } from "../../utils/globalConstants";
import FeynmanDescription from "../../components/home-comp/feynmanDescription";

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
    /* box-sizing: border-box; */
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
      border-radius: 2.6875rem;
      background: #094067;
    }

    .react-multiple-carousel__arrow--right {
      right: calc(-4% + 1px);
      border-radius: 2.6875rem;
      background: #094067;
    }
  }

  @media only screen and (max-width: 750px) {
    div.carousel-wrapper {
      width: 92vw;
    }
  }
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
  box-sizing: border-box;

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

  @media only screen and (max-width: 750px) {
    font-size: 14px;
    width: 100%;
    text-align: center;
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
  /* width: 20.1875rem; */
  /* height: 18.75rem; */

  img {
    width: 20.1875rem;
    height: 18.75rem;
    object-fit: contain;
  }

  @media only screen and (max-width: 900px) {
    img {
      width: 18rem;
      /* height: 18.75rem; */
    }
  }
  @media only screen and (max-width: 750px) {
    img {
      width: 15rem;
      height: 15.75rem;
    }
  }
  @media only screen and (max-width: 550px) {
    img {
      width: 12rem;
      height: 14.75rem;
    }
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

  @media only screen and (max-width: 900px) {
    h2 {
      font-size: 3rem;
      font-weight: 700;
      line-height: 120%;
    }
  }
  @media only screen and (max-width: 750px) {
    h2 {
      font-size: 2.4rem;
      font-weight: 600;
      line-height: 110%;
    }
  }
  @media only screen and (max-width: 550px) {
    h2 {
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 110%;
    }
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

const YoutubeWrapper = styled.div`
  /* border: 1px solid red; */
  width: 90%;
  margin: 2rem auto 0;
`;

const slideData = [
  {
    heading: "Connect with students from all across the globe.",
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
    heading: "Organize bite-sized classes. Schedule as you want.",
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
    heading: "Based on the tried and tested Feynman Technique of learning!",
    description:
      "Experience the best of both worlds with free, reliable classes that you can attend at your own pace and convenience.",
    img: img6,
  },
  {
    heading: "Teach and Learn!",
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
  const [renderLandingPage, setRenderLandingPage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem(localStorageUser)) {
      navigate("/home");
    } else {
      setRenderLandingPage(true);
    }
  }, [navigate]);

  const navigationHandler = (link: string) => {
    topNavigator();
    navigate(link);
  };

  return (
    renderLandingPage && (
      <>
        <Section>
          <LandingpageNav />
          <BlogHeader onClick={() => navigationHandler("/teachNlearn-blogs")}>
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
        <FeynmanDescription />
        <Footer />
      </>
    )
  );
};

export default LandingPage;

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

const Section = styled.div`
  /* border: 1px solid red; */
  /* margin-bottom: 1rem; */

  h3 {
    color: #2b2c34;
    font-size: 2.625rem;
    font-family: "Nunito";
    font-weight: 600;
    letter-spacing: -0.105rem;
    margin-bottom: 2rem;

    @media only screen and (max-width: 880px) {
      font-size: 2rem;
      margin-bottom: 1.8rem;
    }

    @media only screen and (max-width: 600px) {
      font-size: 1.8rem;
      margin-bottom: 1.6rem;
    }
  }

  div.carousel-wrapper {
    /* border: 1px solid red; */
    width: 100%;
    position: relative;
    /* box-sizing: border-box; */
  }

  .carousel-container {
    /* width: 90vw; */
    position: unset;

    .react-multiple-carousel__arrow {
      position: absolute;
      width: 2rem;
      height: 2rem;
    }

    .react-multiple-carousel__arrow--left {
      /* left: calc(-4% + 2px); */
      border-radius: 2.6875rem;
      background: #094067;
      z-index: 100;
    }

    .react-multiple-carousel__arrow--right {
      /* right: calc(-4% + 1px); */
      border-radius: 2.6875rem;
      background: #094067;
      z-index: 100;
    }
  }
`;

const YoutubeVideoContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  max-width: 25rem;
  /* height: 18rem; */
  margin-right: 1rem;
  flex-direction: column;
  align-items: flex-start;
  /* border: 1px solid red; */

  iframe {
    width: 100%;
    height: 17rem;
    /* border: none; */
    border-radius: 20px 20px 0px 0px;
    /* border-radius: 20px; */
  }

  @media only screen and (max-width: 600px) {
    /* max-width: 30rem; */
    max-width: 50rem;
    width: 100%;
    margin-right: 0;
  }
`;

const FrameDetails = styled.div`
  display: flex;
  padding: 1.25rem;
  box-sizing: border-box;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0px 0px 20px 20px;
  background: #094067;
  color: #fff;
  font-size: 1.2rem;
  font-family: "Nunito";
  font-weight: 500;
  letter-spacing: 0.02rem;

  @media only screen and (max-width: 880px) {
    font-size: 1.5rem;
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

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const carouselData = [
  {
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/QK4rMgtSaqk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    text: "Why use Teach and Learn?",
  },
  {
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Dj49m3dC1yk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    text: "The Feynman Technique of Learning",
  },
];

const items = carouselData.map((data, index) => {
  return (
    <YoutubeVideoContainer>
      {data.iframe}
      <FrameDetails>{data.text}</FrameDetails>
    </YoutubeVideoContainer>
  );
});

export const CustomDot = ({ onMove, index, onClick, active }: any) => {
  return (
    <Indicator onClick={() => onClick()}>
      <div className={active ? "rect" : undefined}></div>
    </Indicator>
  );
};

const YoutubeCarousel = () => {
  return (
    <Section>
      <h3>Watch these videos to know how and why to use Teach and Learn</h3>
      <div className="carousel-wrapper">
        <Carousel
          responsive={responsive}
          containerClass="carousel-container"
          transitionDuration={1000}
          customDot={<CustomDot />}
        >
          {items}
        </Carousel>
      </div>
    </Section>
  );
};

export default YoutubeCarousel;

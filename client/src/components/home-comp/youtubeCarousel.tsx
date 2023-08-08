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
    border: none;
    /* border-radius: 20px 20px 0px 0px; */
    border-radius: 20px;
  }

  @media only screen and (max-width: 600px) {
    /* max-width: 30rem; */
    max-width: 50rem;
    width: 100%;
    margin-right: 0;
  }
`;

const FrameDetails = styled.div`
  border: 1px solid red;
  display: flex;
  padding: 1.25rem;
  box-sizing: border-box;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0px 0px 20px 20px;
  background: #094067;
  color: #fff;
  font-size: 1.5rem;
  font-family: "Nunito";
  font-weight: 600;
  letter-spacing: -0.07rem;

  @media only screen and (max-width: 880px) {
    font-size: 1.5rem;
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
      {/* <FrameDetails>{data.text}</FrameDetails> */}
    </YoutubeVideoContainer>
  );
});

const YoutubeCarousel = () => {
  return (
    <Section>
      <h3>Watch these videos to know how and why to use Teach and Learn</h3>
      <Carousel responsive={responsive}>{items}</Carousel>
    </Section>
  );
};

export default YoutubeCarousel;

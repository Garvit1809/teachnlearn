import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

const Section = styled.div`
  /* border: 1px solid red; */
  margin-bottom: 1rem;
  h3 {
    color: #2b2c34;
    font-size: 2.625rem;
    font-family: "Nunito";
    font-weight: 600;
    letter-spacing: -0.105rem;
    margin-bottom: 2rem;
  }
`;

const YoutubeVideoContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  max-width: 25rem;
  height: 20em;
  margin-right: 1rem;
  flex-direction: column;
  align-items: flex-start;

  iframe {
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 20px 20px 0px 0px;
  }
`;

const FrameDetails = styled.div`
  /* border: 1px solid red; */
  display: flex;
  padding: 1.25rem;
  box-sizing: border-box;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 0px 0px 20px 20px;
  background: #094067;
  color: #fff;
  font-size: 1.75rem;
  font-family: Nunito;
  font-weight: 600;
  letter-spacing: -0.07rem;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const carouselData = [
  {
    iframe: (
      <iframe
        src="https://www.youtube.com/embed/9Rg4NKwCsZw"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    text: "The Feynman Technique of Learning Anything",
  },
  {
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9Rg4NKwCsZw"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    text: "The Feynman Technique of Learning Anything",
  },
  {
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9Rg4NKwCsZw"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    text: "The Feynman Technique of Learning Anything",
  },
  {
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9Rg4NKwCsZw"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    text: "The Feynman Technique of Learning Anything",
  },
  {
    iframe: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9Rg4NKwCsZw"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    text: "The Feynman Technique of Learning Anything",
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

const YoutubeCarousel = () => {
  return (
    <Section>
      <h3>Browse through our youtube videos</h3>
      <Carousel responsive={responsive}>{items}</Carousel>;
    </Section>
  );
};

export default YoutubeCarousel;

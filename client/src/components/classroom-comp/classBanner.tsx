import React from "react";
import styled from "styled-components";

const Section = styled.div`
  /* border: 1px solid red; */
  position: relative;
  z-index: 0;
`;

const ImageContainer = styled.div`
  z-index: 0;
  img {
    width: 100%;
    height: 45vh;
    border-radius: 8px;
    object-fit: cover;
  }
`;

const Title = styled.div`
  /* border: 1px solid white; */

  position: absolute;
  bottom: 2rem;
  left: 1.5rem;
  z-index: 1;
  color: white;
  font-weight: 700;
  font-size: 26px;
  line-height: 35px;
  width: 50%;
`;

interface bannerProps {
  img: string;
  title: string;
}

const ClassBanner = ({ img, title }: bannerProps) => {
  return (
    <Section>
      <ImageContainer>
        <img
          // src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          src={img}
          alt="class-banner-img"
        />
      </ImageContainer>
      <Title>
        <h3>{title}</h3>
      </Title>
    </Section>
  );
};

export default ClassBanner;

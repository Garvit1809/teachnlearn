import React from "react";
import styled from "styled-components";
import IntroImg from "../../assets/home-intro-img.png";
import Arrow from '../../assets/Arrow.svg'

const Section = styled.div`
  /* border: 1px solid pink; */
  background: #fdf5ec;
  border-radius: 12px;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 60px;
  /* margin-top: 5rem; */
  margin: 5rem 5vw 0 5vw;
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  row-gap: 1rem;
`;

const ImageContainer = styled.div`
  width: 419.57px;
  height: 335.33px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: sp; */
    img{
        /* color: black; */
        fill: black;

    }

    svg{
        background-color: black;
    }
`

const Intro = () => {
  return (
    <Section>
      <InfoContainer>
        <div>
          <h2>Quick and Easy Learning</h2>
          <h2>Byte-Sized Classes for Everyone</h2>
        </div>
        <p>
          Discover bite-sized classes designed to make learning accessible and
          fun for everyone, regardless of prior knowledge.
        </p>
        < Buttons>
            
            <button>
                <span>See all classes</span>
                <img src={Arrow} alt="" />
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

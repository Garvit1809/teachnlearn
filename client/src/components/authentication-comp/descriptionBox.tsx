import styled from "styled-components";
import {
  CircleIcon1,
  CircleIcon2,
  DoubleQuoteIcon,
} from "../general-components/svg";

const Section = styled.div`
  background-color: #094067;
  border-radius: 24px;
  padding: 15vh 2.5rem 20vh 4rem;
  position: relative;
  overflow: hidden;
  z-index: -3;

  img {
    width: 300px;
    height: 300px;
    object-fit: contain;
  }

  @media only screen and (max-width: 870px) {
    width: 100%;
    padding: 8vh 2.5rem 5vh 4rem;
    border-radius: 8px;
    /* border-top-right-radius: 0; */
    /* border-top-left-radius: 0; */
  }
  @media only screen and (max-width: 450px) {
    /* width: 100%; */
    padding: 8vh 2rem 5vh 2.5rem;
  }
`;

const UpperCircle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-33%);
  z-index: -1;
  width: fit-content;

  svg {
    width: 150vw;
    height: 65vh;
  }

  @media only screen and (max-width: 450px) {
    svg {
      width: 100vw;
      height: 30vh;
    }
  }
`;

const LowerCircle = styled.div`
  position: absolute;
  z-index: -2;
  top: 0;
  left: 0;
  transform: translateX(-33%);
  width: fit-content;

  svg {
    width: 150vw;
    height: 85vh;
  }

  @media only screen and (max-width: 450px) {
    svg {
      width: 140vw;
      height: 40vh;
    }
  }
`;

const Description = styled.div`
  z-index: 100;
  h4 {
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    color: #ffffff;
    margin-bottom: 35vh;
  }

  svg {
    /* border: 1px solid red; */
    width: 40px;
    height: 44px;
    margin-bottom: 0.5rem;
  }

  p {
    font-family: "Nunito";
    font-style: italic;
    font-weight: 500;
    font-size: 44px;
    line-height: 56px;
    color: #ffffff;
    width: 100%;
    text-indent: 70px;
    margin-bottom: 1.5rem;
  }

  div {
    width: 100%;
    /* border: 1px solid white; */
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }

  span {
    /* border: 1px solid white; */
    color: #ffffff;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
  }
  div.quote {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  div.mobile-text {
    display: none;
    /* border: 1px solid red; */
    p {
      text-indent: 0px;
    }
  }

  @media only screen and (max-width: 1100px) {
    /* border: 1px solid red; */
    h4 {
      font-size: 32px;
    }

    svg {
      width: 32px;
      height: 32px;
    }

    span {
      font-size: 18px;
    }

    p {
      font-size: 36px;
      line-height: 48px;
    }
  }
  @media only screen and (max-width: 950px) {
    /* border: 1px solid red; */
    h4 {
      font-size: 28px;
    }

    svg {
      width: 30px;
      height: 30px;
    }

    span {
      font-size: 18px;
    }

    p {
      font-size: 32px;
      line-height: 40px;
    }
  }

  @media only screen and (max-width: 870px) {
    h4 {
      font-size: 48px;
      margin-bottom: 8vh;
    }

    svg {
      width: 30px;
      height: 30px;
    }

    span {
      font-size: 18px;
    }

    p {
      font-size: 32px;
      line-height: 56px;
    }
  }
  @media only screen and (max-width: 550px) {
    h4 {
      font-size: 38px;
      margin-bottom: 4vh;
    }

    svg {
      width: 24px;
      height: 24px;
      margin-bottom: 0rem;
    }

    span {
      font-size: 18px;
    }

    p {
      font-size: 26px;
      line-height: 36px;
      margin-bottom: 0.5rem;
      text-indent: 50px;
    }
  }
  @media only screen and (max-width: 450px) {
    h4 {
      font-size: 44px;
    }
    div.mobile-text {
      display: flex;
    }
    div.quote {
      display: none;
    }
  }
`;

interface descriptionProps {
  heading: string;
}

const DescriptionBox = (props: descriptionProps) => {
  return (
    <Section>
      <UpperCircle>
        <CircleIcon1 />
      </UpperCircle>
      <LowerCircle>
        <CircleIcon2 />
      </LowerCircle>
      <Description>
        <h4>{props.heading}</h4>
        <div className="quote">
          <DoubleQuoteIcon />
          <p>If you want to master something, teach it.</p>
          <div>
            <span>- Richard Feynman</span>
          </div>
        </div>
        <div className="mobile-text">
          <p>Login to your account</p>
        </div>
      </Description>
    </Section>
  );
};

export default DescriptionBox;

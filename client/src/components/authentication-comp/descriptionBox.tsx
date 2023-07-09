import styled from "styled-components";
import {
  CircleIcon1,
  CircleIcon2,
  DoubleQuoteIcon,
} from "../general-components/svg";

const Section = styled.div`
  background-color: #0d1c2e;
  background-color: #094067;
  border-radius: 24px;
  padding: 15vh 2.5rem 20vh 4rem;
  width: 80%;
  position: relative;
  overflow: hidden;
  z-index: -3;
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
        <DoubleQuoteIcon />
        <p>If you want to master something, teach it.</p>
        <div>
          <span>- Richard Feynman</span>
        </div>
      </Description>
    </Section>
  );
};

export default DescriptionBox;

import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { topNavigator } from "../../utils/helperFunctions";
import feynaman from "../../assets/feynman.png";

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

  @media only screen and (max-width: 1050px) {
    display: none;
  }

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

const FeynmanDescription = () => {
  const navigate = useNavigate();
  const navigationHandler = (link: string) => {
    topNavigator();
    navigate(link);
  };
  return (
    <DescContainer>
      <h2>Richard Feynman</h2>
      <div className="main-container">
        <div className="content">
          <p>
            Richard Feynman was a Nobel-prize winning US theoretical physicist.
            Famed for his brilliant mind and mercurial personality, his main
            work was in quantum physics and particle physics, where he is
            particularly known for the Feynman diagram, a way of depicting
            particle processes graphically. But he was a prolific writer and
            thinker who also pioneered ideas in quantum computing and
            nanotechnology.
            <br />
            <br />
            We, in Teach and Learn, have made a platform where students from all
            across the globe and all sections of society can come together,
            collaborate and elevate each other’s level of knowledge by using the
            Feynman Technique of learning to teach each other and learn from
            each other.
          </p>
          <button type="button" onClick={() => navigationHandler("/signup")}>
            Create an account
          </button>
        </div>
        <img src={feynaman} alt="feynman-img" />
      </div>
    </DescContainer>
  );
};

export default FeynmanDescription;

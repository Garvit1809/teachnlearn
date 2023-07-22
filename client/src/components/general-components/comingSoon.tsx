import React from "react";
import styled from "styled-components";

const CommingSoonContainer = styled.div`
  /* border: 1px solid red; */
  margin: 4rem 6.3vw 0;
  /* padding: 10rem auto; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    /* border: 1px solid red; */
    font-size: 2rem;
    font-weight: 500;
    padding: 4rem 0;
  }

  
  @media only screen and (max-width: 600px) {
    h3{
      font-size: 1.7rem;
      text-align: center;
    }
  }
`;

interface comingProps {
  text: string
}

const ComingSoon = (props: comingProps) => {
  return (
    <CommingSoonContainer>
      <h3>{props.text}</h3>
    </CommingSoonContainer>
  );
};

export default ComingSoon;

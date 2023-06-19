import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: 5%;
`;

interface ratingProps {
  rating: number;
}

const RatingContainer = (props: ratingProps) => {
  return <Section>{props.rating}</Section>;
};

export default RatingContainer;

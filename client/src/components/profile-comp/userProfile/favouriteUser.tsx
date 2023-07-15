import React from "react";
import { styled } from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  background: #ef4565;
  border-radius: 41px;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  color: #ffffff;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 1rem;
`;

const FavouriteUser = () => {
  return <Section>Add to favourites</Section>;
};

export default FavouriteUser;

import React from "react";
import styled from "styled-components";
import Navbar from "../../components/general-components/navbar";
import FooterWrapper from "../../components/general-components/footer/footerWrapper";

const Section = styled.div`
  border: 1px solid red;
  margin-top: 50px;

  padding: 0 6.3vw;
  /* display: flex; */
  /* flex-direction: column; */
  display: grid;
  /* grid-template-columns: 1.5fr 2.5fr 1.5fr; */
  grid-template-columns: 25% 70%;
  gap: 30px;
`;

const FilterContainer = styled.div`
  border: 1px solid red;
`;

const ForumContainer = styled.div`
  border: 1px solid red;
`;

const QuestionContainer = styled.div``;

const RatingContainer = styled.div``;

const Question = styled.div``;

const SingleForum = () => {
  return (
    <>
      <Navbar />
      <Section>
        <FilterContainer>
          <ul>
            <li>Most Popular</li>
            <li>Explore Topics</li>
            <li>Create a Forum</li>
          </ul>
        </FilterContainer>
        <ForumContainer>
          <QuestionContainer>
            <RatingContainer></RatingContainer>
            <Question></Question>
          </QuestionContainer>
        </ForumContainer>
      </Section>
      <FooterWrapper />
    </>
  );
};

export default SingleForum;

import React from "react";
import styled from "styled-components";
import Navbar from "../../components/general-components/navbar";
import FooterWrapper from "../../components/general-components/footer/footerWrapper";
import UserChip from "../../components/general-components/userChip";

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

const QuestionContainer = styled.div`
  display: flex;
  /* align-items: ; */
  border-bottom: 1px solid #cdd5df;
  /* margin-bottom: 2rem; */
`;

const RatingContainer = styled.div`
  border: 1px solid red;
`;

const ChipWrapper = styled.div`
  border: 1px solid red;
`;

const Question = styled.div``;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 2rem; */
`;

const AnswerDetails = styled.div`
  display: flex;
`;

const Answer = styled.div``;

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
            <RatingContainer>57</RatingContainer>
            <Question>
              <div>
                <h2>What does the fox say</h2>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Possimus voluptatibus unde quia quae exercitationem error
                  numquam nostrum nulla facilis pariatur ab voluptate, assumenda
                  inventore porro fuga ut ipsum at animi nemo consectetur
                  asperiores? Optio placeat nesciunt soluta eligendi
                  consequuntur doloribus nostrum reprehenderit, laudantium ipsa
                  non fugiat ullam alias iste asperiores?
                </p>
              </div>
            </Question>
          </QuestionContainer>
          {/* <Answer */}
          <AnswerContainer>
            <ChipWrapper>
              <UserChip name="Nischal kharel" />
            </ChipWrapper>
            <AnswerDetails>
              <RatingContainer></RatingContainer>
              <Answer>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores assumenda sed, et magnam est nemo tempora nam dolorum
                  doloremque quia aliquam rem. Voluptate similique incidunt
                  odit, culpa accusantium cum minima consectetur, quae aut,
                  optio eveniet quis totam odio veritatis provident?
                </p>
              </Answer>
            </AnswerDetails>
          </AnswerContainer>
        </ForumContainer>
      </Section>
      <FooterWrapper />
    </>
  );
};

export default SingleForum;

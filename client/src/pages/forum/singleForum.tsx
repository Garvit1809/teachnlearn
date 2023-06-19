import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/general-components/navbar";
import FooterWrapper from "../../components/general-components/footer/footerWrapper";
import UserChip from "../../components/general-components/userChip";
import { useLocation } from "react-router-dom";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import axios from "axios";
import { getHeaders } from "../../utils/helperFunctions";
import BackBtn from "../../components/request-comp/backBtn";

const Section = styled.div`
  /* border: 1px solid red; */

  border: 1px solid #d5d9eb;
  border-radius: 26px;
  box-sizing: border-box;
  padding: 48px 64px;
  width: 80%;
  margin: 2.5rem auto;
  display: flex;
  flex-direction: column;
`;

const HeaderBtns = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const PostAnswerBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 30px;
  gap: 10px;
  background: rgb(51, 42, 213);
  border-radius: 8px;
  outline: none;
  border: none;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  color: #ffffff;
  cursor: pointer;
`;

const ForumContainer = styled.div`
  /* border: 1px solid red; */
`;

const QuestionContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #cdd5df;
  padding-bottom: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const RatingContainer = styled.div`
  /* border: 1px solid red; */
  width: 5%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const ChipWrapper = styled.div`
  /* border: 1px solid red; */
`;

const Question = styled.div`
  width: 90%;
  /* border: 2px solid green; */
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  h2 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 35px;

    color: #000000;
  }

  p {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: #4a5578;
  }
`;

const AnswerContainer = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  /* gap: 2rem; */
  width: 90%;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
`;

const AnswerDetails = styled.div`
  display: flex;
`;

const Answer = styled.div``;

interface answerProps {
  _id: string;
  answer: string;
  answeredBy: {
    id: string;
    name: string;
    photo: string;
    // userName: string;
  };
  upvotes: string[];
  createdAt: string;
}

interface forumProps {
  _id: string;
  answers: Array<answerProps>;
  createdBy: {
    _id: string;
    userName: string;
    name?: string;
    photo?: string;
  };
  tagline: string;
  question: string;
  topic: string;
  upvotes: string[];
  createdAt: string;
}

const SingleForum = () => {
  const [forum, setForum] = useState<forumProps>();
  const [forumId, setForumId] = useState<string>();
  const [userToken, setuserToken] = useState<string>();

  const location = useLocation();

  useEffect(() => {
    const id = location.state.forumId;
    const token = location.state.userToken;
    console.log(token);

    setForumId(id);
    setuserToken(token);
  }, [location]);

  async function fetchForum() {
    await axios
      .get(`${BASE_URL}${apiVersion}/forum/${forumId}`, {
        headers: getHeaders(userToken ?? ""),
      })
      .then(({ data }) => {
        const forumData = data.data.data;
        console.log(data.data.data);
        setForum(forumData);
      });
  }

  useEffect(() => {
    if (forumId && userToken) {
      fetchForum();
    }
  }, [forumId, userToken]);

  return (
    <>
      <Navbar />
      <Section>
        <HeaderBtns>
          <BackBtn link="/forums" />
          <PostAnswerBtn>Post Answer</PostAnswerBtn>
        </HeaderBtns>
        {forum && (
          <ForumContainer>
            <QuestionContainer>
              <RatingContainer>{forum.upvotes.length}</RatingContainer>
              <Question>
                <div>
                  <h2>{forum.tagline}</h2>
                </div>
                <div>
                  <p>{forum.question}</p>
                </div>
              </Question>
            </QuestionContainer>
            {forum.answers.map((answer, index) => {
              return (
                <AnswerContainer>
                  <ChipWrapper>
                    <UserChip
                      name={answer.answeredBy.name}
                      photo={answer.answeredBy.photo}
                    />
                  </ChipWrapper>
                  <AnswerDetails>
                    <RatingContainer>{answer.upvotes.length}</RatingContainer>
                    <Answer>
                      <p>{answer.answer}</p>
                    </Answer>
                  </AnswerDetails>
                </AnswerContainer>
              );
            })}
          </ForumContainer>
        )}
      </Section>
      <FooterWrapper />
    </>
  );
};

export default SingleForum;

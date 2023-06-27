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
import PostAnswer from "../../components/forum-components/postAnswer";
import QuestionContainer from "../../components/forum-components/questionContainer";
import moment from "moment";
import { UserCookie } from "../../utils/userCookie";
import RatingContainer from "../../components/forum-components/ratingContainer";

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

export const PostBtn = styled.div`
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

const ChipWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  div.time {
    color: #4a5578;
    font-size: 14px;
  }
`;

const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  border: 1px solid #d5d9eb;
  border-radius: 26px;
`;

const AnswerDetails = styled.div`
  /* border: 1px solid #d5d9eb; */
  display: grid;
  grid-template-columns: 0.8fr 20fr;
`;

const Answer = styled.div`
  /* border: 1px solid #d5d9eb; */
  padding-left: 6px;
`;

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

  const { fetchLocalUserData } = UserCookie();

  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    fetchLocalUserData().then((data) => {
      setUserId(data._id);
    });
  }, []);

  async function fetchForum() {
    await axios
      .get(`${BASE_URL}${apiVersion}/forum/${forumId}`, {
        headers: getHeaders(userToken ?? ""),
      })
      .then(({ data }) => {
        const forumData = data.data.data[0];
        console.log(data.data.data[0]);
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
      {forum && (
        <Section>
          <HeaderBtns>
            <BackBtn link="/forums" />
            <PostAnswer forumId={forum?._id} />
          </HeaderBtns>
          {forum && (
            <ForumContainer>
              <QuestionContainer
                question={forum.question}
                upvotes={forum.upvotes}
                tagline={forum.tagline}
                userId={userId}
              />
              <AnswerWrapper>
                {forum.answers.map((answer, index) => {
                  return (
                    <AnswerContainer>
                      <ChipWrapper>
                        <UserChip
                          name={answer.answeredBy.name}
                          photo={answer.answeredBy.photo}
                          imgBorder="black"
                        />
                        <div className="time">
                          {moment(answer.createdAt).fromNow()}
                        </div>
                      </ChipWrapper>
                      <AnswerDetails>
                        <RatingContainer
                          upvotes={answer.upvotes}
                          userId={userId}
                          isAnswer={true}
                        />
                        <Answer>
                          <p>{answer.answer}</p>
                        </Answer>
                      </AnswerDetails>
                    </AnswerContainer>
                  );
                })}
              </AnswerWrapper>
            </ForumContainer>
          )}
        </Section>
      )}
      <FooterWrapper />
    </>
  );
};

export default SingleForum;

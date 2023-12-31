import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/general-components/navbar";
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
import Footer from "../../components/general-components/footer/footer";
import Loader from "../../components/general-components/loader";

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

  div.went-wrong {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    padding: 1rem 0;
    line-height: 25px;
  }
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
  background: #ef4565;
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

  @media only screen and (max-width: 450px) {
    font-size: 16px;
    padding: 10px 18px;
  }
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
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  margin-top: 2.5rem;
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
    _id: string;
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
    name: string;
    photo: string;
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
  const [userToken, setuserToken] = useState<string>("");

  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      })
      .catch((data) => {
        console.log(data);
        setIsLoading(false);
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
        {isLoading ? (
          <Loader />
        ) : forum ? (
          <>
            <HeaderBtns>
              <BackBtn link="/forums" />
              <PostAnswer forumId={forum?._id} />
            </HeaderBtns>
            <ForumContainer>
              <QuestionContainer
                createdBy={forum.createdBy}
                question={forum.question}
                upvotes={forum.upvotes}
                tagline={forum.tagline}
                forumId={forum._id}
                userId={userId}
                userToken={userToken}
                noAnswers={forum.answers.length == 0}
              />
              {forum.answers.length != 0 ? (
                <AnswerWrapper>
                  {forum.answers.map((answer, index) => {
                    return (
                      <AnswerContainer>
                        <ChipWrapper>
                          <UserChip
                            name={answer.answeredBy.name}
                            photo={answer.answeredBy.photo}
                            imgBorder="black"
                            userId={answer.answeredBy._id}
                          />
                          <div className="time">
                            {moment(answer.createdAt).fromNow()}
                          </div>
                        </ChipWrapper>
                        <AnswerDetails>
                          <RatingContainer
                            userToken={userToken}
                            userId={userId}
                            isAnswer={true}
                            upvotes={answer.upvotes}
                            forumId={forum._id}
                            answerId={answer._id}
                          />
                          <Answer>
                            <p>{answer.answer}</p>
                          </Answer>
                        </AnswerDetails>
                      </AnswerContainer>
                    );
                  })}
                </AnswerWrapper>
              ) : null}
            </ForumContainer>
          </>
        ) : (
          <div className="went-wrong">Something went wrong</div>
        )}
      </Section>
      <Footer />
    </>
  );
};

export default SingleForum;

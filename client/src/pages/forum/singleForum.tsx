import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/general-components/navbar";
import FooterWrapper from "../../components/general-components/footer/footerWrapper";
import UserChip from "../../components/general-components/userChip";
import { useLocation } from "react-router-dom";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import axios from "axios";
import { getHeaders } from "../../utils/helperFunctions";

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
  answers: answerProps;
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

  //  user who posted ques cannot answer the ques --> check to be added

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
        <FilterContainer>
          <ul>
            <li>Most Popular</li>
            <li>Explore Topics</li>
            <li>Create a Forum</li>
          </ul>
        </FilterContainer>
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
            <AnswerContainer>
              <ChipWrapper>
                <UserChip name="Nischal kharel" />
              </ChipWrapper>
              <AnswerDetails>
                <RatingContainer></RatingContainer>
                <Answer>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores assumenda sed, et magnam est nemo tempora nam
                    dolorum doloremque quia aliquam rem. Voluptate similique
                    incidunt odit, culpa accusantium cum minima consectetur,
                    quae aut, optio eveniet quis totam odio veritatis provident?
                  </p>
                </Answer>
              </AnswerDetails>
            </AnswerContainer>
          </ForumContainer>
        )}
      </Section>
      <FooterWrapper />
    </>
  );
};

export default SingleForum;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../general-components/navbar";
import FooterWrapper from "../general-components/footer/footerWrapper";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import LearnCard from "./learnCard";
import { learnCardProps } from "../../pages/requests/requests";
import TimeCapsule from "../classroom-comp/timeCapsule";
import UserChip from "../general-components/userChip";
import DetailsContainer from "../classroom-comp/detailsContainer";
import { Arrow, InterestedIcon } from "../general-components/svg";
import { teachCardProps } from "../../pages/classroom/classrooms";

const Section = styled.div`
  /* border: 1px solid brown; */
  padding: 0 6.3vw;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-top: 2.5rem;
  gap: 2rem;
`;

const TopicCont = styled.div`
  /* border: 1px solid red; */
  margin: 0 auto;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    /* border: 1px solid red; */
    width: 100%;
    text-align: center;
  }
`;

const OverviewContainer = styled.div`
  /* border: 1px solid red; */
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 1.3fr 3fr;
  column-gap: 4rem;
`;

const LeftContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
`;

const CreateTeachCardBtn = styled.div`
  /* border: 1px solid red; */
  display: flex;
  /* padding-left: 1.5rem; */

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 40px;
    gap: 10px;
    width: fit-content;
    background: #332ad5;
    border-radius: 8px;
    border: none;
    outline: none;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
  }
`;

const LearnCardDetailContainer = styled.div`
  width: fit-content;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  border-radius: 12px;
  height: fit-content;
  border: 1px solid #d5d9eb;
`;

const CardOverview = styled.div``;

const ChipContainer = styled.div`
  /* border: 1px solid red; */
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 40px;
    height: 40px;
    margin-right: 0.6rem;
  }

  span {
    font-weight: 600;
    font-size: 22px;
    line-height: 35px;
    color: #000000;
  }
`;

const InterestedCont = styled.div`
  display: flex;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-right: 4rem;
`;

const TagCont = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px 12px;
  flex-wrap: wrap;

  div {
    border: 1px solid grey;
    padding: 4px;
    border-radius: 6px;
  }
`;

const TeachCardsOnLearnCard = styled.div`
  h2 {
    border-bottom: 1px solid black;
    width: fit-content;
  }
`;

const LearnCardOverview = () => {
  const [learnCardId, setLearnCardId] = useState();
  const [learnCard, setlearnCard] = useState<learnCardProps>();
  const [teachCards, setTeachCards] = useState<Array<teachCardProps>>();

  const location = useLocation();
  useEffect(() => {
    const learnCardId = location.state.learnCardId;
    setLearnCardId(learnCardId);
    console.log(learnCardId);
  }, []);

  async function fetchLearnCard() {
    await axios
      .get(`${BASE_URL}${apiVersion}/learn/${learnCardId}`)
      .then(({ data }) => {
        console.log(data.data.data);
        const cardData = data.data.data;
        setlearnCard(cardData);
      });
  }

  async function fetchTeachCardsOnLearnCard() {
    await axios
      .get(`${BASE_URL}${apiVersion}/learn/${learnCardId}/teach`)
      .then(({ data }) => {
        console.log(data.data.data);
        setTeachCards(data.data.data);
      });
  }

  useEffect(() => {
    if (learnCardId) {
      console.log(learnCardId);
      fetchLearnCard();
      fetchTeachCardsOnLearnCard();
    }
  }, [learnCardId]);

  const navigate = useNavigate();

  const teachCardNavigator = () => {
    if (learnCard) {
      navigate("/create-teach-request", {
        state: {
          learnCardId: learnCard._id,
          subject: learnCard.subject,
          topic: learnCard.topic,
          programme: learnCard.programme,
          standard: learnCard.standard,
          description: learnCard.description,
          expectations: learnCard.expectations,
          tags: learnCard.tags,
        },
      });
    }
  };

  return (
    <>
      <Navbar />
      {learnCard ? (
        <Section>
          <TopicCont>
            <h2>{learnCard.topic}</h2>
          </TopicCont>
          <OverviewContainer>
            <LeftContainer>
              <LearnCardDetailContainer>
                <TimeCapsule />
                <TagCont>
                  {learnCard.tags.map((tag, index) => {
                    return (
                      <div key={index}>
                        <span>{tag}</span>
                      </div>
                    );
                  })}
                </TagCont>
              </LearnCardDetailContainer>
              <CreateTeachCardBtn>
                <button type="button" onClick={teachCardNavigator}>
                  <span>Create teach Card</span>
                  <Arrow strokeColor="#FFFFFF" />
                </button>
              </CreateTeachCardBtn>
            </LeftContainer>
            <CardOverview>
              <ChipContainer>
                <UserChip
                  name={learnCard?.createdBy.name}
                  photo={learnCard.createdBy.photo}
                  imgBorder="white"
                  textColor="black"
                />
                <InterestedCont>
                  <InterestedIcon />
                  <h3>{learnCard.interestedStudents.length} Interested</h3>
                </InterestedCont>
              </ChipContainer>
              <DetailsContainer />
            </CardOverview>
          </OverviewContainer>
          {teachCards?.length != 0 ? (
            <TeachCardsOnLearnCard>
              <h2>Teach Cards on this Learn Card</h2>
              {
                
              }
            </TeachCardsOnLearnCard>
          ) : null}
        </Section>
      ) : (
        <h3>Loading...</h3>
      )}
      <FooterWrapper />
    </>
  );
};

export default LearnCardOverview;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../general-components/navbar";
import FooterWrapper from "../general-components/footer/footerWrapper";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import LearnCard from "./learnCard";
import { learnCardProps } from "../../pages/requests/requests";
import TimeCapsule from "../classroom-comp/timeCapsule";
import UserChip from "../general-components/userChip";
import DetailsContainer from "../classroom-comp/detailsContainer";
import { InterestedIcon } from "../general-components/svg";

const Section = styled.div`
  /* border: 1px solid brown; */
  padding: 0 6.3vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
`;

const TopicCont = styled.div`
  /* border: 1px solid red; */
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

const LearnCardOverview = () => {
  const [learnCardId, setLearnCardId] = useState();
  const [learnCard, setlearnCard] = useState<learnCardProps>();

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

  useEffect(() => {
    if (learnCardId) {
      console.log(learnCardId);
      fetchLearnCard();
    }
  }, [learnCardId]);

  return (
    learnCard && (
      <>
        <Navbar />
        <Section>
          <TopicCont>
            <h2>{learnCard.topic}</h2>
          </TopicCont>
          <OverviewContainer>
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
        </Section>
        <FooterWrapper />
      </>
    )
  );
};

export default LearnCardOverview;

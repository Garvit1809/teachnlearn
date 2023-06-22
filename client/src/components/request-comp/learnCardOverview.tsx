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
import ClassroomCard, {
  classroomCardProps,
} from "../classroom-comp/classroomCard";
import { cardSizes } from "../classroom-comp/classroomGrid";
import BackBtn from "./backBtn";
import { UserCookie } from "../../utils/userCookie";
import { getHeaders } from "../../utils/helperFunctions";

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

const CardOverview = styled.div`
  /* border: 1px solid red; */
`;

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

interface interestedBtnProps {
  isInterested: boolean;
}

const BottonContainer = styled.div<interestedBtnProps>`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 4rem;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 40px;
    gap: 10px;
    cursor: pointer;

    /* background: rgba(51, 42, 213, 0.6); */
    background-color: ${(p) =>
      p.isInterested ? "rgba(51, 42, 213, 0.6)" : "rgba(51, 42, 213, 1)"};
    /* background-color: white; */
    border-radius: 8px;
    outline: none;
    border: none;

    /* border: 1px solid #332ad5; */
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    /* identical to box height */

    color: #ffffff;
  }
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
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  h2 {
    border-bottom: 1px solid black;
    width: fit-content;
  }
`;

const TeachCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 4rem;
  /* border: 1px solid red; */
`;

const LearnCardOverview = () => {
  const [learnCardId, setLearnCardId] = useState();
  const [learnCard, setlearnCard] = useState<learnCardProps>();
  const [teachCards, setTeachCards] = useState<Array<classroomCardProps>>();
  const [backLink, setBackLink] = useState<string>("/requests");

  const [totalInterestedStudents, setTotalInterestedStudents] =
    useState<number>();

  const location = useLocation();
  useEffect(() => {
    const learnCardId = location.state.learnCardId;
    console.log(learnCardId);
    const link = location.state.backLink;
    setLearnCardId(learnCardId);
    if (link) {
      setBackLink(link);
    }
  }, []);

  async function fetchLearnCard() {
    await axios
      .get(`${BASE_URL}${apiVersion}/learn/${learnCardId}`)
      .then(({ data }) => {
        // console.log(data.data.data);
        const cardData = data.data.data;
        console.log(cardData);
        setlearnCard(cardData);
        setTotalInterestedStudents(cardData.interestedStudents.length);
      });
  }

  async function fetchTeachCardsOnLearnCard() {
    await axios
      .get(`${BASE_URL}${apiVersion}/learn/${learnCardId}/teach`)
      .then(({ data }) => {
        // console.log(data.data.data);
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

  const { fetchLocalUserData } = UserCookie();
  const [userId, setUserId] = useState<string>();
  const [userToken, setUserToken] = useState<string>("");

  useEffect(() => {
    if (learnCard) {
      fetchLocalUserData().then((data) => {
        setUserId(data._id);
        console.log(data._id);
        console.log(learnCard.createdBy._id);
        console.log(data._id === learnCard.createdBy._id);
        setUserToken(data.token);
      });
    }
  }, [learnCard]);

  const interestedHandler = async () => {
    await axios
      .patch(
        `${BASE_URL}${apiVersion}/learn/${learnCard?._id}/interested`,
        {},
        {
          headers: getHeaders(userToken),
        }
      )
      .then(({ data }) => {
        console.log(data.updatedLearnCard.interestedStudents);
        const newInterestedStudents: string[] =
          data.updatedLearnCard.interestedStudents;
        if (learnCard) {
          const newLearnCard = learnCard;
          newLearnCard.interestedStudents = newInterestedStudents;
          setlearnCard(newLearnCard);
          setTotalInterestedStudents(newInterestedStudents.length);
        }
      });
  };

  return (
    <>
      <Navbar />
      {learnCard && userId ? (
        <Section>
          <BackBtn link={backLink} />
          <TopicCont>
            <h2>{learnCard.topic}</h2>
          </TopicCont>
          <OverviewContainer>
            <LeftContainer>
              <LearnCardDetailContainer>
                <TimeCapsule date={learnCard.dueDate} />
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
                  {/* <h3>{learnCard.interestedStudents.length} Interested</h3> */}
                  <h3>{totalInterestedStudents} Interested</h3>
                </InterestedCont>
              </ChipContainer>
              <DetailsContainer
                desciption={learnCard.description}
                expectations={learnCard.expectations}
              />
              {userId &&
                (userId === learnCard.createdBy._id ? null : (
                  <BottonContainer
                    isInterested={learnCard.interestedStudents.includes(userId)}
                  >
                    <button onClick={interestedHandler}>Interested</button>
                  </BottonContainer>
                ))}
            </CardOverview>
          </OverviewContainer>
          {teachCards?.length != 0 ? (
            <TeachCardsOnLearnCard>
              <h2>Teach Cards on this Learn Card</h2>
              <TeachCardGrid>
                {teachCards?.map((teachCard, index) => {
                  return (
                    <ClassroomCard
                      teachCard={teachCard}
                      cssArr={cardSizes}
                      key={index}
                    />
                  );
                })}
              </TeachCardGrid>
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

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../general-components/navbar";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { learnCardProps } from "../../pages/requests/requests";
import TimeCapsule from "../classroom-comp/timeCapsule";
import UserChip from "../general-components/userChip";
import DetailsContainer from "../classroom-comp/detailsContainer";
import { Arrow, Copy, InterestedIcon } from "../general-components/svg";
import ClassroomCard from "../classroom-comp/classroomCard";
import { cardSizes } from "../classroom-comp/classroomGrid";
import BackBtn from "./backBtn";
import { UserCookie } from "../../utils/userCookie";
import { getHeaders, topNavigator } from "../../utils/helperFunctions";
import { teachinCardProps } from "../../types/teachingCardType";
import Footer from "../general-components/footer/footer";
import Loader from "../general-components/loader";
import { ClassIDCont } from "../classroom-comp/overview";
import { toast } from "react-toastify";

const Section = styled.div`
  /* border: 1px solid brown; */
  padding: 0 6.3vw;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  gap: 2rem;

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

const TeachCardWrapper = styled.div`
  /* border: 1px solid red; */
  span.text {
    color: #ef4565;
  }
`;

interface createTeachCardStyleProps {
  isDisabled: boolean;
}

const CreateTeachCardBtn = styled.div<createTeachCardStyleProps>`
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
    background: ${(p) => (p.isDisabled ? "rgba(51, 42, 213, 0.6)" : "#332ad5")};
    border-radius: 8px;
    border: none;
    outline: none;
    cursor: pointer;
    margin-bottom: 0.5rem;

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
  row-gap: 1.5rem;
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

  div.lang {
    color: #ef4565;
    padding: 6px 12px;
    font-weight: 700;
  }

  div {
    border: 1px solid grey;
    padding: 6px 12px;
    border-radius: 6px;
  }
`;

const TeachCardsOnLearnCard = styled.div`
  /* border: 1px solid red; */
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

const IDWrapper = styled.div`
  /* border: 1px solid red; */
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  /* align-items: flex-end; */
`;

const LearnCardOverview = () => {
  const [learnCardId, setLearnCardId] = useState();
  const [learnCard, setlearnCard] = useState<learnCardProps>();
  const [teachCards, setTeachCards] = useState<Array<teachinCardProps>>();
  const [backLink, setBackLink] = useState<string>("/requests");

  const [isLoading, setIsLoading] = useState(true);
  const [teachCardLoader, setTeachCardLoader] = useState(true);

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
        const cardData = data.data.data[0];
        console.log(cardData);
        setlearnCard(cardData);
        setIsLoading(false);
        setTotalInterestedStudents(cardData.interestedStudents.length);
      });
  }

  async function fetchTeachCardsOnLearnCard() {
    await axios
      .get(`${BASE_URL}${apiVersion}/learn/${learnCardId}/teach`)
      .then(({ data }) => {
        // console.log(data.data.data);
        setTeachCards(data.data.data);
        setTeachCardLoader(false);
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
    topNavigator();
    if (learnCard) {
      navigate("/create-teach-request", {
        state: {
          learnCardId: learnCard._id,
          subject: learnCard.subject,
          topic: learnCard.topic,
          programme: learnCard.programme,
          standard: learnCard.standard,
          description: learnCard.description,
          tags: learnCard.tags,
        },
      });
    }
  };

  const { fetchLocalUserData } = UserCookie();
  const [userId, setUserId] = useState<string>();
  const [userToken, setUserToken] = useState<string>("");
  const [userRole, setUserRole] = useState<string>("");

  useEffect(() => {
    fetchLocalUserData().then((data) => {
      setUserId(data._id);
      setUserToken(data.token);
      setUserRole(data.role);
      console.log(data.role);
    });

    window.addEventListener("storage", () => {
      console.log("Change to local storage!");
      fetchLocalUserData().then((data) => {
        setUserId(data._id);
        setUserToken(data.token);
        setUserRole(data.role);
        console.log(data.role);
      });
    });
  }, []);

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

  const learnCardCreaterCheck = () => {
    return userId == learnCard?.createdBy._id;
  };

  const toastOptions = {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
  };

  const classIdHandler = () => {
    if (learnCard) {
      navigator.clipboard.writeText(learnCard._id);
      toast.success("ID copied to clipboard", toastOptions);
    }
  };

  return (
    <>
      <Navbar />
      <Section>
        <BackBtn link={backLink} />
        {isLoading ? (
          <Loader />
        ) : learnCard && userId ? (
          <>
            <TopicCont>
              <h2>{learnCard.topic}</h2>
            </TopicCont>
            <OverviewContainer>
              <LeftContainer>
                <LearnCardDetailContainer>
                  <TimeCapsule date={learnCard.dueDate} />
                  <TagCont>
                    <div className="lang">
                      <span>{learnCard.preferredLanguage}</span>
                    </div>
                    {learnCard?.tags.map((tag, index) => {
                      return (
                        <div key={index}>
                          <span>{tag}</span>
                        </div>
                      );
                    })}
                  </TagCont>
                </LearnCardDetailContainer>
                <TeachCardWrapper>
                  {learnCardCreaterCheck() ? null : (
                    <CreateTeachCardBtn isDisabled={userRole == "learn"}>
                      <button
                        type="button"
                        onClick={teachCardNavigator}
                        disabled={userRole == "learn"}
                      >
                        <span>Create teach Card</span>
                        <Arrow strokeColor="#FFFFFF" />
                      </button>
                    </CreateTeachCardBtn>
                  )}
                  {learnCardCreaterCheck()
                    ? null
                    : userRole == "learn" && (
                        <span className="text">
                          Cannot create Teach Card in Learn Mode
                        </span>
                      )}
                </TeachCardWrapper>
              </LeftContainer>
              <CardOverview>
                <ChipContainer>
                  <UserChip
                    name={learnCard.createdBy.name}
                    photo={learnCard.createdBy.photo}
                    imgBorder="white"
                    textColor="black"
                    userId={learnCard.createdBy._id}
                  />
                  <InterestedCont>
                    <InterestedIcon />
                    {/* <h3>{learnCard.interestedStudents.length} Interested</h3> */}
                    <h3>{totalInterestedStudents} Interested</h3>
                  </InterestedCont>
                </ChipContainer>
                <DetailsContainer desciption={learnCard.description} />
                {userId &&
                  (userId === learnCard.createdBy._id ? null : (
                    <BottonContainer
                      isInterested={learnCard.interestedStudents.includes(
                        userId
                      )}
                    >
                      <button onClick={interestedHandler}>Interested</button>
                    </BottonContainer>
                  ))}
                <IDWrapper>
                  <ClassIDCont onClick={classIdHandler}>
                    <Copy />
                    <span className="id">{learnCard._id}</span>
                  </ClassIDCont>
                </IDWrapper>
              </CardOverview>
            </OverviewContainer>
            {teachCards?.length != 0 ? (
              <TeachCardsOnLearnCard>
                <h2>Teach Cards on this Learn Card</h2>
                {teachCardLoader ? (
                  <Loader />
                ) : (
                  <TeachCardGrid>
                    {teachCards?.map((teachCard, index) => {
                      return (
                        <ClassroomCard
                          teachCard={teachCard}
                          cssArr={cardSizes}
                          key={index}
                          fromLearnCard={true}
                          learnCardId={learnCard._id}
                        />
                      );
                    })}
                  </TeachCardGrid>
                )}
              </TeachCardsOnLearnCard>
            ) : null}
          </>
        ) : (
          <div className="went-wrong">Something went wrong</div>
        )}
      </Section>
      <Footer />
    </>
  );
};

export default LearnCardOverview;

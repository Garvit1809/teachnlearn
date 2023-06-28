import React, { useEffect, useState } from "react";
import Navbar from "../../components/general-components/navbar";
import FooterWrapper from "../../components/general-components/footer/footerWrapper";
import { useLocation } from "react-router-dom";
import { teachCardProps } from "./classrooms";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { getHeaders } from "../../utils/helperFunctions";
import { UserCookie } from "../../utils/userCookie";
import styled from "styled-components";
import ClassBanner from "../../components/classroom-comp/classBanner";
import TimeCapsule from "../../components/classroom-comp/timeCapsule";
import UserChip from "../../components/general-components/userChip";
import DetailsContainer from "../../components/classroom-comp/detailsContainer";
import EnrollBtn from "../../components/classroom-comp/enrollBtn";
import { PurchaseCoinIcon } from "../../components/general-components/svg";
import BackBtn from "../../components/request-comp/backBtn";
import Footer from "../../components/general-components/footer/footer";

const Section = styled.div`
  /* border: 1px solid red; */
  margin: 1rem 0 0;
  padding: 2rem 15vw 0;
  display: flex;
  flex-direction: column;
  font-family: "Nunito";
  font-style: normal;
  gap: 2.5rem;

  &:first-child {
    border: 1px solid red;
  }
`;

const OverviewContainer = styled.div`
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1.3fr 3fr;
`;

const CallDetailContainer = styled.div`
  /* border: 1px solid red; */
`;

const ClassOverview = styled.div``;

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

const PriceCont = styled.div`
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  gap: 5px;

  svg {
    width: 20px;
    height: 26px;
  }
`;

const ClassroomOverview = () => {
  const [teachCard, setTeachCard] = useState<teachCardProps>();
  const [teachCardId, setTeachCardId] = useState<string>();
  const [userToken, setUserToken] = useState<string>();
  const [userCredit, setUserCredit] = useState<number>();

  const [backLink, setBackLink] = useState<string>("/classes");

  const location = useLocation();

  const { fetchLocalUserToken, fetchUserCredit } = UserCookie();

  useEffect(() => {
    const cardId = location.state.classroomId;
    console.log(cardId);
    setTeachCardId(cardId);

    const link = location.state.backPageLink;
    if (link) {
      setBackLink(link);
    }
  }, [location]);

  useEffect(() => {
    fetchLocalUserToken().then((token) => {
      setUserToken(token);
    });
    fetchUserCredit().then((coins) => {
      console.log(coins);
      setUserCredit(coins);
    });
  }, []);

  async function fetchClassOverview() {
    await axios
      .get(`${BASE_URL}${apiVersion}/teach/${teachCardId}/overview`, {
        headers: getHeaders(userToken ?? ""),
      })
      .then(({ data }) => {
        setTeachCard(data.teachCard);
      });
  }

  useEffect(() => {
    if (teachCardId) {
      console.log(location.state);
      fetchClassOverview();
    }
  }, [teachCardId]);

  return (
    <>
      <Navbar />
      {teachCard && (
        <Section>
          <BackBtn link={backLink} />
          <ClassBanner img={teachCard?.cardBanner} title={teachCard.topic} />
          <OverviewContainer>
            <CallDetailContainer>
              <TimeCapsule
                date={teachCard.date}
                classEndsAt={teachCard.classEndsAt}
                classStartsAt={teachCard.classStartsAt}
              />
              {userCredit && userToken && (
                <EnrollBtn
                  title={teachCard.topic}
                  price={teachCard.price}
                  date={teachCard.date}
                  classStartsAt={teachCard.classStartsAt}
                  classEndsAt={teachCard.classEndsAt}
                  userCredit={userCredit}
                  teachCardId={teachCard._id}
                  userToken={userToken}
                />
              )}
            </CallDetailContainer>
            <ClassOverview>
              <ChipContainer>
                <UserChip
                  name={teachCard.createdBy.name}
                  photo={teachCard.createdBy.photo}
                  imgBorder="white"
                  textColor="black"
                />
                <PriceCont>
                  <PurchaseCoinIcon color="black" />
                  <h3>{teachCard.price}</h3>
                </PriceCont>
              </ChipContainer>
              <DetailsContainer
                desciption={teachCard.description}
                expectations={teachCard.expectations}
              />
            </ClassOverview>
          </OverviewContainer>
        </Section>
      )}
      <Footer />
    </>
  );
};

export default ClassroomOverview;

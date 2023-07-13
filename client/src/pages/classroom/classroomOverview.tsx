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
import {
  Copy,
  PurchaseCoinIcon,
} from "../../components/general-components/svg";
import BackBtn from "../../components/request-comp/backBtn";
import Footer from "../../components/general-components/footer/footer";
import { ClassIDCont } from "../../components/classroom-comp/overview";
import { toast } from "react-toastify";

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
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
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
  span.id {
    font-size: 16px;
  }
`;

// const PriceCont = styled.div`
//   margin-right: 1.5rem;
//   display: flex;
//   align-items: center;
//   gap: 5px;

//   svg {
//     width: 20px;
//     height: 26px;
//   }
// `;

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

const ClassroomOverview = () => {
  const [teachCard, setTeachCard] = useState<teachCardProps>();
  const [teachCardId, setTeachCardId] = useState<string>();
  const [userToken, setUserToken] = useState<string>();
  const [userId, setUserId] = useState<string>("");
  const [userCredit, setUserCredit] = useState<number>();
  const [backLink, setBackLink] = useState<string>("/classes");
  const [learnCardId, setlearnCardId] = useState<string>("");

  const location = useLocation();

  const { fetchLocalUserData, fetchUserCredit } = UserCookie();

  useEffect(() => {
    console.log(location.state);

    const cardId = location.state.classroomId;
    console.log(cardId);
    setTeachCardId(cardId);

    const link = location.state.backPageLink;
    if (link) {
      setBackLink(link);
    }

    const learnCardId = location.state.learnCardId;
    if (learnCardId) {
      setlearnCardId(learnCardId);
    }
  }, [location]);

  useEffect(() => {
    fetchLocalUserData().then((data) => {
      setUserToken(data.token);
      setUserId(data._id);
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

  const checkEnrollTimeLimit = () => {
    const currentDate = new Date();
    const limit = teachCard?.classStartsAt;
    if (limit) {
      const ISOstring = new Date(limit);
      return ISOstring > currentDate;
    }
    // return false
  };

  const toastOptions = {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
  };

  const classIdHandler = () => {
    if (teachCard) {
      navigator.clipboard.writeText(teachCard._id);
      toast.success("ID copied to clipboard", toastOptions);
    }
  };

  return (
    <>
      <Navbar />
      {teachCard && (
        <Section>
          <BackBtn link={backLink} learnCardId={learnCardId} />
          <ClassBanner img={teachCard?.cardBanner} title={teachCard.topic} />
          <OverviewContainer>
            <CallDetailContainer>
              <TimeCapsule
                date={teachCard.date}
                classEndsAt={teachCard.classEndsAt}
                classStartsAt={teachCard.classStartsAt}
              />
              {userCredit && userToken && checkEnrollTimeLimit() && (
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
              <TagCont>
                <div className="lang">
                  <span>{teachCard.preferredLanguage}</span>
                </div>
                {teachCard?.tags.map((tag, index) => {
                  return (
                    <div key={index}>
                      <span>{tag}</span>
                    </div>
                  );
                })}
              </TagCont>
            </CallDetailContainer>
            <ClassOverview>
              <ChipContainer>
                <UserChip
                  name={teachCard.createdBy.name}
                  photo={teachCard.createdBy.photo}
                  imgBorder="white"
                  textColor="black"
                  userId={userId}
                />
                <ClassIDCont onClick={classIdHandler}>
                  <Copy />
                  <span className="id">{teachCard._id}</span>
                </ClassIDCont>
              </ChipContainer>
              <DetailsContainer desciption={teachCard.description} />
            </ClassOverview>
          </OverviewContainer>
        </Section>
      )}
      <Footer />
    </>
  );
};

export default ClassroomOverview;

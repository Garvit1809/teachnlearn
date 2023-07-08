import React, { ReactElement, useEffect, useState } from "react";
import Navbar from "../../components/general-components/navbar";
import styled from "styled-components";
import Overview from "../../components/classroom-comp/overview";
import Participants from "../../components/classroom-comp/participants";
import Classroom from "../../components/classroom-comp/classroom";
import HorizontalNavigator from "../../components/general-components/horizontalNavigator";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { getHeaders } from "../../utils/helperFunctions";
import { UserCookie } from "../../utils/userCookie";
import BackBtn from "../../components/request-comp/backBtn";
import { classroomProps } from "../../types/classroomType";
import Footer from "../../components/general-components/footer/footer";
import Loader from "../../components/general-components/loader";

const Section = styled.div`
  /* margin: 2rem 0 3rem; */
  padding: 0rem 15vw;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  /* gap: 2.5rem; */

  font-family: "Nunito";
  font-style: normal;
`;

const ElementWrapper = styled.div`
  margin: 3rem 0 0;
`;

const SingleClassroom = () => {
  const [classroomId, setClassroomId] = useState<string>();
  const [userToken, setUserToken] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [classroom, setClassroom] = useState<classroomProps>();
  const [activeLink, setActiveLink] = useState("overview");
  const [classElemType, setClassElemType] = useState<string>("all classes");
  const [backLink, setBackLink] = useState<string>("/classes");
  const [learnCardId, setlearnCardId] = useState<string>("");

  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  // location props :- classroomId || backPageLink || navLink || elemType

  const { fetchLocalUserData } = UserCookie();

  useEffect(() => {
    console.log("CHECKING");
    console.log(location.state);

    const id = location.state.classroomId;
    setClassroomId(id);

    const link = location.state?.backPageLink;
    if (link) {
      setBackLink(link);
    }

    const navLink = location.state?.navLink;
    if (navLink) {
      setActiveLink(navLink);
    }
    const elemLink = location.state?.elemType;
    if (elemLink) {
      setClassElemType(elemLink);
    }

    const learnCardId = location.state.learnCardId;
    if (learnCardId) {
      setlearnCardId(learnCardId);
    }

    fetchLocalUserData().then((data) => {
      setUserToken(data.token);
      setUserId(data._id);
    });
  }, [location.state]);

  async function fetchClassroom() {
    await axios
      .get(`${BASE_URL}${apiVersion}/teach/${classroomId}`, {
        headers: getHeaders(userToken ?? ""),
      })
      .then(({ data }) => {
        const card = data.teachCard;
        console.log(data);
        setClassroom(card);
        setIsLoading(false);
      })
      .catch((data) => {
        console.log(data);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    if (classroomId && userToken) {
      fetchClassroom();
    }
  }, [classroomId, userToken]);

  const [element, setElement] = useState<ReactElement>();

  useEffect(() => {
    if (classroom) {
      setElement(
        <Overview {...classroom} userId={userId} userToken={userToken} />
      );
    }
  }, [classroom]);

  const checkTeacher = (userId: string, teacherId: string) => {
    return userId == teacherId;
  };

  useEffect(() => {
    if (classroom) {
      if (activeLink == "overview") {
        setElement(
          <Overview {...classroom} userId={userId} userToken={userToken} />
        );
      } else if (activeLink == "classroom") {
        setElement(
          <Classroom
            callLink={classroom.callLink}
            cardBanner={classroom.cardBanner}
            topic={classroom.topic}
            isTeacher={checkTeacher(userId, classroom.createdBy._id)}
            teachCardId={classroom._id}
            userToken={userToken}
            classElemType={classElemType}
          />
        );
      } else if (activeLink == "people") {
        setElement(
          <Participants
            cardBanner={classroom.cardBanner}
            createdBy={classroom.createdBy}
            studentsEnrolled={classroom.studentsEnrolled}
            topic={classroom.topic}
          />
        );
      }
    } else {
    }
  }, [activeLink]);

  const navigationHandler = (navigateTo: string) => {
    setActiveLink(navigateTo);
  };

  const labels = ["overview", "classroom", "people"];

  return (
    <>
      <Navbar />
      <Section>
        <BackBtn
          link={backLink}
          classElem={classElemType}
          learnCardId={learnCardId}
        />
        <HorizontalNavigator
          activeLink={activeLink}
          labelArr={labels}
          navigationHandler={navigationHandler}
        />
        {isLoading ? (
          <ElementWrapper>
            <Loader />
          </ElementWrapper>
        ) : (
          <ElementWrapper>{element}</ElementWrapper>
        )}
      </Section>
      <Footer />
    </>
  );
};

export default SingleClassroom;

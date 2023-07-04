import React, { ReactElement, useEffect, useState } from "react";
import Navbar from "../../components/general-components/navbar";
import styled from "styled-components";
import Overview from "../../components/classroom-comp/overview";
import Participants from "../../components/classroom-comp/participants";
import Classroom from "../../components/classroom-comp/classroom";
import HorizontalNavigator from "../../components/general-components/horizontalNavigator";
import FooterWrapper from "../../components/general-components/footer/footerWrapper";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { getHeaders } from "../../utils/helperFunctions";
import { UserCookie } from "../../utils/userCookie";
import BackBtn from "../../components/request-comp/backBtn";
import { classroomProps } from "../../types/classroomType";

const Section = styled.div`
  /* margin: 2rem 0 3rem; */
  padding: 2rem 15vw 0;
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

  const [backLink, setBackLink] = useState<string>("/classes");

  const location = useLocation();

  const { fetchLocalUserData } = UserCookie();

  useEffect(() => {
    console.log(location.state);
    const id = location.state.classroomId;
    setClassroomId(id);

    const link = location.state?.backPageLink;
    if (link) {
      setBackLink(link);
    }

    fetchLocalUserData().then((data) => {
      setUserToken(data.token);
      setUserId(data._id);
    });
  }, [location]);

  async function fetchClassroom() {
    await axios
      .get(`${BASE_URL}${apiVersion}/teach/${classroomId}`, {
        headers: getHeaders(userToken ?? ""),
      })
      .then(({ data }) => {
        const card = data.teachCard;
        console.log(data);
        setClassroom(card);
      });
  }

  useEffect(() => {
    if (classroomId && userToken) {
      fetchClassroom();
    }
  }, [classroomId]);

  const [activeLink, setActiveLink] = useState("overview");
  const [classElemType, setClassElemType] = useState<string>("all classes");

  useEffect(() => {
    const link = location.state?.navLink;
    if (link) {
      setActiveLink(link);
    }
    const elemLink = location.state?.elemType;
    if (elemLink) {
      setClassElemType(elemLink);
    }
  }, [location]);

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
        <BackBtn link={backLink} classElem={classElemType} />
        <HorizontalNavigator
          activeLink={activeLink}
          labelArr={labels}
          navigationHandler={navigationHandler}
        />
        <ElementWrapper>{element}</ElementWrapper>
      </Section>
      <FooterWrapper />
    </>
  );
};

export default SingleClassroom;

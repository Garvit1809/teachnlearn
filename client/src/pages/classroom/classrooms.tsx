import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import ClassroomCard from "../../components/classroom-comp/classroomCard";
import Navbar from "../../components/general-components/navbar";
import Intro from "../../components/home-comp/intro";
import HorizontalNavigator from "../../components/general-components/horizontalNavigator";
import Footer from "../../components/general-components/footer/footer";
import Classroom from "../../components/classroom-comp/classroom";
import ClassroomGrid from "../../components/classroom-comp/classroomGrid";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { UserCookie } from "../../utils/userCookie";
import { getHeaders } from "../../utils/helperFunctions";

const Section = styled.div`
  /* display: grid; */
  /* grid-template-columns: auto auto auto; */
  /* gap: 20px; */
  padding: 0 6.3vw;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export interface student {
  _id: string;
  name: string;
  photo: string;
  userName: string;
}

export interface teachCardProps {
  announcements: string[];
  callLink: string;
  cardBanner: string;
  classStartsAt: string;
  classEndsAt: string;
  createdBy: {
    name: string;
    photo: string;
    _id: string;
    userName: string;
  };
  date: string;
  description: string;
  expectations: string[];
  interestedStudents: string[];
  isLearningCardReferred: boolean;
  preferredLanguage: string;
  price: number;
  programme: string;
  standard: string;
  studentsEnrolled: student[];
  subject: string;
  tags: string[];
  topic: string;
  _id: string;
}

const Classrooms = () => {
  const [activeLink, setActiveLink] = useState("all classes");
  // const [element, setElement] = useState<ReactElement>(<Overview />);

  // useEffect(() => {
  //   if (activeLink == "overview") {
  //     setElement(<Overview />);
  //   } else if (activeLink == "classroom") {
  //     setElement(<Classroom />);
  //   } else if (activeLink == "people") {
  //     setElement(<Participants />);
  //   }
  // }, [activeLink]);

  const navigationHandler = (navigateTo: string) => {
    setActiveLink(navigateTo);
  };

  const labels = ["all classes", "upcoming", "completed"];

  const [teachCards, setTeachCards] = useState<Array<teachCardProps>>();

  const [userToken, setUserToken] = useState<string>();
  const { fetchLocalUserToken } = UserCookie();

  useEffect(() => {
    fetchLocalUserToken().then((token) => {
      setUserToken(token);
    });
  }, [location]);

  async function fetchTeachCards() {
    await axios
      .get(`${BASE_URL}${apiVersion}/teach`, {
        headers: getHeaders(userToken ?? ""),
      })
      .then(({ data }) => {
        console.log(data.data.data);
        setTeachCards(data.data.data);
      });
  }

  useEffect(() => {
    if (userToken) {
      fetchTeachCards();
    }
  }, [userToken]);

  return (
    <>
      <Navbar />
      <Section>
        <Intro />
        <HorizontalNavigator
          activeLink={activeLink}
          labelArr={labels}
          navigationHandler={navigationHandler}
        />
        {teachCards && <ClassroomGrid teachCards={teachCards} />}
        <Footer />
      </Section>
    </>
  );
};

export default Classrooms;

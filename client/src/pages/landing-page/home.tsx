import React, { useEffect, useState } from "react";
import Navbar from "../../components/general-components/navbar";
import styled from "styled-components";
import Intro from "../../components/home-comp/intro";
import RecommendedClasses from "../../components/home-comp/recommendedClasses";
import Footer from "../../components/general-components/footer/footer";
import ClassSectionWrapper from "../../components/home-comp/enrolledClassWrapper";
import Popular from "../../components/home-comp/popular";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { getHeaders } from "../../utils/helperFunctions";
import { classroomCardProps } from "../../components/classroom-comp/classroomCard";
import { UserCookie } from "../../utils/userCookie";
import { learnCardProps } from "../requests/requests";
import EnrolledClassWrapper from "../../components/home-comp/enrolledClassWrapper";
import RequestCardWrapper from "../../components/home-comp/requestCardWrapper";
import RecommendedClassWrapper from "../../components/home-comp/recommendedClassWrapper";

const Section = styled.div`
  /* border: 1px solid brown; */
  padding: 0 6.3vw;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const Home = () => {
  const [userToken, setUserToken] = useState<string>("");
  const [userRole, setUserRole] = useState<string>("");
  const [upcomingClasses, setUpcomingClasses] =
    useState<Array<classroomCardProps>>();
  const [recommendedClasses, setRecommendedClasses] =
    useState<Array<classroomCardProps>>();
  const [learnCards, setLearnCards] = useState<Array<learnCardProps>>();

  const { fetchLocalUserData } = UserCookie();

  useEffect(() => {
    fetchLocalUserData().then((data) => {
      setUserToken(data.token);
      setUserRole(data.role);
    });
  }, []);

  async function fetchAllTeachCards() {
    await axios
      .get(`${BASE_URL}${apiVersion}/teach`, {
        params: {
          sort: "classStartsAt",
        },
        headers: getHeaders(userToken ?? ""),
      })
      .then(({ data }) => {
        console.log(data.teachCards);
        setRecommendedClasses(data.teachCards);
      });
  }

  async function fetchAllUpcomingClasses() {
    await axios
      .get(`${BASE_URL}${apiVersion}/user/myclasses/upcoming`, {
        headers: getHeaders(userToken ?? ""),
      })
      .then(({ data }) => {
        const classes = data.upcomingClasses;
        console.log(classes);
        setUpcomingClasses(classes);
      });
  }

  const fetchLearnCards = async () => {
    await axios.get(`${BASE_URL}${apiVersion}/learn`).then(({ data }) => {
      console.log(data.data.data);
      const learnCardData = data.data.data;
      setLearnCards(learnCardData);
    });
  };

  useEffect(() => {
    if (userToken) {
      fetchAllTeachCards();
      fetchAllUpcomingClasses();
      fetchLearnCards();
    }
  }, [userToken]);

  return (
    <>
      <Navbar />
      <Section>
        <Intro role={userRole} />
        {/* <Popular /> */}
        {recommendedClasses && recommendedClasses.length != 0 && (
          <RecommendedClassWrapper
            heading="Classes recommended for you!"
            cardArr={recommendedClasses}
          />
        )}
        {upcomingClasses && upcomingClasses.length != 0 && (
          <EnrolledClassWrapper
            heading="Upcoming Enrolled Classes!"
            cardArr={upcomingClasses}
          />
        )}
        {learnCards && (
          <RequestCardWrapper
            heading="Rising Requests"
            requestCard={learnCards}
          />
        )}
        <Footer />
      </Section>
    </>
  );
};

export default Home;

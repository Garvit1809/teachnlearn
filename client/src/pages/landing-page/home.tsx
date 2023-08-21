import React, { useEffect, useState } from "react";
import Navbar from "../../components/general-components/navbar";
import styled from "styled-components";
import Intro from "../../components/home-comp/intro";
import Footer from "../../components/general-components/footer/footer";
import Popular from "../../components/home-comp/popular";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { getHeaders } from "../../utils/helperFunctions";
import { UserCookie } from "../../utils/userCookie";
import { learnCardProps } from "../requests/requests";
import EnrolledClassWrapper from "../../components/home-comp/enrolledClassWrapper";
import RequestCardWrapper from "../../components/home-comp/requestCardWrapper";
import RecommendedClassWrapper from "../../components/home-comp/recommendedClassWrapper";
import FeedbackForm from "../../components/home-comp/feedbackForm";
import YoutubeCarousel from "../../components/home-comp/youtubeCarousel";
import { useNavigate } from "react-router-dom";
import { teachinCardProps } from "../../types/teachingCardType";
import { localStorageUser } from "../../utils/globalConstants";

const Section = styled.div`
  /* border: 1px solid brown; */
  padding: 0 6.3vw;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem(localStorageUser)) {
      navigate("/");
    }
  }, [navigate]);

  const [userToken, setUserToken] = useState<string>("");
  const [userRole, setUserRole] = useState<string>("");
  const [userId, setuserId] = useState<string>("");
  const [recommendedClasses, setRecommendedClasses] = useState<
    Array<teachinCardProps>
  >([]);
  const [upcomingClasses, setUpcomingClasses] = useState<
    Array<teachinCardProps>
  >([]);
  const [learnCards, setLearnCards] = useState<Array<learnCardProps>>([]);
  const [renderHome, setRenderHome] = useState(false);
  const [recommendedIsLoading, setRecommendedIsLoading] = useState(true);
  const [upcomingIsLoading, setUpcomingIsLoading] = useState(true);
  const [requestIsLoading, setRequestIsLoading] = useState(true);

  const { fetchLocalUserData } = UserCookie();

  useEffect(() => {
    fetchLocalUserData()
      .then((data) => {
        console.log(data);
        setUserToken(data.token);
        setuserId(data._id);
        setUserRole(data.role);
        setRenderHome(true);
      })
      .catch((err) => {
        navigate("/");
      });
  }, []);

  async function fetchRecommendedTeachCards() {
    await axios
      .get(`${BASE_URL}${apiVersion}/teach/recommended-classes`, {
        headers: getHeaders(userToken ?? ""),
      })
      .then(({ data }) => {
        console.log(data.stats);
        setRecommendedClasses(data.stats);
        setRecommendedIsLoading(false);
      });
  }

  async function fetchAllUpcomingClasses() {
    await axios
      .get(`${BASE_URL}${apiVersion}/user/myclasses/upcoming`, {
        headers: getHeaders(userToken),
      })
      .then(({ data }) => {
        const classes = data.upcomingClasses;
        // console.log(classes);
        setUpcomingClasses(classes);
        setUpcomingIsLoading(false);
      });
  }

  const fetchTopLearnCards = async () => {
    await axios
      .get(`${BASE_URL}${apiVersion}/learn/top-requests`, {
        headers: getHeaders(userToken),
      })
      .then(({ data }) => {
        // console.log(data.stats);
        const learnCardData = data.stats;
        setLearnCards(learnCardData);
        setRequestIsLoading(false);
      });
  };

  useEffect(() => {
    if (userToken) {
      fetchRecommendedTeachCards();
      fetchAllUpcomingClasses();
      fetchTopLearnCards();
    }
  }, [userToken]);

  return renderHome ? (
    <>
      <Navbar dontShowSearchDropDown={false} />
      <Section>
        <Intro />
        {/* <Popular /> */}
        {/* { recommendedClasses.length != 0 && ( */}
        <RecommendedClassWrapper
          heading="Classes recommended for you!"
          cardArr={recommendedClasses}
          userId={userId}
          loading={recommendedIsLoading}
        />
        {/* )} */}
        {upcomingClasses && upcomingClasses.length != 0 && (
          <EnrolledClassWrapper
            heading="Upcoming Enrolled Classes!"
            cardArr={upcomingClasses}
            loading={upcomingIsLoading}
          />
        )}
        {/* {learnCards && learnCards.length != 0 && ( */}
        <RequestCardWrapper
          heading="Rising Requests"
          requestCard={learnCards}
          loading={requestIsLoading}
        />
        {/* )} */}
        <YoutubeCarousel />
        <FeedbackForm userToken={userToken} />
      </Section>
      <Footer />
    </>
  ) : null;
};

export default Home;

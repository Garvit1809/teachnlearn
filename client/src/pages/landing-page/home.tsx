import React, { useEffect, useState } from "react";
import Navbar from "../../components/general-components/navbar";
import styled from "styled-components";
import Intro from "../../components/home-comp/intro";
import Footer from "../../components/general-components/footer/footer";
import Popular from "../../components/home-comp/popular";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { getHeaders, topNavigator } from "../../utils/helperFunctions";
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
  const [renderHome, setRenderHome] = useState(false);

  const [recommendedClasses, setRecommendedClasses] = useState<
    Array<teachinCardProps>
  >([]);
  const [upcomingClasses, setUpcomingClasses] = useState<
    Array<teachinCardProps>
  >([]);
  const [learnCards, setLearnCards] = useState<Array<learnCardProps>>([]);
  const [myLearnCards, setMyLearnCards] = useState<Array<learnCardProps>>([]);
  const [myTeachCards, setMyTeachCards] = useState<Array<teachinCardProps>>([]);
  const [myUnreviewedClasses, setMyUnreviewedClasses] = useState<
    Array<teachinCardProps>
  >([]);

  const [recommendedIsLoading, setRecommendedIsLoading] = useState(true);
  const [upcomingIsLoading, setUpcomingIsLoading] = useState(true);
  const [requestIsLoading, setRequestIsLoading] = useState(true);
  const [unreviewedIsLoading, setUnreviewedIsLoading] = useState(true);
  const [myLearnCardsIsLoading, setmyLearnCardsIsLoading] = useState(false);
  const [myTeachCardsIsLoading, setMyTeachCardsIsLoading] = useState(false);

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

    window.addEventListener("storage", () => {
      fetchLocalUserData().then((user) => {
        setUserRole(user.role);
      });
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
        params: {
          sort: "classStartsAt",
          limit: 6,
        },
        headers: getHeaders(userToken),
      })
      .then(({ data }) => {
        const classes = data.upcomingClasses;
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

  const fetchClassesCreatedByme = async () => {
    await axios
      .get(`${BASE_URL}${apiVersion}/user/my-teach-cards`, {
        headers: getHeaders(userToken),
      })
      .then(({ data }) => {
        console.log(data);
        setMyTeachCards(data.myCards);
        setMyTeachCardsIsLoading(false);
      });
  };

  const fetchMyLearnCards = async () => {
    await axios
      .get(`${BASE_URL}${apiVersion}/user/my-learn-cards`, {
        headers: getHeaders(userToken),
      })
      .then(({ data }) => {
        console.log(data);
        setMyLearnCards(data.myCards);
        setmyLearnCardsIsLoading(false);
      });
  };

  const fetchMyUnreviewedClasses = async () => {
    await axios
      .get(`${BASE_URL}${apiVersion}/user/my-unreviewd-classes`, {
        headers: getHeaders(userToken),
      })
      .then(({ data }) => {
        console.log(data);
        setMyUnreviewedClasses(data.unreviewedClasses);
        setUnreviewedIsLoading(false);
      });
  };

  useEffect(() => {
    if (userToken) {
      if (userRole == "teach") {
        fetchAllUpcomingClasses();
        fetchTopLearnCards();
      } else if (userRole == "learn") {
        fetchRecommendedTeachCards();
        fetchMyLearnCards();
        fetchAllUpcomingClasses();
        // fetchClassesCreatedByme();
        fetchMyUnreviewedClasses();
      }
    }
  }, [userToken, userRole]);

  const classNavigator = () => {
    topNavigator();
    navigate("/classes");
  };

  const unreviewedClassNavigator = () => {
    topNavigator();
    navigate("/classes", {
      state: {
        elemLink: "completed",
      },
    });
  };

  return renderHome ? (
    <>
      <Navbar dontShowSearchDropDown={false} />
      <Section>
        <Intro />
        {/* <Popular /> */}
        {userRole == "teach" ? (
          <>
            <EnrolledClassWrapper
              heading="My Upcoming Classes!!"
              cardArr={upcomingClasses}
              loading={upcomingIsLoading}
            />
            <RequestCardWrapper
              heading="Check Learn Cards!!"
              requestCard={learnCards}
              loading={requestIsLoading}
            />
          </>
        ) : (
          <>
            {myUnreviewedClasses && myUnreviewedClasses.length != 0 && (
              <RecommendedClassWrapper
                heading="Classes UnReviewed!!"
                cardArr={myUnreviewedClasses}
                userId={userId}
                loading={unreviewedIsLoading}
                cardSectionNavigator={unreviewedClassNavigator}
              />
            )}
            <EnrolledClassWrapper
              heading="My Upcoming Classes!!"
              cardArr={upcomingClasses}
              loading={upcomingIsLoading}
            />
            {myLearnCards && myLearnCards.length != 0 && (
              <RequestCardWrapper
                heading="My Learn Cards!!"
                requestCard={myLearnCards}
                loading={myLearnCardsIsLoading}
              />
            )}
            <RecommendedClassWrapper
              heading="Check Teach Cards!!"
              cardArr={recommendedClasses}
              userId={userId}
              loading={recommendedIsLoading}
              cardSectionNavigator={classNavigator}
            />
          </>
        )}
        {/* <RecommendedClassWrapper
          heading="Classes created by me!"
          cardArr={myTeachCards}
          userId={userId}
          loading={myTeachCardsIsLoading}
        /> */}
        <YoutubeCarousel />
        <FeedbackForm userToken={userToken} />
      </Section>
      <Footer />
    </>
  ) : null;
};

export default Home;

import React, { ReactElement, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer/footer";
import HorizontalNavigator from "./horizontalNavigator";
import { ElementWrapper } from "../../pages/classroom/classrooms";
import { UserCookie, userProps } from "../../utils/userCookie";
import { learnCardProps } from "../../pages/requests/requests";
import { teachinCardProps } from "../../types/teachingCardType";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { getHeaders } from "../../utils/helperFunctions";
import ClassroomGrid from "../classroom-comp/classroomGrid";
import LearnCardGrid from "../request-comp/learnCardGrid";
import { styled } from "styled-components";

const SearchFeedWrapper = styled.div`
  margin: 0 6.3vw 0 6.3vw;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

const SearchFeed = () => {
  const [localUser, setLocalUser] = useState<userProps>();
  const [query, setquery] = useState<string>();

  const { fetchLocalUserData } = UserCookie();
  const location = useLocation();

  const [searchedUsers, setSearchedUsers] = useState<Array<userProps>>([]);
  const [searchedLearnCards, setSearchedLearnCards] = useState<
    Array<learnCardProps>
  >([]);
  const [searchedTeachCards, setSearchedTeachCards] = useState<
    Array<teachinCardProps>
  >([]);

  const searchHandler = async (token: string) => {
    await axios
      .post(
        `${BASE_URL}${apiVersion}/user/search`,
        {
          search: query,
        },
        {
          headers: getHeaders(token),
        }
      )
      .then(({ data }) => {
        console.log("searchfeeddata");
        console.log(data);
        const classes = data.classes;
        const learnCards = data.learnCards;
        const users = data.users;
        setSearchedUsers(users);
        setSearchedLearnCards(learnCards);
        setSearchedTeachCards(classes);
      })
      .catch((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    const keyword = location.state.keyword;
    setquery(keyword);

    fetchLocalUserData().then((user) => {
      setLocalUser(user);
    });
  }, []);

  useEffect(() => {
    if (localUser && query != "") {
      console.log("CHECKING");

      searchHandler(localUser.token);
    }
  }, [query, localUser]);

  const [activeLink, setActiveLink] = useState("users");
  const labels = ["users", "learn cards", "teach cards"];

  const navigationHandler = (navigateTo: string) => {
    setActiveLink(navigateTo);
  };

  const [element, setElement] = useState<ReactElement>();

  useEffect(() => {
    if (activeLink == "users") {
      // setElement();
    } else if (activeLink == "learn cards") {
      setElement(<LearnCardGrid learnCards={searchedLearnCards} />);
    } else if (activeLink == "teach cards") {
      setElement(<ClassroomGrid teachCards={searchedTeachCards} />);
    }
  }, [activeLink]);

  const navSearchHandler = (keyword: string) => {
    console.log(keyword);
    setquery(keyword);
  };

  return (
    <>
      <Navbar setSearchFeedQuery={navSearchHandler} />
      <SearchFeedWrapper>
        <HorizontalNavigator
          activeLink={activeLink}
          labelArr={labels}
          navigationHandler={navigationHandler}
        />
        <ElementWrapper>{element}</ElementWrapper>
      </SearchFeedWrapper>
      <Footer />
    </>
  );
};

export default SearchFeed;

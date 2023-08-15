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
import UserList from "../profile-comp/my-profile/userList";

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

  useEffect(() => {
    const keyword = location.state.keyword;
    const users = location.state.searchedUsers;
    const learnCards = location.state.searchedLearnCards;
    const teachCards = location.state.searchedTeachCards;
    setquery(keyword);
    setSearchedUsers(users);
    setSearchedLearnCards(learnCards);
    setSearchedTeachCards(teachCards);

    fetchLocalUserData().then((user) => {
      setLocalUser(user);
    });
  }, []);

  const [activeLink, setActiveLink] = useState("users");
  const labels = ["users", "learn cards", "teach cards"];
  const navigationHandler = (navigateTo: string) => {
    setActiveLink(navigateTo);
  };

  const [element, setElement] = useState<ReactElement>();

  useEffect(() => {
    if (activeLink == "users") {
      localUser &&
        setElement(
          <UserList localUserId={localUser._id} userArr={searchedUsers} />
        );
    } else if (activeLink == "learn cards") {
      setElement(<LearnCardGrid learnCards={searchedLearnCards} />);
    } else if (activeLink == "teach cards") {
      setElement(<ClassroomGrid teachCards={searchedTeachCards} />);
    }
  }, [activeLink, query]);

  const updateFunc = (
    keyword: string,
    users: Array<userProps>,
    learnCards: Array<learnCardProps>,
    classes: Array<teachinCardProps>
  ) => {
    setquery(keyword);
    setSearchedUsers(users);
    setSearchedLearnCards(learnCards);
    setSearchedTeachCards(classes);
  };

  return (
    <>
      <Navbar
        updateSearchFeedProps={updateFunc}
        dontShowSearchDropDown={true}
        showSearchNavButton={false}
      />
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

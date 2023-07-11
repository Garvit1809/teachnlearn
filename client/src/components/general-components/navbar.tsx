import React, { useEffect, useRef, useState } from "react";
import TNL_Logo from "../../assets/tnl-logo.png";
import styled from "styled-components";
import SearchBar from "./searchBar";
import UserChip from "./userChip";
import { UserCookie, userProps } from "../../utils/userCookie";
import NavbarLinks from "./navbarLinks";
import {
  getHeaders,
  topNavigator,
  useOutsideAlerter,
} from "../../utils/helperFunctions";
import { useNavigate } from "react-router-dom";
import ModeToggle from "../profile-comp/modeToggle";
import { MyProfileIcon, SignoutIcon } from "./svg";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { learnCardProps } from "../../pages/requests/requests";
import { teachinCardProps } from "../../types/teachingCardType";
import NavSearchDropdown from "../profile-comp/navbar/navSearchDropdown";

const Section = styled.div`
  /* border: 1px solid red; */
  /* padding: 1.75rem 3.5vw 0rem 3.5vw; */
  padding-top: 1.75rem;
  display: grid;
  grid-template-columns: 1.8fr 6fr 2fr;
  /* display: flex; */
  box-sizing: border-box;
  column-gap: 2.5rem;
  align-items: center;
  font-family: "Nunito";
  margin: 0 6.3vw 2.5rem 6.3vw;
`;

const SearchContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  /* width: 100%; */
`;

const ImageContainer = styled.div`
  /* border: 1px solid red; */
  width: 200px;
  height: 80px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const UserWrapper = styled.div`
  /* border: 1px solid red; */
  border-radius: 4px;
  border: 1px solid #d5d9eb;
  /* width: fit-content; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  padding: 1rem 1.25rem;
  cursor: pointer;
  position: relative;
`;

const UserOptions = styled.div`
  border: 1px solid red;
  position: absolute;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #d5d9eb;
  top: 100%;
  box-sizing: border-box;
  padding: 1rem 0;
  background-color: white;

  ul {
    list-style: none;

    li {
      /* border: 1px solid red; */
      font-size: 1rem;
      font-weight: 600;
      padding: 0.5rem 1.125rem;
      /* margin: 0 1.125rem; */
      border-radius: 8px;
      display: flex;
      /* flex-direction: ; */
      align-items: center;
      justify-content: space-between;
      transition: all 0.15s linear;

      &:hover {
        background-color: #d8eefe;
      }
    }
  }
`;

const ModeWrapper = styled.div`
  /* border: 1px solid red; */
  width: 60%;
  margin: 0 auto 2.5rem;
`;

const Navbar = () => {
  const [localUser, setLocalUser] = useState<userProps>();
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const { fetchLocalUserData } = UserCookie();

  useEffect(() => {
    fetchLocalUserData().then((user) => {
      setLocalUser(user);
    });

    window.addEventListener("storage", () => {
      console.log("Change to local storage!");
      fetchLocalUserData().then((user) => {
        setLocalUser(user);
      });
    });
  }, []);

  const navigate = useNavigate();

  const navigationHandler = (link: string) => {
    topNavigator();
    navigate(link);
  };

  useEffect(() => {
    console.log(localUser?.role);
  }, [localUser]);

  const signoutHandler = () => {
    localStorage.clear();
    navigate("/signin");
  };

  const closeDropDown = () => {
    setShowProfileOptions(false);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, closeDropDown);

  const [searchedUsers, setSearchedUsers] = useState<Array<userProps>>([]);
  const [searchedLearnCards, setSearchedLearnCards] = useState<
    Array<learnCardProps>
  >([]);
  const [searchedTeachCards, setSearchedTeachCards] = useState<
    Array<teachinCardProps>
  >([]);

  const searchHandler = async (query: string) => {
    setshowDropDown(true);
    if (query === "") {
      setSearchedUsers([]);
      setSearchedLearnCards([]);
      setSearchedTeachCards([]);
      return;
    }

    await axios
      .get(`${BASE_URL}${apiVersion}/user/search`, {
        params: {
          search: query,
        },
        headers: getHeaders(localUser?.token || ""),
      })
      .then(({ data }) => {
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

  const [showDropDown, setshowDropDown] = useState(true);

  const closeSearchBox = () => {
    setshowDropDown(false);
  };
  return (
    <>
      <Section>
        <ImageContainer onClick={() => navigationHandler("/")}>
          <img src={TNL_Logo} alt="tnl_logo" />
        </ImageContainer>
        <SearchContainer>
          <SearchBar
            placeholderText="Search for a request, class, topic, subject, person, course, etc."
            updateSearch={searchHandler}
            elem={
              searchedUsers.length == 0 &&
              searchedLearnCards.length == 0 &&
              searchedTeachCards.length == 0 ? undefined : localUser &&
                showDropDown ? (
                <NavSearchDropdown
                  searchedUsers={searchedUsers}
                  searchedLearnCards={searchedLearnCards}
                  searchedTeachCards={searchedTeachCards}
                  closeSearchBox={closeSearchBox}
                  localUserId={localUser._id}
                  localUserClassesEnrolled={localUser.classesEnrolled}
                />
              ) : undefined
            }
          />
        </SearchContainer>
        {localUser && (
          <UserWrapper
            onClick={() => setShowProfileOptions(!showProfileOptions)}
            ref={wrapperRef}
          >
            <UserChip
              name={localUser.userName}
              photo={localUser.photo}
              imgSize="1.75rem"
              textSize="1.25em"
              userId={localUser._id}
              shouldntNavigate={true}
            />
            {showProfileOptions && (
              <UserOptions>
                <ul>
                  <li onClick={() => navigationHandler("/me")}>
                    <span>View Profile</span>
                    <MyProfileIcon />
                  </li>
                  <li onClick={signoutHandler}>
                    <span>Signout</span>
                    <SignoutIcon />
                  </li>
                </ul>
              </UserOptions>
            )}
          </UserWrapper>
        )}
      </Section>
      <ModeWrapper>
        {localUser && (
          <ModeToggle role={localUser.role} userToken={localUser.token} />
        )}
      </ModeWrapper>
      <NavbarLinks />
    </>
  );
};

export default Navbar;

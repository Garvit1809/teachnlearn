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
import SideDrawer from "./sideDrawer";
import ProfileDrawer from "./profileDrawer";
import SearchDrawer from "./searchDrawer";

const Section = styled.div`
  /* border: 1px solid red; */
  position: relative;
  padding-top: 1.75rem;
  display: grid;
  grid-template-columns: 1.8fr 6fr 2fr;
  box-sizing: border-box;
  column-gap: 2.5rem;
  align-items: center;
  font-family: "Nunito";
  margin: 0 6.3vw 2.5rem 6.3vw;

  @media only screen and (max-width: 1050px) {
    grid-template-columns: 1.6fr 6fr 0.6fr;
    column-gap: 1.8rem;
  }

  @media only screen and (max-width: 880px) {
    display: flex;
    justify-content: space-between;
  }

  div.options {
    display: flex;
    column-gap: 1rem;
  }
`;

const SearchContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  /* width: 100%; */

  @media only screen and (max-width: 950px) {
  }

  @media only screen and (max-width: 880px) {
    display: none;
  }
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

  @media only screen and (max-width: 950px) {
    width: 170px;
    height: 70px;
  }

  @media only screen and (max-width: 600px) {
    width: 160px;
    height: 70px;
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

  @media only screen and (max-width: 1050px) {
    display: none;
  }
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
  /* pointer-events: ; */

  ul {
    list-style: none;

    li {
      /* border: 1px solid red; */
      font-size: 1rem;
      font-weight: 600;
      padding: 0.5rem 1.125rem;
      border-radius: 8px;
      display: flex;
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

  @media only screen and (max-width: 700px) {
    width: 80%;
  }

  @media only screen and (max-width: 500px) {
    width: 95%;
  }
`;

interface navProps {
  // setSearchFeedQuery?: any;
  updateSearchFeedProps?: any;
  dontShowSearchDropDown?: boolean;
}

const Navbar = (props: navProps) => {
  const [localUser, setLocalUser] = useState<userProps>();
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const { fetchLocalUserData } = UserCookie();

  const [renderNav, setRenderNav] = useState(false);

  useEffect(() => {
    console.log("CHECKING");

    fetchLocalUserData()
      .then((user) => {
        setLocalUser(user);
        setRenderNav(true);
      })
      .catch(() => {
        setRenderNav(false);
      });

    window.addEventListener("storage", () => {
      fetchLocalUserData()
        .then((user) => {
          setLocalUser(user);
          setRenderNav(true);
        })
        .catch(() => {
          setRenderNav(false);
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
    navigate("/teachNlearn");
  };

  const closeDropDown = () => {
    setShowProfileOptions(false);
  };

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useOutsideAlerter(
    wrapperRef,
    closeDropDown,
    false,
    undefined,
    false,
    undefined
  );

  const [searchedUsers, setSearchedUsers] = useState<Array<userProps>>([]);
  const [searchedLearnCards, setSearchedLearnCards] = useState<
    Array<learnCardProps>
  >([]);
  const [searchedTeachCards, setSearchedTeachCards] = useState<
    Array<teachinCardProps>
  >([]);

  const [query, setQuery] = useState("");

  const searchHandler = async (query: string) => {
    setshowDropDown(true);
    setQuery(query);
    if (query === "") {
      setSearchedUsers([]);
      setSearchedLearnCards([]);
      setSearchedTeachCards([]);
      if (props.updateSearchFeedProps) {
        props.updateSearchFeedProps(query, [], [], []);
      }
      return;
    }

    await axios
      .post(
        `${BASE_URL}${apiVersion}/user/search`,
        {
          search: query,
        },
        {
          headers: getHeaders(localUser?.token || ""),
        }
      )
      .then(({ data }) => {
        console.log(data);
        const classes = data.classes;
        const learnCards = data.learnCards;
        const users = data.users;
        setSearchedUsers(users);
        setSearchedLearnCards(learnCards);
        setSearchedTeachCards(classes);
        if (props.updateSearchFeedProps) {
          props.updateSearchFeedProps(query, users, learnCards, classes);
        }
      })
      .catch((data) => {
        console.log(data);
      });
  };

  const searchNavigator = () => {
    if (query != "") {
      topNavigator();
      navigate("/search/feed", {
        state: {
          keyword: query,
          searchedUsers: searchedUsers,
          searchedLearnCards: searchedLearnCards,
          searchedTeachCards: searchedTeachCards,
        },
      });
    }
  };

  const [showDropDown, setshowDropDown] = useState(true);

  const closeSearchBox = () => {
    console.log("CHECK NAV DROPDOWN");
    setshowDropDown(false);
  };

  const userWrapperhandler = () => {
    // console.log("HANDLING");
    setShowProfileOptions(!showProfileOptions);
  };

  return renderNav ? (
    <>
      <Section>
        <ImageContainer onClick={() => navigationHandler("/")}>
          <img src={TNL_Logo} alt="tnl_logo" />
        </ImageContainer>
        <SearchContainer>
          <SearchBar
            placeholderText="Search for a request, class, card id, topic, subject, person, course etc."
            updateSearch={searchHandler}
            showButton={true}
            onEnterFunc={searchNavigator}
            searchQuery={query}
            elem={
              searchedUsers.length == 0 &&
              searchedLearnCards.length == 0 &&
              searchedTeachCards.length == 0 ? undefined : localUser &&
                showDropDown ? (
                props.dontShowSearchDropDown ? undefined : (
                  <NavSearchDropdown
                    searchedUsers={searchedUsers}
                    searchedLearnCards={searchedLearnCards}
                    searchedTeachCards={searchedTeachCards}
                    closeSearchBox={closeSearchBox}
                    localUserId={localUser._id}
                    localUserClassesEnrolled={localUser.classesEnrolled}
                  />
                )
              ) : undefined
            }
          />
        </SearchContainer>
        {localUser && (
          <UserWrapper onClick={userWrapperhandler} ref={wrapperRef}>
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
                    <span>My Profile</span>
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
        <div className="options">
          {localUser && (
            <>
              <SearchDrawer
                closeSearchBox={closeSearchBox}
                localUser={localUser}
                searchHandler={searchHandler}
                searchNavigator={searchNavigator}
                searchedLearnCards={searchedLearnCards}
                searchedTeachCards={searchedTeachCards}
                searchedUsers={searchedUsers}
                showDropDown={showDropDown}
                dontShowSearchDropDown={props.dontShowSearchDropDown}
              />
              <ProfileDrawer img={localUser.photo} />
            </>
          )}
          <SideDrawer />
        </div>
      </Section>
      <ModeWrapper>
        {localUser && (
          <ModeToggle role={localUser.role} userToken={localUser.token} />
        )}
      </ModeWrapper>
      <NavbarLinks />
    </>
  ) : null;
};

export default Navbar;

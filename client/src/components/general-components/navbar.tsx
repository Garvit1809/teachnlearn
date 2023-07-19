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

interface sideNavProps {
  showNav: boolean;
}

const Section = styled.div<sideNavProps>`
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

  div.side-bar {
    /* width: 100%; */
    /* border: 1px solid red; */
    margin: 0;
    display: none;
  }

  div.side-nav {
    border: 1px solid red;
    position: absolute;
    width: 0;
    height: 100vh;
    /* right: -100vw; */
    right: ${(p) => (p.showNav ? "0" : "-50vw")};
    background-color: white;
    transform: ${(p) => (p.showNav ? "translateX(0%)" : "translateX(100%)")};
    top: 0;
    transition: all 0.45s linear;
    z-index: 100;
    /* display: ${(p) => (p.showNav ? "flex" : "none")}; */
    display: none;
  }

  @media only screen and (max-width: 950px) {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 0;
    position: relative;

    div.side-bar {
      display: flex;
      svg {
        width: 1.6rem;
        height: 1.6rem;
      }
    }

    div.side-nav {
      display: flex;
    }
  }

  @media only screen and (max-width: 600px) {
    div.side-nav {
      width: 50vw;
    }
  }
`;

const SearchContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  /* width: 100%; */

  @media only screen and (max-width: 950px) {
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

  @media only screen and (max-width: 950px) {
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

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, closeDropDown);

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
    setshowDropDown(false);
  };

  const [showSideBar, setshowSideBar] = useState<boolean>(false);

  return renderNav ? (
    <>
      <Section showNav={showSideBar}>
        <ImageContainer onClick={() => navigationHandler("/")}>
          <img src={TNL_Logo} alt="tnl_logo" />
        </ImageContainer>
        <SearchContainer>
          <SearchBar
            placeholderText="Search for a request, class, card id, topic, subject, person, course etc."
            updateSearch={searchHandler}
            showButton={true}
            onEnterFunc={searchNavigator}
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
        <div className="side-bar" onClick={() => setshowSideBar(true)}>
          <Bars />
        </div>
        <div className="side-nav">
          <ul>
            <li onClick={() => setshowSideBar(false)}>Close</li>
            <li>Home</li>
          </ul>
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

const Bars = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
    </svg>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import TNL_Logo from "../../assets/TNL-logo.png";
import styled from "styled-components";
import SearchBar from "./searchBar";
import UserChip from "./userChip";
import { UserCookie, userProps } from "../../utils/userCookie";
import NavbarLinks from "./navbarLinks";
import { topNavigator } from "../../utils/helperFunctions";
import { useNavigate } from "react-router-dom";
import ModeToggle from "../profile-comp/modeToggle";

const Section = styled.div`
  /* border: 1px solid red; */
  /* padding: 1.75rem 3.5vw 0rem 3.5vw; */
  padding-top: 1.75rem;
  display: grid;
  grid-template-columns: 1.8fr 6fr 2.2fr;
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
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const UserWrapper = styled.div`
  border-radius: 4px;
  border: 1px solid #d5d9eb;
  width: fit-content;
  height: fit-content;
  padding: 1rem 1.25rem;
  cursor: pointer;

  img {
    /* margin-right: 0rem; */
  }

  span {
    /* border: 1px solid red; */
  }
`;

const ModeWrapper = styled.div`
  /* border: 1px solid red; */
  width: 60%;
  margin: 0 auto 2.5rem;
`;

const Navbar = () => {
  const [localUser, setLocalUser] = useState<userProps>();

  const { fetchLocalUserData } = UserCookie();

  useEffect(() => {
    fetchLocalUserData().then((user) => {
      setLocalUser(user);
    });
  }, []);

  const navigate = useNavigate();

  const profileNavigation = () => {
    topNavigator();
    navigate("/me");
  };

  return (
    <>
      <Section>
        <ImageContainer>
          <img src={TNL_Logo} alt="tnl_logo" />
        </ImageContainer>
        <SearchContainer>
          <SearchBar />
        </SearchContainer>
        {localUser && (
          <UserWrapper onClick={profileNavigation}>
            <UserChip
              // name={localUser.name.split(" ")[0]}
              name={
                localUser.name.length > 16
                  ? localUser.name.split(" ")[0]
                  : localUser.name
              }
              photo={localUser.photo}
              imgSize="1.75rem"
              textSize="1.25em"
            />
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

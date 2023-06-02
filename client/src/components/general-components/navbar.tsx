import React from "react";
import TNL_Logo from "../../assets/TNL-logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchBar from "./searchBar";

const Section = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
`;

const SearchContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  margin-left: 2.5vw;
`;

const ImageContainer = styled.div`
  /* border: 1px solid red; */
  width: 200px;
  height: 80px;
  margin-right: 2vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* border: 1px solid red; */
  /* margin-right: 1rem; */
`;

const MenuItem = styled.div`
  /* border: 1px solid lightblue; */
  /* margin: 0 1rem; */
  margin-right: 1.5rem;
  padding: 0.5rem;
  border-radius: 10px;

  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #000000;

  &:last-child {
    margin-right: 2.5rem;
  }
`;

const navOptions = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Forum",
    link: "/forum",
  },
  {
    title: "My Classes",
    link: "/classes",
  },
  {
    title: "Requests",
    link: "/",
  },
  {
    title: "Profile",
    link: "/me",
  },
];

const Navbar = () => {
  return (
    <Section>
      <SearchContainer>
        <ImageContainer>
          <img src={TNL_Logo} alt="tnl_logo" />
        </ImageContainer>
        <SearchBar />
      </SearchContainer>
      <Menu>
        {navOptions.map((option, index) => {
          return (
            <MenuItem key={index}>
              <Link to={option.link}>
                <span>{option.title}</span>
              </Link>
            </MenuItem>
          );
        })}
      </Menu>
    </Section>
  );
};

export default Navbar;

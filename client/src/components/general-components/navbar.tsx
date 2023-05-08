import React from "react";
import TNL_Logo from "../../assets/tnl-logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.div`
border: 1px solid red;
  img {
    border: 1px solid red;
    /* width: 500px; */
    /* height: 400px; */
  }
`;

const ImageContainer = styled.div``;

const Menu = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
const MenuItem = styled.div`
margin: 0 1rem;
border: 1px solid lightblue;
padding: 0.5rem;
border-radius: 10px;
`;

const navOptions = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Forum",
    link: "/",
  },
  {
    title: "My Classes",
    link: "/",
  },
  {
    title: "Requests",
    link: "/",
  },
  {
    title: "Profile",
    link: "/",
  },
];

const Navbar = () => {
  return (
    <Section>
      <ImageContainer>
        {/* <img src={TNL_Logo} alt="tnl_logo" /> */}
      </ImageContainer>
      {/* search */}
      <Menu>
        {navOptions.map((option, index) => {
          return (
            <MenuItem>
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

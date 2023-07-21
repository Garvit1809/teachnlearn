import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { topNavigator } from "../../utils/helperFunctions";
import { useNavigate } from "react-router-dom";
import { navOptions } from "../../utils/globalConstants";

const Menu = styled.div`
  margin: 0 6.3vw 2.5rem;
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 0.5rem;
  background: #d8eefe;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

interface menuItemProps {
  isActive: boolean;
}

const MenuItem = styled.div<menuItemProps>`
  display: flex;
  padding: 1rem 1.25rem;
  align-items: flex-start;
  gap: 0.625rem;
  border-radius: 0.25rem;
  background: ${(p) => (p.isActive ? "#094067" : "none")};
  color: ${(p) => (p.isActive ? "white" : "black")};
  font-size: 1.125rem;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  transition: all 0.15s linear;
`;

const NavbarLinks = () => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    console.log(window.location.pathname);
    setCurrentPath(window.location.pathname);
  }, [window.location.pathname]);

  const navigate = useNavigate();
  const navigationhandler = (link: string) => {
    topNavigator();
    setCurrentPath(link);
    navigate(link);
  };

  const checkIsActive = (optionLink: string) => {
    if (optionLink == "/") {
      return optionLink == currentPath;
    } else {
      return currentPath.includes(optionLink);
    }
  };

  return (
    <Menu>
      {navOptions.map((option, index) => {
        return (
          <MenuItem
            key={index}
            isActive={checkIsActive(option.link)}
            onClick={() => navigationhandler(option.link)}
          >
            <span>{option.title}</span>
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default NavbarLinks;

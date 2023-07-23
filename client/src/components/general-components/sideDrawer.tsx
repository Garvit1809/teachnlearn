import React, { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { topNavigator } from "../../utils/helperFunctions";
import { navOptions } from "../../utils/globalConstants";

const Section = styled.div`
  /* border: 1px solid red; */
  display: none;

  @media only screen and (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    display: block;
    width: 2rem;
    height: 2rem;
  }
`;

const DrawerBody = styled.div`
  width: 100%;
  height: 100%;
  background: #d8eefe;
  padding: 1rem 0;
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

const SideDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

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
    <Section>
      <div onClick={toggleDrawer}>
        <Bars />
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="drawer"
        lockBackgroundScroll={true}
      >
        <DrawerBody>
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
        </DrawerBody>
      </Drawer>
    </Section>
  );
};

const Bars = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
    </svg>
  );
};

export default SideDrawer;

import React from "react";
import { styled } from "styled-components";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { topNavigator } from "../../utils/helperFunctions";
import { useNavigate } from "react-router-dom";
import { MyProfileIcon, SignoutIcon } from "./svg";

const Section = styled.div`
  /* border: 1px solid red; */
  display: none;

  @media only screen and (max-width: 1050px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    display: block;
    width: 2.25rem;
    height: 2.25rem;
    object-fit: cover;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid black;
  }
`;

const DrawerBody = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  background: #d8eefe;
  list-style: none;
  padding: 1rem 0;

  li {
    padding: 0.5rem 1.125rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.15s linear;
    cursor: pointer;
    font-size: 1.125rem;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    &:hover {
      background-color: #094067;
    }
  }
`;

interface profileDrawerProps {
  img: string;
}

const ProfileDrawer = (props: profileDrawerProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navigate = useNavigate();

  const navigationHandler = (link: string) => {
    topNavigator();
    navigate(link);
  };

  const signoutHandler = () => {
    localStorage.clear();
    navigate("/teachNlearn");
  };

  return (
    <Section>
      <div onClick={toggleDrawer}>
        <img src={props.img} alt="" />
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="drawer"
        lockBackgroundScroll={true}
      >
        <DrawerBody>
          <li onClick={() => navigationHandler("/me")}>
            <span>My Profile</span>
            <MyProfileIcon />
          </li>
          <li onClick={signoutHandler}>
            <span>Signout</span>
            <SignoutIcon />
          </li>
        </DrawerBody>
      </Drawer>
    </Section>
  );
};

export default ProfileDrawer;

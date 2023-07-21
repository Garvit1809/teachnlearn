import React from "react";
import { styled } from "styled-components";
import { SearchIcon } from "./svg";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Section = styled.div`
  /* border: 1px solid red; */
  display: none;

  @media only screen and (max-width: 880px) {
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
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  background: #d8eefe;
  padding: 1rem 0;
`;


const SearchDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <Section>
      <div onClick={toggleDrawer}>
        <SearchIcon />
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="drawer"
        lockBackgroundScroll={true}
      >
        <DrawerBody>
          
        </DrawerBody>
      </Drawer>
    </Section>
  );
};

export default SearchDrawer;

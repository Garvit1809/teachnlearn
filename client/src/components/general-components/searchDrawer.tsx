import React from "react";
import { styled } from "styled-components";
import { SearchIcon } from "./svg";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import SearchBar from "./searchBar";
import NavSearchDropdown from "../profile-comp/navbar/navSearchDropdown";
import { userProps } from "../../utils/userCookie";
import { learnCardProps } from "../../pages/requests/requests";
import { teachinCardProps } from "../../types/teachingCardType";

const Section = styled.div`
  /* border: 1px solid red; */
  display: none;

  @media only screen and (max-width: 880px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div.icon {
    svg {
      display: block;
      width: 2rem;
      height: 2rem;
    }
  }
`;

const DrawerBody = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  /* background: #d8eefe; */
  padding: 1rem;
  box-sizing: border-box;
`;

interface searchDrawerProps {
  searchHandler: any;
  searchNavigator: any;
  searchedUsers: Array<userProps>;
  searchedLearnCards: Array<learnCardProps>;
  searchedTeachCards: Array<teachinCardProps>;
  showDropDown: boolean;
  dontShowSearchDropDown?: boolean;
  localUser: userProps;
  closeSearchBox: any;
}

const SearchDrawer = (props: searchDrawerProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <Section>
      <div className="icon" onClick={toggleDrawer}>
        <SearchIcon />
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="drawer"
        lockBackgroundScroll={true}
        size="80vw"
        zIndex={100}
      >
        <DrawerBody>
          <SearchBar
            placeholderText="Search for a request etc."
            updateSearch={props.searchHandler}
            showButton={false}
            onEnterFunc={props.searchNavigator}
            elem={
              props.searchedUsers.length == 0 &&
              props.searchedLearnCards.length == 0 &&
              props.searchedTeachCards.length ==
                0 ? undefined : props.localUser && props.showDropDown ? (
                props.dontShowSearchDropDown ? undefined : (
                  <NavSearchDropdown
                    searchedUsers={props.searchedUsers}
                    searchedLearnCards={props.searchedLearnCards}
                    searchedTeachCards={props.searchedTeachCards}
                    closeSearchBox={props.closeSearchBox}
                    localUserId={props.localUser._id}
                    localUserClassesEnrolled={props.localUser.classesEnrolled}
                    dropDownHeight="85vh"
                  />
                )
              ) : undefined
            }
          />
        </DrawerBody>
      </Drawer>
    </Section>
  );
};

export default SearchDrawer;

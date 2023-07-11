import React, { useRef } from "react";
import styled from "styled-components";
import { userProps } from "../../../utils/userCookie";
import { learnCardProps } from "../../../pages/requests/requests";
import { teachinCardProps } from "../../../types/teachingCardType";
import {
  topNavigator,
  useOutsideAlerter,
} from "../../../utils/helperFunctions";
import { useNavigate } from "react-router-dom";

const Section = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  border-radius: 4px;
  border: 1px solid #d5d9eb;
  box-sizing: border-box;
  padding: 1rem 0 0;
  background-color: white;
  position: absolute;
  z-index: 100;
  max-height: 50vh;
  overflow-y: auto;

  h3 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    padding: 0 1.15rem;
  }

  ul {
    list-style: none;
    /* border: 1px solid red; */
    padding-bottom: 1rem;
    border-bottom: 1px solid #d5d9eb;
    margin-bottom: 1rem;

    &:last-child {
      border-bottom: none;

      margin-bottom: 0rem;
    }
  }
`;

const UserCard = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  column-gap: 10px;
  margin-bottom: 1rem;
  padding: 0.5rem 1.15rem;
  align-items: center;

  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background-color: #d8eefe;
  }

  &:last-child {
    margin-bottom: 0;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    object-fit: cover;
  }

  div.details {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    /* border: 1px solid red; */
    /* width: 90%; */

    p {
      /* border: 1px solid red; */
      white-space: nowrap;
    }
  }

  div.user-name {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    column-gap: 8px;

    h4 {
      font-size: 1rem;
    }

    h5 {
      font-size: 0.8rem;
      color: #4a5578;
    }
  }
`;

interface searchprops {
  searchedUsers: Array<userProps>;
  searchedLearnCards: Array<learnCardProps>;
  searchedTeachCards: Array<teachinCardProps>;
  closeSearchBox: any;
  localUserId: string;
}

const NavSearchDropdown = (props: searchprops) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.closeSearchBox);

  const navigate = useNavigate();

  const userNavigationHandler = (userId: string) => {
    topNavigator();
    if (props.localUserId == userId) {
      navigate("/me");
    } else {
      navigate(`/user/${userId}`, {
        state: {
          userId: userId,
        },
      });
    }
  };

  return (
    <Section ref={wrapperRef}>
      <h3>Users</h3>
      <ul>
        {props.searchedUsers.map((user, index) => {
          return (
            <UserCard onClick={() => userNavigationHandler(user._id)}>
              <img src={user.photo} alt="user-img" />
              <div className="details">
                <div className="user-name">
                  <h4>{user.name}</h4>
                  <h5>@ {user.userName}</h5>
                </div>
                <p>{user.tagline}</p>
              </div>
            </UserCard>
          );
        })}
      </ul>
      {props.searchedLearnCards.length != 0 && (
        <>
          <h3>Learn Cards</h3>
          <ul>
            {props.searchedLearnCards.map((card, index) => {
              return <li>{card.topic}</li>;
            })}
          </ul>
        </>
      )}
      {props.searchedTeachCards.length != 0 && (
        <>
          <h3>Teach Cards</h3>
          <ul>
            {props.searchedTeachCards.map((card, index) => {
              return <li>{card.topic}</li>;
            })}
          </ul>
        </>
      )}
    </Section>
  );
};

export default NavSearchDropdown;

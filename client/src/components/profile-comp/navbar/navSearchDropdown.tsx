import React, { useRef } from "react";
import styled from "styled-components";
import { classroom, userProps } from "../../../utils/userCookie";
import { learnCardProps } from "../../../pages/requests/requests";
import { teachinCardProps } from "../../../types/teachingCardType";
import {
  navOutsideAlerter,
  topNavigator,
  useOutsideAlerter,
} from "../../../utils/helperFunctions";
import { useNavigate } from "react-router-dom";

interface styleProps {
  dropDownHeight?: string;
}

const Section = styled.div<styleProps>`
  /* border: 1px solid red; */
  width: 100%;
  border-radius: 4px;
  border: 1px solid #d5d9eb;
  box-sizing: border-box;
  padding: 1rem 0 0;
  background-color: white;
  position: absolute;
  z-index: 201;
  max-height: ${(p) => (p.dropDownHeight ? p.dropDownHeight : "50vh")};
  overflow-y: auto;

  h3 {
    z-index: 200;
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    padding: 0 1.15rem;
  }

  ul {
    /* border: 1px solid red; */
    z-index: 200;
    list-style: none;
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

const CardChip = styled.div`
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

  h3 {
    /* border: 1px solid red; */
    padding: 0;
    font-size: 17px;
    font-weight: 500;
    line-height: 1;
  }

  div {
    display: flex;
    align-items: center;
    column-gap: 4px;

    img {
      width: 24px;
      height: 24px;
      border-radius: 100%;
      object-fit: cover;
      /* border: 1px solid black; */
    }

    h4 {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

interface searchprops {
  searchedUsers: Array<userProps>;
  searchedLearnCards: Array<learnCardProps>;
  searchedTeachCards: Array<teachinCardProps>;
  closeSearchBox: any;
  localUserId: string;
  localUserClassesEnrolled: classroom[];
  dropDownHeight?: string;
  removeDrawer?: any;
}

const NavSearchDropdown = (props: searchprops) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  // useOutsideAlerter(
  //   wrapperRef,
  //   undefined,
  //   false,
  //   undefined,
  //   true,
  //   props.closeSearchBox
  // );
  navOutsideAlerter(wrapperRef, props.closeSearchBox);

  const navigate = useNavigate();

  const userNavigationHandler = (userId: string) => {
    topNavigator();
    console.log("USER NAVIGATOR");
    if (props.localUserId == userId) {
      navigate("/me");
    } else {
      navigate(`/user/${userId}`, {
        state: {
          userId: userId,
        },
      });
    }
    props.closeSearchBox();
  };

  const leanrCardOverviewNavigator = (cardId: string) => {
    topNavigator();
    navigate(`/learncard-overview/${cardId}`, {
      state: { learnCardId: cardId, backLink: "/" },
    });
    props.closeSearchBox();
  };

  const checkClassTeacher = (creatorId: string) => {
    console.log(props.localUserId);
    console.log(creatorId);

    const isTeacher = props.localUserId == creatorId;

    return isTeacher;
  };

  const checkEnrolledClass = (classId: string) => {
    const bool = props.localUserClassesEnrolled.filter((classroom) => {
      return classroom.class == classId;
    });
    return bool.length;
  };

  const teachCardNavigator = (cardId: string, creatorId: string) => {
    // console.log(checkEnrolledClass(cardId));
    if (checkClassTeacher(creatorId)) {
      navigate(`/classes/class/${cardId}`, {
        state: {
          classroomId: cardId,
          backPageLink: "/",
        },
      });
    } else if (checkEnrolledClass(cardId)) {
      navigate(`/classes/class/${cardId}`, {
        state: {
          classroomId: cardId,
          backPageLink: "/",
        },
      });
    } else {
      navigate(`/class-overviw/${cardId}`, {
        state: {
          classroomId: cardId,
          backPageLink: "/",
        },
      });
    }
    props.closeSearchBox();
  };

  return (
    <Section dropDownHeight={props.dropDownHeight}>
      {props.searchedUsers.length != 0 && (
        <>
          <h3>Users</h3>
          <ul>
            {props.searchedUsers.map((user, index) => {
              return (
                <UserCard
                  key={index}
                  onClick={() => userNavigationHandler(user._id)}
                >
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
        </>
      )}
      {props.searchedLearnCards.length != 0 && (
        <>
          <h3>Learn Cards</h3>
          <ul>
            {props.searchedLearnCards.map((card, index) => {
              return (
                <CardChip
                  key={index}
                  onClick={() => leanrCardOverviewNavigator(card._id)}
                >
                  <h3>
                    {card.topic.length > 80
                      ? card.topic.slice(0, 80) + "..."
                      : card.topic}
                  </h3>
                  <div>
                    <img src={card.createdBy.photo} alt="user-img" />
                    <h4>{card.createdBy.name}</h4>
                  </div>
                </CardChip>
              );
            })}
          </ul>
        </>
      )}
      {props.searchedTeachCards.length != 0 && (
        <>
          <h3>Teach Cards</h3>
          <ul>
            {props.searchedTeachCards.map((card, index) => {
              return (
                <CardChip
                  onClick={() =>
                    teachCardNavigator(card._id, card.createdBy._id)
                  }
                >
                  <h3>
                    {card.topic.length > 80
                      ? card.topic.slice(0, 80) + "..."
                      : card.topic}
                  </h3>
                  <div>
                    <img src={card.createdBy.photo} alt="user-img" />
                    <h4>{card.createdBy.name}</h4>
                  </div>
                </CardChip>
              );
            })}
          </ul>
        </>
      )}
    </Section>
  );
};

export default NavSearchDropdown;

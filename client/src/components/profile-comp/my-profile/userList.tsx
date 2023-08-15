import React from "react";
import { styled } from "styled-components";
import { student } from "../../../types/studentType";
import { useNavigate } from "react-router-dom";
import { topNavigator } from "../../../utils/helperFunctions";
import { userListProps } from "../../../types/userListProps";

const UserContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  padding: 1.2rem 0.8rem;
  box-sizing: border-box;
  border-bottom: 1px solid #d5d9eb;
  cursor: pointer;

  img {
    /* border: 1px solid red; */
    width: 51px;
    height: 53px;
    object-fit: cover;
    border-radius: 50%;
  }

  div.names {
    /* border: 1px solid red; */
    display: flex;
    /* flex-direction: column; */
    column-gap: 0.6rem;
    align-items: center;
  }

  h4 {
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #000000;
  }

  h5 {
    font-weight: 400;
    font-size: 15px;
    color: #000000;
  }
`;

const Section = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-weight: 500;
  }
`;

interface listProps {
  userArr: Array<userListProps>;
  localUserId: string;
}

const UserList = ({ userArr, localUserId }: listProps) => {
  const navigate = useNavigate();
  const userNavigationHandler = (userId: string) => {
    topNavigator();
    if (localUserId == userId) {
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
    <div>
      {userArr.length != 0 ? (
        userArr.map((user, index) => {
          return (
            <UserContainer
              key={index}
              onClick={() => userNavigationHandler(user._id)}
            >
              <img src={user.photo} alt="user-img" />
              <div className="user">
                <div className="names">
                  <h4>{user.name}</h4>
                  <h5>@{user.userName}</h5>
                </div>
                <p>{user.tagline}</p>
              </div>
            </UserContainer>
          );
        })
      ) : (
        <Section>
          <h2>No Users for this search</h2>
        </Section>
      )}
    </div>
  );
};

export default UserList;

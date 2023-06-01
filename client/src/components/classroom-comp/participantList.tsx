import React from "react";
import styled from "styled-components";

interface participantListProps {
  heading: string;
  listArr?: Array<listObj>;
  teacherObj?: listObj;
}

interface listObj {
  userImg: string;
  userName: string;
  name: string;
}

const Section = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;

  h3 {
    font-weight: 600;
    font-size: 26px;
    /* line-height: 41px; */
    width: 100%;
    padding-bottom: 0.3rem;
    color: #3622a5;
    border-bottom: 1px solid #3622a5;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 1rem;
  /* border: 1px solid red; */
  cursor: pointer;

  img {
    width: 51px;
    height: 53px;
    object-fit: cover;
    border-radius: 50%;
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
    font-size: 16px;
    /* line-height: 22px;  */
    /* text-align: center; */
    /* letter-spacing: 0.02em; */
    color: #000000;
  }
`;

const ParticipantList = (props: participantListProps) => {
  console.log(Array.isArray(props.listArr));

  return (
    <Section>
      <h3>{props.heading}</h3>
      <ul>
        {Array.isArray(props.listArr) ? (
          props.listArr.map((user, index) => {
            return (
              <UserContainer key={index}>
                <img src={user.userImg} alt="" />
                <div>
                  <h4>{user.name}</h4>
                  <h5>@{user.userName}</h5>
                </div>
              </UserContainer>
            );
          })
        ) : (
          <UserContainer>
            <img src={props.teacherObj?.userImg} alt="" />
            <div>
              <h4>{props.teacherObj?.name}</h4>
              <h5>@{props.teacherObj?.userName}</h5>
            </div>
          </UserContainer>
        )}
      </ul>
    </Section>
  );
};

export default ParticipantList;

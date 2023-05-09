import React from "react";
import styled from "styled-components";

import UserImg from "../../assets/userImg.png";
import ModeToggle from "./modeToggle";

const Section = styled.div`
  /* border: 1px solid red; */
  margin-left: 1rem;
  /* width: */
`;

const Header = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Heading = styled.h3`
  font-size: 26px;
  line-height: 41px;
  color: #000000;
`;

const UserContainer = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  /* align-items: center; */
  padding: 30px 28px;
  gap: 1.2rem;
  width: 100%;
  margin-top: 2rem;

  border: 1px solid #d5d9eb;
  border-radius: 32px;

  h4 {
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.02em;
    color: #000000;
  }
`;

const ImageContainer = styled.div`
  box-sizing: border-box;

  width: 84.54px;
  height: 84.54px;
  padding: 2px;
  border: 0.87156px solid #d5d9eb;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: block;
  }
`;

const UserDetails = styled.div``;

const ProfileStats = styled.div``;

const ContactInfoCont = styled.div``;

const AcademicCont = styled.div``;

const userDetails = {
  name: "Ethan Alexander",
  // img: UserImg,
  tagline:
    "B. Tech Artificial Intelligence student and part-time Web Developer",
  profileStats: {
    taught: 24,
    attended: 10,
    rating: 4.3,
    coins: 400,
  },
  contactInfo: {
    userName: "ethanalex",
    password: "234323454323",
    email: "ethanalex@gmail.com",
    phone: "9405619352",
  },
  academics: {
    course: "",
    interstedSub: [],
    strongSub: [],
    preferredLanguages: [],
  },
};

const MyProfile = () => {
  return (
    <Section>
        <Header>
      <Heading>My profile</Heading>
      <ModeToggle />
        </Header>
      <UserContainer>
        <ImageContainer>
          <img src={UserImg} alt="" />
        </ImageContainer>
        <UserDetails>
          <h4>{userDetails.name}</h4>
          <p>{userDetails.tagline}</p>
        </UserDetails>
      </UserContainer>
      <ProfileStats></ProfileStats>
      <ContactInfoCont></ContactInfoCont>
    </Section>
  );
};

export default MyProfile;

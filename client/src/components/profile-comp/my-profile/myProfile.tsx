import React from "react";
import styled from "styled-components";

import UserImg from "../../../assets/userImg.png";
import ModeToggle from "../modeToggle";
import EditBtn from "./editBtn";
import InfoWrapper from "./infoWrapper";
import ContactInfo from "./contactInfo";
import AcademicInfo from "./academicInfo";

const Section = styled.div`
  /* border: 1px solid red; */
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 24px;
  /* width: 95%; */
`;

const Header = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Heading = styled.h3`
  font-size: 26px;
  line-height: 41px;
  color: #000000;
`;

const UserContainer = styled.div`
  width: 100%;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: max-content auto 10%;
  padding: 30px 28px;
  padding-right: 24px;
  gap: 1.2rem;
  margin-top: 1rem;

  border: 1px solid #d5d9eb;
  border-radius: 32px;
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

const UserDetails = styled.div`
  /* border: 2px solid red; */
  width: 100%;

  h4 {
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.02em;
    color: #000000;
    margin-bottom: 0.2rem;
  }

  p {
    /* border: 2px solid red; */
    width: 90%;
    line-height: 1.2;

    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0.02em;
    color: #697586;
  }
`;

const ProfileStats = styled.div``;


const userDetails = {
  name: "Ethan Alexander",
  // img: UserImg,
  tagline:
    "B. Tech Artificial Intelligence student and part-time Web Developer B. Tech Artificial Intelligence student and part-time Web Developer",
  profileStats: {
    taught: 24,
    attended: 10,
    rating: 4.3,
    coins: 400,
  },
  contactInfo: {
    username: "ethanalex",
    email: "ethanalex@gmail.com",
    password: "qwerty",
    phone: "9405619352",
  },
  academics: {
    course: "Electronic and Communication Engineering",
    interstedSub: ["Finance", "Web Dev", "Trading", "Quant"],
    strongSub: ["Web Dev", "Javascript", "Frontend", "AWS"],
    preferredLanguages: ["English", "Hindi"],
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
        <EditBtn />
      </UserContainer>
      <ProfileStats></ProfileStats>
      <ContactInfo contactInfo={userDetails.contactInfo} />
      <AcademicInfo academics={userDetails.academics} />
    </Section>
  );
};

export default MyProfile;

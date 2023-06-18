import { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/general-components/navbar";
import Intro from "../../components/home-comp/intro";
import HorizontalNavigator from "../../components/general-components/horizontalNavigator";
import Footer from "../../components/general-components/footer/footer";
import { UserCookie } from "../../utils/userCookie";
import AllClasses from "../../components/classroom-comp/classpage-comp/allClasses";
import UpcomingClasses from "../../components/classroom-comp/classpage-comp/upcomingClasses";
import CompletedClasses from "../../components/classroom-comp/classpage-comp/completedClasses";

const Section = styled.div`
  /* display: grid; */
  /* grid-template-columns: auto auto auto; */
  /* gap: 20px; */
  padding: 0 6.3vw;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const ElementWrapper = styled.div`
  margin: 2rem 0 0;
  /* border: 2px solid green; */
`;

export interface student {
  _id: string;
  name: string;
  photo: string;
  userName: string;
}

export interface teachCardProps {
  announcements: string[];
  callLink: string;
  cardBanner: string;
  classStartsAt: string;
  classEndsAt: string;
  createdBy: {
    name: string;
    photo: string;
    _id: string;
    userName: string;
  };
  date: string;
  description: string;
  expectations: string[];
  interestedStudents: string[];
  isLearningCardReferred: boolean;
  preferredLanguage: string;
  price: number;
  programme: string;
  standard: string;
  studentsEnrolled: student[];
  subject: string;
  tags: string[];
  topic: string;
  _id: string;
}

const Classrooms = () => {
  const [userToken, setUserToken] = useState<string>("");

  const { fetchLocalUserToken } = UserCookie();

  useEffect(() => {
    fetchLocalUserToken().then((token) => {
      setUserToken(token);
    });
  }, []);

  const [activeLink, setActiveLink] = useState("all classes");
  const [element, setElement] = useState<ReactElement>(
    <AllClasses userToken={userToken} />
  );

  useEffect(() => {
    if (userToken) {
      if (activeLink == "all classes") {
        setElement(<AllClasses userToken={userToken} />);
      } else if (activeLink == "upcoming") {
        setElement(<UpcomingClasses userToken={userToken} />);
      } else if (activeLink == "completed") {
        setElement(<CompletedClasses userToken={userToken} />);
      }
    }
  }, [activeLink]);

  const navigationHandler = (navigateTo: string) => {
    setActiveLink(navigateTo);
  };

  const labels = ["all classes", "upcoming", "completed"];

  return (
    <>
      <Navbar />
      <Section>
        <Intro />
        <HorizontalNavigator
          activeLink={activeLink}
          labelArr={labels}
          navigationHandler={navigationHandler}
        />
        <ElementWrapper>{element}</ElementWrapper>
        <Footer />
      </Section>
    </>
  );
};

export default Classrooms;

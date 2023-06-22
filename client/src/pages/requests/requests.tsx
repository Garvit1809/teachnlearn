import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/general-components/navbar";
import FooterWrapper from "../../components/general-components/footer/footerWrapper";
import Intro from "../../components/home-comp/intro";
import LearnCard from "../../components/request-comp/learnCard";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import axios from "axios";

const Section = styled.div`
  padding: 0 6.3vw;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  /* margin-top: 4rem; */
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2.5rem;
`;

export interface learnCardProps {
  _id: string;
  createdBy: {
    name: string;
    photo: string;
    _id: string;
  };
  subject: string;
  topic: string;
  programme: string;
  standard: string;
  dueDate: string;
  interestedStudents: string[];
  preferredLanguage: string;
  description: string;
  expectations: string[];
  tags: string[];
}

const Requests = () => {
  const [learnCards, setLearnCards] = useState<Array<learnCardProps>>();

  const fetchLearnCards = async () => {
    await axios.get(`${BASE_URL}${apiVersion}/learn`).then(({ data }) => {
      console.log(data.data.data);
      const learnCardData = data.data.data;
      setLearnCards(learnCardData);
    });
  };

  useEffect(() => {
    fetchLearnCards();
  }, []);

  return (
    <>
      <Navbar />
      <Section>
        <Intro role="learn" />
        {learnCards ? (
          <CardGrid>
            {learnCards.map((card, index) => {
              return <LearnCard key={index} {...card} />;
            })}
          </CardGrid>
        ) : null}
      </Section>
      <FooterWrapper />
    </>
  );
};

export default Requests;

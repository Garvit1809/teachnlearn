import React from "react";
import styled from "styled-components";
import { Arrow } from "../general-components/svg";

const Section = styled.div`
  border: 1px solid red;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Heading = styled.h3`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #000000;
`;

const SeeAll = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 16px;
  gap: 12px;

  /* width: 110px; */
  height: 41px;

  background: #eeeeee;
  border-radius: 46px;

  span {
    margin: 0;
    padding: 0;
    /* border: 1px solid red; */
  }
`;

const CardGrid = styled.div``;

const cardDetails = [
  {
    category: "Web Dev",
    title: "Get started in Web Development and get selected in MH Fellowsip",
    author: 'Garvit Varshney',
    interested: 22,
    coins: 220
  },
  {
    category: "Web Dev",
    title: "Get started in Web Development and get selected in MH Fellowsip",
    author: 'Garvit Varshney',
    interested: 22,
    coins: 220
  },
  {
    category: "Web Dev",
    title: "Get started in Web Development and get selected in MH Fellowsip",
    author: 'Garvit Varshney',
    interested: 22,
    coins: 220
  },
  {
    category: "Web Dev",
    title: "Get started in Web Development and get selected in MH Fellowsip",
    author: 'Garvit Varshney',
    interested: 22,
    coins: 220
  },
];

const RecommendedClasses = () => {
  return (
    <Section>
      <Header>
        <Heading>Classes recommended to you!</Heading>
        <SeeAll>
          <span>See All</span>
          <Arrow strokeColor="#384250" />
        </SeeAll>
      </Header>
      <CardGrid>
        {
            cardDetails.map((card,index) => {
                return (
                    // <RecommendedClasses {...card} />
                    <span>adr</span>
                )
            })
        }
      </CardGrid>
    </Section>
  );
};

export default RecommendedClasses;

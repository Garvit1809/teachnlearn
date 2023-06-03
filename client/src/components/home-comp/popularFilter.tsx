import React from "react";
import styled from "styled-components";
import { Arrow, BrowseIcon } from "../general-components/svg";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
`;

const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 28px;
  gap: 10px;

  background: #332ad5;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  width: 100%;
`;

const CategoriesContainer = styled.div`
  /* border: 1px solid red; */
  width: 100%;
`;

const Category = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 28px;
  gap: 10px;
  background: #f6f6f6;
  border-bottom: 1px solid #d0d0d0;
  width: 100%;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #4d5761;

  /* svg{
    width: 20px;
    height: 20px;
  } */
`;

const CATEGORYDATA = [
  {
    category: "Computer Science",
  },
  {
    category: "High School Subjects",
  },
  {
    category: "Engineering Subjects",
  },
  {
    category: "JEE & NEET",
  },
  {
    category: "Self Development",
  },
  {
    category: "Web Development",
  },
  {
    category: "Other Subjects",
  },
];

const PopularFilter = () => {
  return (
    <Section>
      <Header>
        <BrowseIcon />
        <span>Browse Categories</span>
      </Header>
      <CategoriesContainer>
        {CATEGORYDATA.map((category, index) => {
          return (
            <Category>
              <span>{category.category}</span>
              <Arrow strokeColor="#4D5761" />
            </Category>
          );
        })}
      </CategoriesContainer>
    </Section>
  );
};

export default PopularFilter;

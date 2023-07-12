import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 28px;
  gap: 18px;
  border: 1px solid #d5d9eb;
  border-radius: 32px;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  /* border: 1px solid red; */
  width: 100%;
  justify-content: space-between;

  h4 {
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.02em;
    color: #000000;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  row-gap: 1rem;
  column-gap: 1.5rem;
  width: 100%;

  div {
    /* border: 1px solid red; */
    h4 {
      font-size: 16px;
      line-height: 25px;
      letter-spacing: 0.02em;
      color: #4b5565;
      text-transform: capitalize;
      margin-bottom: 0.2rem;
    }
  }
  span {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: 0.02em;
    color: #000000;
  }
`;

const Tags = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 8px;
  /* align-items: center; */
`;

const Tag = styled.div`
  /* border: 1px solid #697586; */
  border: 1px solid black;
  padding: 10px;
  border-radius: 12px;
`;

interface acadProps {
  course: string;
  strongSubjects: string[];
  interstedSubjects: Array<string>;
  preferredLanguages: string[];
}

const AcademicContainer = (props: acadProps) => {
  return (
    <Section>
      <Header>
        <h4>Academic Information</h4>
      </Header>
      <Wrapper>
        <div>
          <h4>Course</h4>
          <span>{props.course}</span>
        </div>
        <div>
          <h4>Strong Subjects</h4>
          <Tags>
            {props.strongSubjects?.map((sub, index) => {
              return <Tag key={index}>{sub}</Tag>;
            })}
          </Tags>
        </div>
        <div>
          <h4>Interested Subjects</h4>
          <Tags>
            {props.interstedSubjects?.map((sub, index) => {
              return <Tag key={index}>{sub}</Tag>;
            })}
          </Tags>
        </div>
        <div>
          <h4>Preferred Languages</h4>
          <Tags>
            {props.preferredLanguages?.map((sub, index) => {
              return <Tag key={index}>{sub}</Tag>;
            })}
          </Tags>
        </div>
      </Wrapper>
    </Section>
  );
};

export default AcademicContainer;

import React from "react";
import styled from "styled-components";

const Section = styled.div`
  p {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #4a5578;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 22px;
    opacity: 0.8;
    margin-bottom: 0.8rem;
  }

  ul {
    padding-left: 1rem;
    li {
      font-weight: 500;
      color: #4a5578;
      font-size: 18px;
      line-height: 26px;
      margin-bottom: 0.5rem;
    }
  }
`;

interface detailProps {
  desciption: string;
  expectations: string[];
}

const DetailsContainer = (props: detailProps) => {
  return (
    <Section>
      <p>
        {props.desciption}
      </p>
      <h3>After this Class, students would be able to :-</h3>
      <ul>
        {
          props.expectations.map((expectation,index) => {
            return (
              <li key={index} >
                {expectation}
              </li>
            )
          })
        }
      </ul>
    </Section>
  );
};

export default DetailsContainer;

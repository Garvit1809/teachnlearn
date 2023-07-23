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
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    /* color: #4a5578; */
    margin-bottom: 0.5rem;
  }
`;

interface detailProps {
  desciption: string;
  programme: string;
  standard: string;
}

const DetailsContainer = (props: detailProps) => {
  return (
    <Section>
      <h3>
        For :- {props.programme} | {props.standard}
      </h3>
      <p>{props.desciption}</p>
    </Section>
  );
};

export default DetailsContainer;

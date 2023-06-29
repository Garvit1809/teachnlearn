import React from "react";
import styled from "styled-components";

const Section = styled.div`
  /* border: 1px solid red; */

  display: flex;
  align-items: center;
  justify-content: center;
  span {
    background-color: #3da9fc;
    padding: 12px 18px;
    border-radius: 4px;

    color: #fff;
    font-size: 1rem;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.02rem;
    cursor: pointer;
    /* text-transform: uppercase; */
  }
`;

interface loadMoreProps {
  onClick: any;
}

const LoadMore = (props: loadMoreProps) => {
  return (
    <Section>
      <span onClick={props.onClick}>Load More</span>
    </Section>
  );
};

export default LoadMore;

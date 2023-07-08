import React from "react";
import styled from "styled-components";
import { TailSpin } from "react-loader-spinner";

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
  loaderLoading: boolean;
}

const LoadMore = (props: loadMoreProps) => {
  return (
    <Section>
      <span onClick={props.onClick}>
        {props.loaderLoading ? (
          <TailSpin
            height="30"
            width="30"
            color="#ffffff"
            ariaLabel="tail-spin-loading"
            radius="1"
          />
        ) : (
          "Load More"
        )}
      </span>
    </Section>
  );
};

export default LoadMore;

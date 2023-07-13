import React from "react";
import styled from "styled-components";
import { TailSpin } from "react-loader-spinner";

const Section = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface loaderProps {
  loaderHeight?: string;
  loaderWidth?: string;
  color ?: string;
}

const Loader = (props: loaderProps) => {
  return (
    <Section>
      <TailSpin
        height={props.loaderHeight ? props.loaderHeight : "60"}
        width={props.loaderWidth ? props.loaderWidth : "60"}
        color={props.color ? props.color : "#094067"}
        ariaLabel="tail-spin-loading"
        radius="1"
        visible={true}
      />
    </Section>
  );
};

export default Loader;

import React from "react";
import styled from "styled-components";
import zoro from "../../assets/zoro.jpg";

interface styleProps {
    imgBorder?: string,
    textColor?: string
}

const Section = styled.div<styleProps>`
  display: flex;
  align-items: center;
  /* border: 1px solid red; */

  img {
    display: block;
    width: 28px;
    height: 28px;
    border: ${p => `1px solid ${p.imgBorder}`};
    border-radius: 50%;
    object-fit: contain;
    margin-right: 0.4rem;
  }

  span {
    font-weight: 400;
    font-size: 18px;
    /* line-height: 25px; */
    color: ${p => p.textColor};
  }
`;

interface userchipProps {
    name: string
    imgBorder?: string,
    textColor?: string
}

const UserChip = ({name, imgBorder, textColor}: userchipProps) => {
  return (
    <Section imgBorder={imgBorder} textColor={textColor} >
      <img src={zoro} alt="user-img" />
      <span>{name}</span>
    </Section>
  );
};

export default UserChip;

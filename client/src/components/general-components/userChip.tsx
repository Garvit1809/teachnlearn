import React from "react";
import styled from "styled-components";
import zoro from "../../assets/zoro.jpg";

interface styleProps {
  imgBorder?: string;
  textColor?: string;
  imgSize?: string;
  textSize?: string;
}

const Section = styled.div<styleProps>`
  display: flex;
  align-items: center;
  /* border: 1px solid red; */

  img {
    display: block;
    width: ${(p) => p.imgSize || "28px"};
    height: ${(p) => p.imgSize || "28px"};
    border: ${(p) => `1px solid ${p.imgBorder}`};
    border-radius: 50%;
    object-fit: cover;
    margin-right: 0.4rem;
  }

  span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: ${(p) => p.textSize || "20px"};
    line-height: 27px;
    color: ${(p) => p.textColor};
  }
`;

interface userchipProps {
  name: string;
  photo?: string;
  imgBorder?: string;
  textColor?: string;
  imgSize?: string;
  textSize?: string;
}

const UserChip = ({
  name,
  photo,
  imgBorder,
  textColor,
  imgSize,
  textSize,
}: userchipProps) => {
  return (
    <Section
      imgBorder={imgBorder}
      textColor={textColor}
      imgSize={imgSize}
      textSize={textSize}
    >
      <img src={photo ? photo : zoro} alt="user-img" />
      <span>{name}</span>
    </Section>
  );
};

export default UserChip;

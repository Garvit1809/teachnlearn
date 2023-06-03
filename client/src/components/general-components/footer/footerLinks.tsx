import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  h4 {
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #344054;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;

    li {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 30px;
      color: #000000;
      margin-bottom: 0.7rem;
      cursor: pointer;
    }
  }
`;

interface footerLinkProps {
  heading: string;
  listData: Array<arrData>;
}

interface arrData {
  title: string;
  link: string;
}

const FooterLinks = (props: footerLinkProps) => {
  return (
    <Section>
      <h4>{props.heading}</h4>
      <ul>
        {props.listData.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.link}>
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default FooterLinks;

import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { topNavigator } from "../../../utils/helperFunctions";

const Section = styled.div`
  /* border: 1px solid red; */

  @media only screen and (max-width: 1000px) {
    /* ul {
      li {
        font-size: 10px;
      }
    } */
  }

  h4 {
    font-weight: 600;
    font-size: 17px;
    line-height: 25px;
    color: #344054;
    color: #d8eefe;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;

    @media only screen and (max-width: 1000px) {
      /* border: 1px solid red; */
      li {
        span {
          font-size: 20px;
        }
      }
    }

    li {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 30px;
      color: #000000;
      color: #ffffff;
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
  const navigate = useNavigate();
  const navigationHandler = (link: string) => {
    topNavigator();
    navigate(link);
  };

  return (
    <Section>
      <h4>{props.heading}</h4>
      <ul>
        {props.listData.map((item, index) => {
          return (
            <li key={index} onClick={() => navigationHandler(item.link)}>
              {/* <Link to={item.link}> */}
              <span>{item.title}</span>
              {/* </Link> */}
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default FooterLinks;

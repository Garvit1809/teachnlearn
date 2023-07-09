import React from "react";
import styled from "styled-components";
import TNLLogo from "../../../assets/TNL-logo.png";
import { Link } from "react-router-dom";
import FooterLinks from "./footerLinks";
import { Facebook, Instagram, LinkedIn, Twitter, Youtube } from "../svg";

const Section = styled.div`
  /* border-top: 1px solid #7d89b0; */
  padding: 40px 0px 20px;
  font-family: "Nunito";
  font-style: normal;
  margin-top: 4rem;
  padding: 3.75rem 6.25rem 1.5rem;
  background-color: #094067;
`;

const Links = styled.div`
  display: grid;
  grid-template-columns: 2.2fr 1.2fr 1.2fr 1fr;
  border-bottom: 1px solid #d0d5dd;
  padding-bottom: 2.5rem;
`;

const LogoContainer = styled.div`
  img {
    width: 200px;
  }
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px 10px;

  span {
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: #344054;
    color: #d8eefe;
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1.4rem;

  svg {
    cursor: pointer;
  }
`;

const GetApp = styled.div`
  h5 {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
    color: #d8eefe;
  }
`;

const companyData = [
  {
    title: "About Us",
    link: "/",
  },
  {
    title: "Contact",
    link: "/",
  },
  {
    title: "Support",
    link: "/",
  },
  {
    title: "Press & News",
    link: "/",
  },
];

const legalData = [
  {
    title: "Terms",
    link: "/",
  },
  {
    title: "Privacy",
    link: "/",
  },
  {
    title: "Cookies",
    link: "/",
  },
  {
    title: "Licenses",
    link: "/",
  },
];

const socialData = [
  {
    social: <Twitter />,
    link: "https://twitter.com/Teach_n_Learn22",
  },
  {
    social: <Facebook />,
    link: "https://www.facebook.com/people/Teach-and-Learn/100091595265820/",
  },
  {
    social: <Instagram />,
    link: "https://www.instagram.com/teach.nlearn/",
  },
  {
    social: <Youtube />,
    link: "https://www.youtube.com/@TeachandLearnApp",
  },
];

const Footer = () => {
  return (
    <Section>
      <Links>
        <LogoContainer>
          <img src={TNLLogo} alt="" />
        </LogoContainer>
        <div>
          <FooterLinks heading="Company" listData={companyData} />
        </div>
        <div>
          <FooterLinks heading="Legal" listData={legalData} />
        </div>
        <GetApp>
          <h5>Get the app</h5>
        </GetApp>
      </Links>
      <Copyright>
        <span>&copy; Copyright 2023, All Rights Reserved</span>
        <Socials>
          {socialData.map((social, index) => {
            return (
              <Link to={social.link} target="_blank">
                {social.social}
              </Link>
            );
          })}
        </Socials>
      </Copyright>
    </Section>
  );
};

export default Footer;

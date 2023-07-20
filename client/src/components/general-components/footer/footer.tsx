import React from "react";
import styled from "styled-components";
import TNLLogo from "../../../assets/tnl-logo.png";
import { Link, useNavigate } from "react-router-dom";
import FooterLinks from "./footerLinks";
import { Facebook, Instagram, Twitter, Youtube } from "../svg";
import GetAppImg from "../../../assets/GetApp.png";
import { topNavigator } from "../../../utils/helperFunctions";

const Section = styled.div`
  /* border-top: 1px solid #7d89b0; */
  padding: 40px 0px 20px;
  width: 100%;
  font-family: "Nunito";
  font-style: normal;
  margin-top: 4rem;
  padding: 3.75rem 6.25rem 1.5rem;
  background-color: #094067;
  box-sizing: border-box;

  @media only screen and (max-width: 1100px) {
    /* background-color: lightblue; */
    padding: 3.75rem 4.25rem 1.5rem;
  }
`;

const Links = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1.4fr 1fr;
  border-bottom: 1px solid #d0d5dd;
  padding-bottom: 2.5rem;
  align-items: flex-start;

  @media only screen and (max-width: 1000px) {
    /* background-color: lightblue; */
    grid-template-columns: 1.8fr 1.2fr 1.2fr 1fr;
  }
`;

const LogoContainer = styled.div`
  cursor: pointer;
  /* border: 1px solid red; */
  img {
    width: 200px;

    @media only screen and (max-width: 1000px) {
      width: 180px;
    }
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
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;

  img {
    width: 120px;
    height: 80px;
    object-fit: contain;
    display: block;
    cursor: pointer;
  }

  h5 {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #d8eefe;
    margin-bottom: 1rem;
  }
`;

const companyData = [
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const legalData = [
  {
    title: "Terms And Privacy",
    link: "/terms-and-privacy",
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
  const navigate = useNavigate();

  const navgationhandler = (link: string) => {
    topNavigator();
    navigate(link);
  };

  return (
    <Section>
      <Links>
        <LogoContainer onClick={() => navgationhandler("/")}>
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
          <img
            src={GetAppImg}
            alt="app-link"
            onClick={() => navgationhandler("/app-coming-soon")}
          />
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

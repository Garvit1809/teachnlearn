import React from "react";
import styled from "styled-components";
import TNLLogo from "../../../assets/tnl-logo.png";
import { Link, useNavigate } from "react-router-dom";
import FooterLinks from "./footerLinks";
import { Facebook, Instagram, Twitter, Youtube } from "../svg";
import { topNavigator } from "../../../utils/helperFunctions";
import PlayStore from "../../../assets/getAppOnPlayStore.png";
import AppleStore from "../../../assets/getOnApple.png";

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
    padding: 3.75rem 4.25rem 1.5rem;
  }
  @media only screen and (max-width: 500px) {
    padding: 3.75rem 2.25rem 1.5rem;
  }
`;

const Links = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 2.4fr 1fr;
  border-bottom: 1px solid #d0d5dd;
  padding-bottom: 2.5rem;
  align-items: flex-start;

  div.lists {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    /* border: 1px solid red; */
  }

  @media only screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    div.lists {
      /* border: 1px solid red; */
      display: flex;
      width: 100%;
      align-items: flex-start;
      justify-content: flex-start;

      div {
        width: 50%;
      }
    }
  }
`;

const LogoContainer = styled.div`
  /* border: 1px solid red; */
  cursor: pointer;
  img {
    width: 200px;

    @media only screen and (max-width: 1000px) {
      width: 180px;
    }
  }
`;

const GetApp = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;

  img {
    /* border: 1px solid red; */
    width: 150px;
    height: 60px;
    object-fit: contain;
    display: block;
    cursor: pointer;
  }

  h5 {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #d8eefe;
    margin-bottom: 0.8rem;
  }

  @media only screen and (max-width: 750px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    column-gap: 1rem;
    /* justify-content: space-between; */

    h5 {
      /* border: 1px solid red; */
      line-height: 1;
      margin-bottom: 0;
      margin-right: 1rem;
    }

    div {
      display: flex;
      column-gap: 1rem;
    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;

    h5 {
      margin-bottom: 0.8rem;
    }
  }

  @media only screen and (max-width: 400px) {
    img {
      width: 120px;
      height: 50px;
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
    color: #d8eefe;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1.4rem;
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
        <div className="lists">
          <div>
            <FooterLinks heading="Company" listData={companyData} />
          </div>
          <div>
            <FooterLinks heading="Legal" listData={legalData} />
          </div>
        </div>
        <GetApp>
          <h5>Get the app</h5>
          <div>
            <img
              src={PlayStore}
              alt="app-link"
              onClick={() => navgationhandler("/app-coming-soon")}
            />
            <img
              src={AppleStore}
              alt="app-link"
              onClick={() => navgationhandler("/app-coming-soon")}
            />
          </div>
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

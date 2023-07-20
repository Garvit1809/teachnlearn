import React from "react";
import Navbar from "../../components/general-components/navbar";
import Footer from "../../components/general-components/footer/footer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Arrow, Copy } from "../../components/general-components/svg";
import { ToastContainer, toast } from "react-toastify";
import LandingpageNav from "../../components/profile-comp/landingpageNav";

const Section = styled.div`
  /* border: 1px solid red; */
  padding: 4rem 6.3vw 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 70%;

  h2 {
    font-size: 2.8rem;
    font-weight: 500;
    border-bottom: 2px solid black;
    width: fit-content;
    line-height: 1;
  }
`;

const LinkContainer = styled.div`
  /* border: 1px solid red; */
  margin-left: 1rem;
  width: 100%;
  display: grid;
  /* display: flex; */
  /* align-items: center; */
  grid-template-columns: 1fr 4fr;

  span.title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #094067;
  }

  span.link {
    font-size: 1.1rem;
    font-weight: 500;
    text-decoration: underline;
    /* cursor: pointer; */
  }

  div {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    cursor: pointer;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 1rem;
    }

    div.copy {
      /* border: 1px solid red; */
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 1rem;
    }
  }
`;

const contactData = [
  {
    title: "Email",
    link: "admin@teachandlearn.app",
  },
  {
    title: "Twitter",
    link: "https://twitter.com/Teach_n_Learn22",
  },
  {
    title: "Facebook",
    link: "https://www.facebook.com/people/Teach-and-Learn/100091595265820/",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/teach.nlearn/",
  },
  {
    title: "Youtube",
    link: "https://www.youtube.com/@TeachandLearnApp",
  },
];

const Contact = () => {
  const toastOptions = {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
  };

  const copyMailHandler = (link: string) => {
    navigator.clipboard.writeText(link);
    toast.success("Email copied to clipboard", toastOptions);
  };

  return (
    <>
      <LandingpageNav />
      <Navbar />
      <Section>
        <h2>Contact us through</h2>
        {contactData.map((data, index) => {
          return (
            <LinkContainer>
              <span className="title">{data.title}</span>
              <div>
                {data.title.toLowerCase() != "email" ? (
                  <Link to={data.link} target="_blank">
                    <span className="link">{data.link}</span>
                    <Arrow strokeColor="#094067" />
                  </Link>
                ) : (
                  <div
                    className="copy"
                    onClick={() => copyMailHandler(data.link)}
                  >
                    <span className="link">{data.link}</span>
                    <Copy />
                  </div>
                )}
              </div>
            </LinkContainer>
          );
        })}
      </Section>
      <Footer />
      <ToastContainer theme="dark" />
    </>
  );
};

export default Contact;

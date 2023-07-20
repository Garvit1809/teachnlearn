import React from "react";
import Navbar from "../../components/general-components/navbar";
import Footer from "../../components/general-components/footer/footer";
import styled from "styled-components";
import LandingpageNav from "../../components/profile-comp/landingpageNav";

const Section = styled.div`
  padding: 4rem 6.3vw 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  font-size: 1.2rem;

  header {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    h2 {
      font-size: 2.5rem;
      font-weight: 600;
      text-decoration: underline;
    }
  }

  footer {
    span {
      color: #094067;
      font-weight: 700;
      text-decoration: underline;
    }
  }
`;

const AgrrementPoints = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  h3 {
    font-size: 2rem;
    font-weight: 500;
    text-decoration: underline;
  }

  ol {
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
    row-gap: 0.6rem;
  }
`;

const TermsAndPolicyData = [
  {
    heading: "User Conduct",
    points: [
      "You agree to use the Platform in compliance with applicable laws and regulations.",
      "You will not post, transmit, or share any content that is unlawful, harmful, threatening, abusive, defamatory, or otherwise objectionable.",
      "You will not engage in any activity that interferes with or disrupts the functioning of the Platform or its users.",
    ],
  },
  {
    heading: "Intellectual Property",
    points: [
      "All intellectual property rights in the Platform and its content belong to us or our licensors.",
      "You may not reproduce, modify, distribute, or create derivative works of any content on the Platform without our prior written consent.",
    ],
  },
  {
    heading: "Privacy",
    points: [
      "We respect your privacy and handle your personal information in accordance with our Privacy Policy",
      "By using the Platform, you consent to the collection, use, and disclosure of your personal information as described in our Privacy Policy.",
    ],
  },
  {
    heading: "Third-Party Links",
    points: [
      "The Platform may contain links to third-party websites or services that are not owned or controlled by us.",
      "We are not responsible for the content, privacy policies, or practices of any third-party websites or services. You access them at your own risk.",
    ],
  },
  {
    heading: "Termination",
    points: [
      "We reserve the right to suspend or terminate your access to the Platform at any time, with or without cause, and without prior notice.",
    ],
  },
  {
    heading: "Disclaimer of Warranties",
    points: [
      `The Platform is provided on an "as is" and "as available" basis without any warranties or representations, express or implied.`,
      " We do not guarantee the accuracy, reliability, or completeness of any content on the Platform",
    ],
  },
  {
    heading: "Limitation of Liability",
    points: [
      "To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use of the Platform.",
    ],
  },
  {
    heading: "Governing Law",
    points: [
      "This Agreement shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.",
    ],
  },
  {
    heading: "Modification of Terms",
    points: [
      "We reserve the right to modify or update this Agreement at any time. Your continued use of the Platform after any changes constitutes your acceptance of the modified terms.",
    ],
  },
  {
    heading: "Entire Agreement",
    points: [
      "This Agreement constitutes the entire agreement between you and us regarding the use of the Platform, superseding any prior agreements or understandings.",
    ],
  },
];

const Terms = () => {
  return (
    <>
      <LandingpageNav />
      <Navbar />
      <Section>
        <header>
          <h2>Terms and Privacy Policy</h2>
          <p>
            These Terms and Privacy Policy ("Agreement") govern your use of our
            site ("Platform"). Please read this Agreement carefully before
            accessing or using the Platform. By accessing or using the Platform,
            you agree to be bound by this Agreement. If you do not agree to the
            terms of this Agreement, you may not access or use the Platform
          </p>
        </header>
        {TermsAndPolicyData.map((data, index) => {
          return (
            <AgrrementPoints>
              <h3>{data.heading}</h3>
              <ol type="a">
                {data.points.map((data, index) => {
                  return <li>{data}</li>;
                })}
              </ol>
            </AgrrementPoints>
          );
        })}
        <footer>
          If you have any questions or concerns regarding this Agreement, please
          contact us at <span>admin@teachandlearn.app.</span>
        </footer>
      </Section>
      <Footer />
    </>
  );
};

export default Terms;

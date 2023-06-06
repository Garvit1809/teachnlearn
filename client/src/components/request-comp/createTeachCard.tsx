import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../general-components/navbar";
import Footer from "../general-components/footer/footer";
import FooterWrapper from "../general-components/footer/footerWrapper";
import BackBtn from "./backBtn";
import FormField from "./formField";
import Inputholder from "../general-components/input/inputholder";
import Textarea from "../general-components/input/textarea";

const Section = styled.div`
  border: 1px solid red;

  border: 1px solid #d5d9eb;
  border-radius: 26px;
  box-sizing: border-box;
  padding: 48px 64px;
  width: 80%;
  margin: 2.5rem auto;
  display: flex;
  flex-direction: column;
  /* gap: 20px; */

  h2 {
    font-family: "Nunito";
    font-style: normal;
    margin-bottom: 3rem;
  }

  form {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    margin-bottom: 3.5rem;

    input#date {
      border: 1px solid #d5d9eb;
      padding: 15px 10px;
      box-sizing: content-box;
      font-family: "Nunito";
      font-size: 16px;
      font-weight: 400;
      outline: none;
      color: #564c4d;
      border-radius: 8px;
    }
  }
`;

interface teachCardDetails {
  subject: string;
  topic: string;
  educationLevel: string;
  standard: string;
  preferredLanguage: string;
  date: string;
  description: string;
  expectation: string;
  expectations: string[];
  tag: string;
  tags: string[];
  price: number;
  startingTime: string;
  endingTime: string;
}

const initialData: teachCardDetails = {
  subject: "",
  topic: "",
  educationLevel: "",
  standard: "",
  preferredLanguage: "",
  date: "",
  description: "",
  expectation: "",
  expectations: [],
  tag: "",
  tags: [],
  price: 0,
  startingTime: "",
  endingTime: "",
};

const CreateTeachCard = () => {
  const [teachCard, setTeachCard] = useState<teachCardDetails>(initialData);

  function updateFields(fields: Partial<teachCardDetails>) {
    setTeachCard((prev) => {
      return { ...prev, ...fields };
    });
  }

  return (
    <>
      <Navbar />
      <Section>
        <BackBtn />
        <h2>Let's get started with your Teach Card</h2>
        <form>
          <FormField
            elem={
              <Inputholder
                type="text"
                label="Subject"
                value={teachCard.subject}
                name="subject"
                updateFields={updateFields}
              />
            }
            inputDesc="Pick a Subject"
          />
          <FormField
            elem={
              <Inputholder
                type="text"
                label="Topic"
                value={teachCard.topic}
                name="topic"
                updateFields={updateFields}
              />
            }
            inputDesc="Specify the topic for the card"
          />
          <FormField
            elem={
              <Inputholder
                type="text"
                label="Education Level"
                value={teachCard.educationLevel}
                name="educationLevel"
                updateFields={updateFields}
              />
            }
            inputDesc="Specify Education Level for the lesson"
          />
          <FormField
            elem={
              <Inputholder
                type="text"
                label="Standard"
                value={teachCard.standard}
                name="standard"
                updateFields={updateFields}
              />
            }
            inputDesc="Specify the Standard for the lesson"
          />
          <FormField
            elem={
              <Inputholder
                type="text"
                label="Preferred Language"
                value={teachCard.preferredLanguage}
                name="preferredLanguage"
                updateFields={updateFields}
              />
            }
            inputDesc="Language that you prefer"
          />
          <FormField
            elem={
              <Inputholder
                type="number"
                label="Price"
                value={teachCard.price}
                name="price"
                updateFields={updateFields}
              />
            }
            inputDesc="Language that you prefer"
          />
          <FormField
            elem={<input type="date" name="" id="date" />}
            inputDesc="Specify due date for the lesson"
          />
          <input type="time" name="" id="" />
          <FormField
            elem={
              <Textarea
                label="Description"
                name="description"
                updateFields={updateFields}
                value={teachCard.description}
              />
            }
            inputDesc="Describe briefly what you expect from the teacher"
          />
          <FormField
            elem={
              <Textarea
                label="Expectations"
                name="expectation"
                updateFields={updateFields}
                value={teachCard.expectation}
              />
            }
            inputDesc="Your expectations after completing the class"
          />
          <FormField
            elem={
              <Inputholder
                type="text"
                label="Add Tag"
                name="tag"
                updateFields={updateFields}
                value={teachCard.tag}
              />
            }
            inputDesc="You can add tags in your learn card"
          />
        </form>
      </Section>
      <FooterWrapper />
    </>
  );
};

export default CreateTeachCard;

import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../general-components/navbar";
import Inputholder from "../general-components/input/inputholder";
import BackBtn from "./backBtn";
import Textarea from "../general-components/input/textarea";
import UploadImage from "../general-components/input/uploadImage";

const Section = styled.div`
  border: 1px solid red;

  /* border: 1px solid #d5d9eb; */
  /* border-radius: 32px; */
  padding: 20px;
  /* width: 80%; */
  margin: 2.5rem auto;

  h2 {
    font-family: "Nunito";
    font-style: normal;
  }
`;

interface learnCardDetails {
  subject: string;
  topic: string;
  educationLevel: string;
  standard: string;
  preferredLanguage: string;
  description: string;
  expectation: string;
  expectations: string[];
  tags: string[];
  dueDate: string;
}

const initialData: learnCardDetails = {
  subject: "",
  topic: "",
  educationLevel: "",
  standard: "",
  preferredLanguage: "",
  description: "",
  expectation: "",
  expectations: [],
  tags: [],
  dueDate: "",
};

const CreateLearnCard = () => {
  const [learnCard, setLearnCard] = useState<learnCardDetails>(initialData);

  function updateFields(fields: Partial<learnCardDetails>) {
    setLearnCard((prev) => {
      return { ...prev, ...fields };
    });
  }

  return (
    <>
      <Navbar />
      <Section>
        <BackBtn />
        <h2>Let's get started with your Learn Card</h2>
        <form>
          <Inputholder
            type="text"
            label="Subject"
            value={learnCard.subject}
            name="subject"
            updateFields={updateFields}
          />
          <Inputholder
            type="text"
            label="Topic"
            value={learnCard.topic}
            name="topic"
            updateFields={updateFields}
          />
          <Inputholder
            type="text"
            label="Education Level"
            value={learnCard.educationLevel}
            name="educationLevel"
            updateFields={updateFields}
          />
          <Inputholder
            type="text"
            label="Standard"
            value={learnCard.standard}
            name="standard"
            updateFields={updateFields}
          />
          <Inputholder
            type="text"
            label="Preferred Language"
            value={learnCard.preferredLanguage}
            name="preferredLanguage"
            updateFields={updateFields}
          />
          <input type="date" name="" id="" />
          <Inputholder
            type="text"
            label="Due Date"
            value={learnCard.dueDate}
            name="dueDate"
            updateFields={updateFields}
          />
          <Textarea
            label="Description"
            name="description"
            updateFields={updateFields}
            value={learnCard.description}
          />
          <Textarea
            label="Expectations"
            name="expectation"
            updateFields={updateFields}
            value={learnCard.expectation}
          />
          {/* <Textarea label="Description" name="description" updateFields={updateFields} value={learnCard.} /> */}
        </form>
      </Section>
    </>
  );
};

export default CreateLearnCard;

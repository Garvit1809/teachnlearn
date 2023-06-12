import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../general-components/navbar";
import Footer from "../general-components/footer/footer";
import FooterWrapper from "../general-components/footer/footerWrapper";
import BackBtn from "./backBtn";
import FormField from "./formField";
import Inputholder from "../general-components/input/inputholder";
import Textarea from "../general-components/input/textarea";
import UploadImage from "../general-components/input/uploadImage";
import { InputWrapper } from "../../pages/authentication/userInfoForm";
import MultipleInput from "../general-components/input/multipleInput";
import ArrChip from "../authentication-comp/arrChip";
import ExpectationWrapper from "./expectationWrapper";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import axios from "axios";
import { UserCookie } from "../../utils/userCookie";
import { getHeaders } from "../../utils/helperFunctions";

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

const FormButtonCont = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 40px;
    gap: 10px;
    outline: none;
    border: none;
    background: #332ad5;
    border-radius: 8px;
    cursor: pointer;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
  }
`;

interface teachCardDetails {
  subject: string;
  topic: string;
  programme: string;
  standard: string;
  preferredLanguage: string;
  img: string;
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
  programme: "",
  standard: "",
  preferredLanguage: "",
  img: "",
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

  const [token, setToken] = useState("");
  const { fetchLocalUserToken } = UserCookie();

  useEffect(() => {
    fetchLocalUserToken().then((token) => {
      setToken(token);
    });
  }, []);

  function updateFields(fields: Partial<teachCardDetails>) {
    setTeachCard((prev) => {
      return { ...prev, ...fields };
    });
  }

  const dateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFields({ [e.target.name]: e.target.value });
  };

  const teachCardHandler = async (e: any) => {
    e.preventDefault();
    console.log(teachCard);

    await axios
      .post(
        `${BASE_URL}${apiVersion}/teach`,
        {
          subject: teachCard.subject,
          topic: teachCard.topic,
          programme: teachCard.programme,
          standard: teachCard.standard,
          preferredLanguage: teachCard.preferredLanguage,
          description: teachCard.description,
          expectations: teachCard.expectations,
          tags: teachCard.tags,
          date: teachCard.date,
          cardBanner: teachCard.img,
          price: teachCard.price,
          classStartsAt: teachCard.startingTime,
          classEndsAt: teachCard.endingTime,
        },
        {
          headers: getHeaders(token ?? ""),
        }
      )
      .then(({ data }) => {
        console.log(data);
        setTeachCard(initialData);
      });
  };

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
                value={teachCard.programme}
                name="programme"
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
            elem={
              <input
                type="date"
                name="date"
                id="date"
                value={teachCard.date}
                onChange={(e) => dateHandler(e)}
              />
            }
            inputDesc="Specify due date for the lesson"
          />
          <FormField
            elem={
              <input
                type="time"
                name="startingTime"
                id="date"
                value={teachCard.startingTime}
                onChange={(e) => dateHandler(e)}
              />
            }
            inputDesc="Specify starting time for the lesson"
          />
          <FormField
            elem={
              <input
                type="time"
                name="endingTime"
                id="date"
                value={teachCard.endingTime}
                onChange={(e) => dateHandler(e)}
              />
            }
            inputDesc="Specify end timing for the lesson"
          />
          <FormField
            elem={<UploadImage updateFields={updateFields} />}
            inputDesc="Upload a cover image for your class"
          />
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
              <ExpectationWrapper
                expectation={teachCard.expectation}
                expectations={teachCard.expectations}
                updateFields={updateFields}
              />
            }
            inputDesc="Your expectations after completing the class"
          />
          <FormField
            elem={
              <InputWrapper>
                <MultipleInput
                  label="Add Tag"
                  elemName="tag"
                  value={teachCard.tag}
                  name="tags"
                  arr={teachCard.tags}
                  updateFields={updateFields}
                />
                {teachCard.tags.length != 0 ? (
                  <ArrChip
                    listArr={teachCard.tags}
                    name="tags"
                    updateFields={updateFields}
                  />
                ) : null}
              </InputWrapper>
            }
            inputDesc="You can add tags in your learn card"
          />
        </form>
        <FormButtonCont>
          <button type="submit" onClick={teachCardHandler}>
            Create Teach Card
          </button>
        </FormButtonCont>
      </Section>
      <FooterWrapper />
    </>
  );
};

export default CreateTeachCard;

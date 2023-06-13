import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../general-components/navbar";
import Inputholder from "../general-components/input/inputholder";
import BackBtn from "./backBtn";
import Textarea from "../general-components/input/textarea";
import FormField from "./formField";
import FooterWrapper from "../general-components/footer/footerWrapper";
import MultipleInput from "../general-components/input/multipleInput";
import ArrChip from "../authentication-comp/arrChip";
import { InputWrapper } from "../../pages/authentication/userInfoForm";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { getHeaders } from "../../utils/helperFunctions";
import {  } from "../../utils/";

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

const ExpectationWrapper = styled.div`
  /* border: 1px solid red; */
  width: 100%;
`;

const AddExpecBtn = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 0.5rem;
  button {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 10px;
    background: #332ad5;
    border-radius: 8px;
    border: none;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    /* line-height: px; */
    color: #ffffff;
  }
`;

const ExpectationsContainer = styled.ul`
  /* border: 1px solid red; */
  margin-top: 1rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
`;

const Expectation = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    /* border: 1px solid red; */
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
  }

  span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    cursor: pointer;
  }
`;

interface learnCardDetails {
  subject: string;
  topic: string;
  programme: string;
  standard: string;
  preferredLanguage: string;
  description: string;
  expectation: string;
  expectations: string[];
  tag: string;
  tags: string[];
  dueDate: string;
}

const initialData: learnCardDetails = {
  subject: "",
  topic: "",
  programme: "",
  standard: "",
  preferredLanguage: "",
  description: "",
  expectation: "",
  expectations: [],
  tag: "",
  tags: [],
  dueDate: "",
};

const CreateLearnCard = () => {
  const [learnCard, setLearnCard] = useState<learnCardDetails>(initialData);
  const [token, setToken] = useState("");
  const { fetchLocalUserToken } = ();

  useEffect(() => {
    fetchLocalUserToken().then((token) => {
      console.log(token);
      setToken(token);
    });
  }, []);

  function updateFields(fields: Partial<learnCardDetails>) {
    setLearnCard((prev) => {
      return { ...prev, ...fields };
    });
  }

  const dateHandler = (date: any) => {
    updateFields({ dueDate: date });
  };

  const expectationHandler = () => {
    const expectation = learnCard.expectation;
    const newArr = learnCard.expectations;
    newArr.push(expectation);
    updateFields({ expectations: newArr, expectation: "" });
  };

  const removeExpecHandler = (expec: string) => {
    const newArr = learnCard.expectations;
    const filteredArr = newArr.filter((elem, index) => {
      return elem != expec;
    });
    updateFields({ expectations: filteredArr });
  };

  const learnCardHandler = async (e: any) => {
    e.preventDefault();
    console.log(learnCard);
    await axios
      .post(
        `${BASE_URL}${apiVersion}/learn`,
        {
          subject: learnCard.subject,
          topic: learnCard.topic,
          programme: learnCard.programme,
          standard: learnCard.standard,
          preferredLanguage: learnCard.preferredLanguage,
          description: learnCard.description,
          expectations: learnCard.expectations,
          tags: learnCard.tags,
          dueDate: learnCard.dueDate,
        },
        {
          headers: getHeaders(token ?? ""),
        }
      )
      .then(({ data }) => {
        console.log(data);
        setLearnCard(initialData);
      });
  };

  return (
    <>
      <Navbar />
      <Section>
        <BackBtn />
        <h2>Let's get started with your Learn Card</h2>
        <form>
          <FormField
            elem={
              <Inputholder
                type="text"
                label="Subject"
                value={learnCard.subject}
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
                value={learnCard.topic}
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
                label="Programme"
                value={learnCard.programme}
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
                value={learnCard.standard}
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
                value={learnCard.preferredLanguage}
                name="preferredLanguage"
                updateFields={updateFields}
              />
            }
            inputDesc="Language that you prefer"
          />
          <FormField
            elem={
              <input
                type="date"
                id="date"
                value={learnCard.dueDate}
                onChange={(e) => dateHandler(e.target.value)}
              />
            }
            inputDesc="Specify due date for the lesson"
          />
          <FormField
            elem={
              <Textarea
                label="Description"
                name="description"
                updateFields={updateFields}
                value={learnCard.description}
              />
            }
            inputDesc="Describe briefly what you expect from the teacher"
          />
          <FormField
            elem={
              <ExpectationWrapper>
                <Textarea
                  label="Expectations"
                  name="expectation"
                  updateFields={updateFields}
                  value={learnCard.expectation}
                />
                <AddExpecBtn>
                  <button type="button" onClick={expectationHandler}>
                    Add Expectation
                  </button>
                </AddExpecBtn>
                <ExpectationsContainer>
                  {learnCard.expectations.map((expec, index) => {
                    return (
                      <Expectation>
                        <li key={index}>{expec}</li>
                        <span onClick={() => removeExpecHandler(expec)}>
                          Remove
                        </span>
                      </Expectation>
                    );
                  })}
                </ExpectationsContainer>
              </ExpectationWrapper>
            }
            inputDesc="Your expectations after completing the class"
          />
          <FormField
            elem={
              <InputWrapper>
                <MultipleInput
                  label="Tags"
                  elemName="tag"
                  value={learnCard.tag}
                  name="tags"
                  arr={learnCard.tags}
                  updateFields={updateFields}
                />
                {learnCard.tags.length != 0 ? (
                  <ArrChip
                    listArr={learnCard.tags}
                    updateFields={updateFields}
                    name="tags"
                  />
                ) : null}
              </InputWrapper>
            }
            inputDesc="You can add tags in your learn card"
          />
        </form>
        <FormButtonCont>
          <button type="submit" onClick={learnCardHandler}>
            Create Learn Card
          </button>
        </FormButtonCont>
      </Section>
      <FooterWrapper />
    </>
  );
};

export default CreateLearnCard;

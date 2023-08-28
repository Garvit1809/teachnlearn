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
import { UserCookie } from "../../utils/userCookie";

import { subjects } from "../../data/SUBJECT_LIST.json";
import { standard } from "../../data/STANDARD_LIST.json";
import { languages } from "../../data/LANGUAGE_LIST.json";
import Footer from "../general-components/footer/footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../general-components/loader";
import { useNavigate } from "react-router-dom";

const Section = styled.div`
  /* border: 1px solid red; */

  border: 1px solid #d5d9eb;
  border-radius: 26px;
  box-sizing: border-box;
  padding: 48px 64px;
  width: 80%;
  margin: 2.5rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media only screen and (max-width: 800px) {
    width: 90%;
    padding: 48px 48px;
  }
  @media only screen and (max-width: 500px) {
    width: 95%;
    padding: 48px 26px;
  }

  h2 {
    font-family: "Nunito";
    font-style: normal;
    margin-bottom: 1rem;
    margin-top: 1rem;
    text-decoration: underline;
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
    background: #094067;
    border-radius: 8px;
    cursor: pointer;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
  }

  @media only screen and (max-width: 500px) {
    justify-content: center;

    button {
      padding: 16px 26px;
      font-size: 16px;
    }
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
  tag: "",
  tags: [],
  dueDate: "",
};

const CreateLearnCard = () => {
  const [learnCard, setLearnCard] = useState<learnCardDetails>(initialData);
  const [token, setToken] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const { fetchLocalUserToken } = UserCookie();

  const navigate = useNavigate();

  useEffect(() => {
    fetchLocalUserToken().then((token) => {
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

  const toastOptions = {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
  };

  const handleValidation = () => {
    const {
      subject,
      topic,
      programme,
      preferredLanguage,
      dueDate,
      description,
    } = learnCard;

    const currentDate = new Date();
    const ISODueDate = new Date(dueDate);

    if (
      subject === "" ||
      topic === "" ||
      programme === "" ||
      preferredLanguage === "" ||
      dueDate === "" ||
      description === ""
    ) {
      toast.error("Fill in all the details", toastOptions);
      return false;
    } else if (topic.trim().length < 10) {
      toast.error("Topic must be greater than 10 characters", toastOptions);
      return false;
    } else if (ISODueDate < currentDate) {
      toast.error("Pick another due date", toastOptions);
      return false;
    } else if (description.trim().length > 400) {
      toast.error("Description caannot exceed 400 characters!!", toastOptions);
      return false;
    }
    return true;
  };

  const learnCardHandler = async (e: any) => {
    e.preventDefault();
    console.log(learnCard);
    if (handleValidation()) {
      setIsLoading(true);
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
          setIsLoading(false);
          navigate("/requests");
        })
        .catch((data) => {
          setIsLoading(false);
          const errors = data.response.data.error.errors;
          Object.keys(errors).forEach(function (err, index) {
            toast.error(errors[err].message, toastOptions);
          });
        });
    }
  };

  return (
    <>
      <Navbar />
      <Section>
        <BackBtn link="/" />
        <h2>Create Learn Card</h2>
        <form>
          <FormField
            elem={
              <Inputholder
                type="text"
                label="Subject"
                value={learnCard.subject}
                name="subject"
                updateFields={updateFields}
                hasDropdown={true}
                dropdownData={subjects}
                placeholderText="Physics, English, Botany, Accounts. etc."
              />
            }
            inputDesc="Subject"
          />
          <FormField
            elem={
              <Textarea
                label="Topic"
                name="topic"
                value={learnCard.topic}
                updateFields={updateFields}
                areaHeight="6rem"
                placeholderText="Pythagoras’ Theorem, World War 2, Balance Sheet, Leibniz Rule, etc."
              />
            }
            inputDesc="Topic"
          />
          <FormField
            elem={
              <Inputholder
                type="text"
                label="Course/Exam/Board/Programme"
                value={learnCard.programme}
                name="programme"
                updateFields={updateFields}
                hasDropdown={false}
                placeholderText="I.C.S.E, B.Tech, NEET, UPSC, etc."
              />
            }
            inputDesc="Course/Exam/Board/Programme"
          />
          <FormField
            elem={
              <Inputholder
                type="text"
                label="Standard"
                value={learnCard.standard}
                name="standard"
                updateFields={updateFields}
                hasDropdown={true}
                dropdownData={standard}
                placeholderText="10th class/2nd year etc (optional)"
              />
            }
            inputDesc="Standard/Year"
          />
          <FormField
            elem={
              <Inputholder
                type="text"
                label="Preferred Language"
                value={learnCard.preferredLanguage}
                name="preferredLanguage"
                updateFields={updateFields}
                hasDropdown={true}
                dropdownData={languages}
                placeholderText="Hindi, English, Tamil, Marathi, French etc"
              />
            }
            inputDesc="Preferred Language"
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
            inputDesc="Due date"
          />
          <FormField
            elem={
              <Textarea
                label="Description"
                name="description"
                updateFields={updateFields}
                value={learnCard.description}
                placeholderText="Can not exceed 400 characters"
              />
            }
            inputDesc="Description of the query"
          />
          <FormField
            elem={
              <InputWrapper>
                <MultipleInput
                  label="#Physics, #BusinessManagement (optional)"
                  elemName="tag"
                  value={learnCard.tag}
                  name="tags"
                  arr={learnCard.tags}
                  updateFields={updateFields}
                  maxLimit={5}
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
            inputDesc="Tags"
          />
        </form>
        <FormButtonCont>
          <button type="submit" onClick={learnCardHandler}>
            {isLoading ? (
              <Loader loaderHeight="1.6rem" color="white" />
            ) : (
              "Create Learn Card"
            )}
          </button>
        </FormButtonCont>
      </Section>
      <Footer />
      <ToastContainer theme="dark" />
    </>
  );
};

export default CreateLearnCard;

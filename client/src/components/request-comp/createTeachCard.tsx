import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../general-components/navbar";
import Footer from "../general-components/footer/footer";
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
import { useLocation } from "react-router-dom";

import { languages } from "../../data/LANGUAGE_LIST.json";
import { subjects } from "../../data/SUBJECT_LIST.json";
import { standard } from "../../data/STANDARD_LIST.json";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  gap: 2rem;

  h2 {
    font-family: "Nunito";
    font-style: normal;
    margin-bottom: 1.5rem;
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
  photo: string;
  date: string;
  description: string;
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
  photo: "",
  date: "",
  description: "",
  tag: "",
  tags: [],
  price: 0,
  startingTime: "",
  endingTime: "",
};

const CreateTeachCard = () => {
  const [teachCard, setTeachCard] = useState<teachCardDetails>(initialData);
  const [learnCardId, setLearnCardId] = useState<string>();
  const [isLearnCardReferred, setIsLearnCardReferred] =
    useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    console.log(location.state);

    const navProps = location.state;

    if (location.state) {
      setTeachCard((prev) => {
        return {
          ...prev,
          subject: navProps.subject,
          topic: navProps.topic,
          programme: navProps.programme,
          standard: navProps.standard,
          description: navProps.description,
          expectations: navProps.expectations,
          tags: navProps.tags,
        };
      });
      setLearnCardId(navProps.learnCardId);
      setIsLearnCardReferred(true);
    }
  }, [location]);

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
    const date = e.target.value;
    // console.log(typeof e.target.value);
    // console.log(e.target.value);

    const ISOstring = new Date(date);
    // console.log(typeof ISOstring);
    // console.log(ISOstring);

    updateFields({
      [e.target.name]: date,
      // startingTime: ISOstring.toString(),
      // endingTime: ISOstring.toString(),
    });
  };

  const timeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);

    updateFields({ [e.target.name]: e.target.value });
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
      standard,
      preferredLanguage,
      date,
      startingTime,
      endingTime,
      description,
      photo,
      price,
      tags,
    } = teachCard;

    const currentDate = new Date();
    const ISODueDate = new Date(date);
    const ISOStartingTime = new Date(startingTime);
    const ISOEndingTime = new Date(endingTime);

    if (
      subject === "" ||
      topic === "" ||
      programme === "" ||
      standard === "" ||
      preferredLanguage === "" ||
      date === "" ||
      startingTime === "" ||
      endingTime === "" ||
      description === "" ||
      photo === ""
    ) {
      toast.error("Fill in all the details", toastOptions);
      return false;
    } else if (topic.length < 30) {
      toast.error("Topic must be greater than 30 characters", toastOptions);
      return false;
    } else if (ISODueDate < currentDate) {
      toast.error("Pick another date for class", toastOptions);
      return false;
    } else if (ISOEndingTime < ISOStartingTime) {
      toast.error(
        "Class End time cannot be less than Start time",
        toastOptions
      );
      return false;
    }
    return true;
  };

  const teachCardHandler = async (e: any) => {
    e.preventDefault();
    console.log(teachCard);
    // console.log(new Date(time));

    if (handleValidation()) {
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
            tags: teachCard.tags,
            date: teachCard.date,
            cardBanner: teachCard.photo,
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
          window.location.reload();
        })
        .catch((data) => {
          setTeachCard(initialData);
          const errors = data.response.data.error.errors;
          if (errors) {
            Object.keys(errors).forEach(function (err, index) {
              toast.error(errors[err].message, toastOptions);
            });
          } else {
            console.log(data);
            // toast.error('Something went wrong',)
          }
        });
    }
  };

  const teachCardOnLeanrCardHandler = async (e: any) => {
    if (handleValidation()) {
      await axios
        .post(
          `${BASE_URL}${apiVersion}/learn/${learnCardId}/teach`,
          {
            subject: teachCard.subject,
            topic: teachCard.topic,
            programme: teachCard.programme,
            standard: teachCard.standard,
            preferredLanguage: teachCard.preferredLanguage,
            description: teachCard.description,
            tags: teachCard.tags,
            date: teachCard.date,
            cardBanner: teachCard.photo,
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
        })
        .catch((data) => {
          const errors = data.response.data.error.errors;
          Object.keys(errors).forEach(function (err, index) {
            toast.error(errors[err].message, toastOptions);
          });
        });
    }
  };

  // const [time, settime] = useState("");

  return (
    <>
      <Navbar />
      <Section>
        <BackBtn
          link={learnCardId ? `/learncard-overview/${learnCardId}` : "/"}
          learnCardId={learnCardId ? learnCardId : undefined}
        />
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
                hasDropdown={true}
                dropdownData={subjects}
                placeholderText="Physics, English, Botany, Accounts. etc."
              />
            }
            inputDesc="Pick a Subject"
          />
          <FormField
            elem={
              <Textarea
                label="Topic"
                value={teachCard.topic}
                name="topic"
                updateFields={updateFields}
                placeholderText="Pythagoras’ Theorem, World War 2, Balance Sheet, Leibniz Rule, etc."
                areaHeight="6rem"
              />
            }
            inputDesc="Topic for the card"
          />
          <FormField
            elem={
              <Inputholder
                type="text"
                label="Course/Exam/Board/Programme"
                value={teachCard.programme}
                name="programme"
                updateFields={updateFields}
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
                value={teachCard.standard}
                name="standard"
                updateFields={updateFields}
                hasDropdown={true}
                dropdownData={standard}
                placeholderText="Class/Year"
              />
            }
            inputDesc="Standard for the class"
          />
          <FormField
            elem={
              <Inputholder
                type="text"
                label="Preferred Language"
                value={teachCard.preferredLanguage}
                name="preferredLanguage"
                updateFields={updateFields}
                hasDropdown={true}
                dropdownData={languages}
                placeholderText="Hindi, English etc"
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
            inputDesc="Price for your class"
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
            inputDesc="Specify Date for the class"
          />
          <FormField
            elem={
              <input
                type="datetime-local"
                name="startingTime"
                id="date"
                value={teachCard.startingTime}
                onChange={(e) => timeHandler(e)}
              />
            }
            inputDesc="Specify starting time for the class"
          />
          <FormField
            elem={
              <input
                type="datetime-local"
                name="endingTime"
                id="date"
                value={teachCard.endingTime}
                onChange={(e) => timeHandler(e)}
              />
            }
            inputDesc="Specify end timing for the class"
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
                placeholderText="Description"
              />
            }
            inputDesc="Describe briefly what students should expect from you"
          />
          <FormField
            elem={
              <InputWrapper>
                <MultipleInput
                  label="Tags"
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
            inputDesc="You can add tags in your teach card"
          />
        </form>
        <FormButtonCont>
          <button
            type="submit"
            onClick={
              isLearnCardReferred
                ? teachCardOnLeanrCardHandler
                : teachCardHandler
            }
          >
            Create Teach Card
          </button>
        </FormButtonCont>
      </Section>
      <Footer />
      <ToastContainer theme="dark" />
    </>
  );
};

export default CreateTeachCard;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../general-components/navbar";
import Footer from "../general-components/footer/footer";
import BackBtn from "./backBtn";
import FormField from "./formField";
import Inputholder from "../general-components/input/inputholder";
import Textarea from "../general-components/input/textarea";
import { InputWrapper } from "../../pages/authentication/userInfoForm";
import MultipleInput from "../general-components/input/multipleInput";
import ArrChip from "../authentication-comp/arrChip";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import axios from "axios";
import { UserCookie } from "../../utils/userCookie";
import { autoGenerateImage, getHeaders } from "../../utils/helperFunctions";
import { useLocation } from "react-router-dom";

import { languages } from "../../data/LANGUAGE_LIST.json";
import { subjects } from "../../data/SUBJECT_LIST.json";
import { standard } from "../../data/STANDARD_LIST.json";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../general-components/loader";

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
    margin-bottom: 1.5rem;
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
  startingTime: "",
  endingTime: "",
};

const CreateTeachCard = () => {
  const [teachCard, setTeachCard] = useState<teachCardDetails>(initialData);
  const [learnCardId, setLearnCardId] = useState<string>();
  const [isLearnCardReferred, setIsLearnCardReferred] =
    useState<boolean>(false);

  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    // console.log(location.state);

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
      preferredLanguage,
      date,
      startingTime,
      endingTime,
      description,
    } = teachCard;

    const currentDate = new Date();
    const ISODueDate = new Date(date);
    const ISOStartingTime = new Date(startingTime);
    const ISOEndingTime = new Date(endingTime);

    if (
      subject === "" ||
      topic === "" ||
      programme === "" ||
      preferredLanguage === "" ||
      date === "" ||
      startingTime === "" ||
      endingTime === "" ||
      description === ""
    ) {
      toast.error("Fill in all the details", toastOptions);
      return false;
    } else if (topic.trim().length < 30) {
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
    } else if (description.length > 400) {
      toast.error("Description caannot exceed 400 characters!!", toastOptions);
      return false;
    }
    return true;
  };

  const teachCardHandler = async (e: any) => {
    e.preventDefault();
    console.log(teachCard);
    const img = await autoGenerateImage(teachCard.subject);
    console.log(img);
    if (handleValidation()) {
      if (!img) {
        toast.error(
          "A card banner couldnt be generated!! Try again.",
          toastOptions
        );
        return;
      }
      setIsLoading(true);
      await axios
        .post(
          `${BASE_URL}${apiVersion}/teach`,
          {
            subject: teachCard.subject,
            topic: teachCard.topic,
            programme: teachCard.programme,
            standard: teachCard.standard,
            date: teachCard.date,
            preferredLanguage: teachCard.preferredLanguage,
            cardBanner: img,
            classStartsAt: teachCard.startingTime,
            classEndsAt: teachCard.endingTime,
            description: teachCard.description,
            tags: teachCard.tags,
          },
          {
            headers: getHeaders(token ?? ""),
          }
        )
        .then(({ data }) => {
          console.log(data);
          setTeachCard(initialData);
          setIsLoading(false);
          toast.success("Teach Card Successfully created!!", toastOptions);
        })
        .catch((data) => {
          // setTeachCard(initialData);
          setIsLoading(false);
          console.log(data);
          if (data.response.data.error.errors) {
            const errors = data.response.data.error.errors;
            Object.keys(errors).forEach(function (err, index) {
              toast.error(errors[err].message, toastOptions);
            });
          } else {
            toast.error("Something went wrong", toastOptions);
          }
        });
    }
  };

  const teachCardOnLeanrCardHandler = async (e: any) => {
    const img = autoGenerateImage(teachCard.subject);
    if (handleValidation()) {
      setIsLoading(true);
      await axios
        .post(
          `${BASE_URL}${apiVersion}/learn/${learnCardId}/teach`,
          {
            subject: teachCard.subject,
            topic: teachCard.topic,
            programme: teachCard.programme,
            standard: teachCard.standard,
            date: teachCard.date,
            preferredLanguage: teachCard.preferredLanguage,
            cardBanner: img,
            classStartsAt: teachCard.startingTime,
            classEndsAt: teachCard.endingTime,
            description: teachCard.description,
            tags: teachCard.tags,
          },
          {
            headers: getHeaders(token ?? ""),
          }
        )
        .then(({ data }) => {
          console.log(data);
          setTeachCard(initialData);
          setIsLoading(false);
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
        <BackBtn
          link={learnCardId ? `/learncard-overview/${learnCardId}` : "/"}
          learnCardId={learnCardId ? learnCardId : undefined}
        />
        <h2>Create Teach Card</h2>
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
            inputDesc="Subject"
          />
          <FormField
            elem={
              <Textarea
                label="Topic"
                value={teachCard.topic}
                name="topic"
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
                value={teachCard.preferredLanguage}
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
                name="date"
                id="date"
                value={teachCard.date}
                onChange={(e) => dateHandler(e)}
              />
            }
            inputDesc="Date of the class"
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
            inputDesc="Starting time"
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
            inputDesc="Ending Time"
          />
          {/* auto generate image from subject */}
          <FormField
            elem={
              <Textarea
                label="Description"
                name="description"
                updateFields={updateFields}
                value={teachCard.description}
                placeholderText="Can not exceed 400 characters"
              />
            }
            inputDesc="Description of the topic covered"
          />
          <FormField
            elem={
              <InputWrapper>
                <MultipleInput
                  label="#Physics, #BusinessManagement (optional)"
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
            inputDesc="Tags"
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
            {isLoading ? (
              <Loader loaderHeight="1.6rem" color="white" />
            ) : (
              "Create Teach Card"
            )}
          </button>
        </FormButtonCont>
      </Section>
      <Footer />
      <ToastContainer theme="dark" />
    </>
  );
};

export default CreateTeachCard;

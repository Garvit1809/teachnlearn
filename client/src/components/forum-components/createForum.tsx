import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../general-components/navbar";
import BackBtn from "../request-comp/backBtn";
import FormField from "../request-comp/formField";
import Inputholder from "../general-components/input/inputholder";
import Textarea from "../general-components/input/textarea";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { UserCookie } from "../../utils/userCookie";
import { getHeaders } from "../../utils/helperFunctions";
import Footer from "../general-components/footer/footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../general-components/loader";

const Section = styled.div`
  border: 1px solid #d5d9eb;
  border-radius: 26px;
  box-sizing: border-box;
  padding: 48px 64px;
  width: 80%;
  margin: 2.5rem auto;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: "Nunito";
    font-style: normal;
    margin-bottom: 2rem;
    margin-top: 3rem;
  }

  form {
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    margin-bottom: 3.5rem;
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
`;

interface createForumProps {
  tagline: string;
  question: string;
  topic: string;
}

const initialForumData: createForumProps = {
  tagline: "",
  question: "",
  topic: "",
};

const CreateForum = () => {
  const [forum, setForum] = useState<createForumProps>(initialForumData);
  const [isLoading, setIsLoading] = useState(false);

  function updateFields(fields: Partial<createForumProps>) {
    setForum((prev) => {
      return { ...prev, ...fields };
    });
  }

  const [userToken, setUserToken] = useState<string>("");

  const { fetchLocalUserToken } = UserCookie();

  useEffect(() => {
    fetchLocalUserToken().then((token) => {
      setUserToken(token);
    });
  }, [location]);

  const toastOptions = {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
  };

  const handleValidation = () => {
    const { topic, tagline, question } = forum;
    if (topic === "" || tagline === "" || question === "") {
      toast.error("Fill in all the details", toastOptions);
      return false;
    } else if (tagline.length > 250) {
      toast.error("Tagline cannot be longer than 250 characters", toastOptions);
      return false;
    }
    return true;
  };

  const createForumHandler = async () => {
    console.log(forum);
    const { topic, tagline, question } = forum;
    if (handleValidation()) {
      setIsLoading(true);
      await axios
        .post(
          `${BASE_URL}${apiVersion}/forum`,
          {
            topic,
            tagline,
            question,
          },
          {
            headers: getHeaders(userToken ?? ""),
          }
        )
        .then(() => {
          setIsLoading(false);
          setForum(initialForumData);
          toast.success("Forum successfully created", toastOptions);
        })
        .catch((data) => {
          setIsLoading(false);
          if (data.response.data.error.errors) {
            const errors = data.response.data.error.errors;
            Object.keys(errors).forEach(function (err, index) {
              toast.error(errors[err].message, toastOptions);
            });
          } else {
            toast.error("Something went wrong!! Try again.", toastOptions);
          }
        });
    }
  };

  return (
    <>
      <Navbar />
      <Section>
        <BackBtn link="/forums" />
        <h2>Let's get started with your Forum</h2>
        <form>
          <FormField
            elem={
              <Inputholder
                type="text"
                label="Topic"
                name="topic"
                value={forum.topic}
                updateFields={updateFields}
                placeholderText="Topic like Physics, App Development, Trading etc"
              />
            }
            inputDesc="Pick a topic for your forum"
          />
          <FormField
            elem={
              <Textarea
                label="Tagline"
                name="tagline"
                value={forum.tagline}
                updateFields={updateFields}
                placeholderText="A brief tagline for your question"
              />
            }
            inputDesc="Pick a tagline for your forum"
          />
          <FormField
            elem={
              <Textarea
                label="Question"
                name="question"
                value={forum.question}
                areaHeight="15rem"
                updateFields={updateFields}
                placeholderText="Ask your question"
              />
            }
            inputDesc="Question for the forum"
          />
        </form>
        <FormButtonCont>
          <button type="submit" onClick={createForumHandler}>
            {isLoading ? (
              <Loader loaderHeight="1.6rem" color="white" />
            ) : (
              "Create Forum"
            )}
          </button>
        </FormButtonCont>
      </Section>
      <Footer />
      <ToastContainer theme="dark" />
    </>
  );
};

export default CreateForum;

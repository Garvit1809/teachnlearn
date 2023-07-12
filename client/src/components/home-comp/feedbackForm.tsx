import React, { useState } from "react";
import styled from "styled-components";
import Textarea from "../general-components/input/textarea";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { getHeaders } from "../../utils/helperFunctions";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Section = styled.div`
  /* border: 1px solid red; */
  display: flex;
  padding: 0 16vw;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;

  h2 {
    color: #000;
    /* text-align: center; */
    font-size: 4rem;
    line-height: 1;
    font-family: "Nunito";
    font-weight: 600;
    letter-spacing: -0.18rem;
  }

  h4 {
    color: #000;
    font-size: 1.26563rem;
    font-family: "Nunito";
    font-weight: 500;
    letter-spacing: -0.05063rem;
  }

  textarea {
    border-radius: 8px;
    border: 1px solid #5d6b98;
  }

  button {
    display: flex;
    padding: 1.375rem 4.125rem;
    justify-content: center;
    align-items: flex-end;
    gap: 0.625rem;
    border-radius: 2px;
    background: #094067;
    background: #ef4565;
    color: #fff;
    font-size: 1.125rem;
    font-family: "Nunito";
    font-weight: 700;
    border: none;
    cursor: pointer;
  }

  @media only screen and (max-width: 880px) {
    padding: 0 10vw;
    h2 {
      font-size: 3rem;
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 0 9vw;
    gap: 1.35rem;
    h2 {
      font-size: 2.6rem;
    }
    h4 {
      font-size: 1.1rem;
    }
    button {
      /* align-items: center; */
      align-self: center;
      padding: 1.375rem 2.125rem;
    }
  }
`;

interface feedbackProps {
  userToken: string;
}

const FeedbackForm = (props: feedbackProps) => {
  const [feedback, setFeedback] = useState<string>("");

  function updateFields(content: string) {
    setFeedback(content);
  }

  const toastOptions = {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
  };

  const handleValidation = () => {
    if (feedback == "") {
      toast.error("Feedback cannot be empty", toastOptions);
      return false;
    }
    return true;
  };

  const feedbackHandler = async () => {
    console.log(feedback);
    if (handleValidation()) {
      await axios
        .post(
          `${BASE_URL}${apiVersion}/user/my-feedback`,
          { feedback },
          {
            headers: getHeaders(props.userToken),
          }
        )
        .then(({ data }) => {
          console.log(data);
          toast.success("Feedback successfully submitted!!", toastOptions);
          setFeedback("");
        })
        .catch((err) => {
          console.log(err);
          toast.error(
            "Feedback couldnt be submiited. Try again!!",
            toastOptions
          );
        });
    }
  };

  return (
    <Section>
      <h2>Please share your feedback</h2>
      <h4>
        Let us know how we can improve our platform and any additional features
        you would like to see
      </h4>
      <Textarea
        label="Your Feedback"
        name="feedback"
        value={feedback}
        areaHeight="15rem"
        updateSingleField={updateFields}
        placeholderText="Your Feedback"
      />
      <button onClick={feedbackHandler}>Submit Feedback</button>
    </Section>
  );
};

export default FeedbackForm;

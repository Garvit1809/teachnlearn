import React, { useState } from "react";
import styled from "styled-components";
import Textarea from "../general-components/input/textarea";

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
    text-align: center;
    font-size: 4.5rem;
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
    width: 22.75rem;
    padding: 1.375rem 2.125rem;
    justify-content: center;
    align-items: flex-end;
    gap: 0.625rem;
    border-radius: 2px;
    background: #094067;
    color: #fff;
    font-size: 1.125rem;
    font-family: "Nunito";
    font-weight: 700;
    border: none;
    cursor: pointer;
  }
`;

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState<string>("");

  function updateFields(content: string) {
    setFeedback(content);
  }

  const feedbackHandler = () => {
    console.log(feedback);
  };

  return (
    <Section>
      <h2>Have a feedback</h2>
      <h4>
        We love to hear back from you and keep improving our product. Your
        feedback will be very valuable for us.
      </h4>
      <Textarea
        label="Your Feedback"
        name="feedback"
        value={feedback}
        areaHeight="15rem"
        updateSingleField={updateFields}
      />
      <button onClick={feedbackHandler}>Submit Feedback</button>
    </Section>
  );
};

export default FeedbackForm;

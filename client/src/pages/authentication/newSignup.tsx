import React from "react";
import styled from "styled-components";
import DescriptionBox from "../../components/authentication-comp/descriptionBox";
import { useMultiStepForm } from "../../components/authentication-comp/useMultiStepForm";
import SignupForm from "./signupForm";
import UserInfoForm from "./userInfoForm";

const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  /* align-items: center; */
  justify-content: center;
  padding: 2rem;
`;

const DetailsContainer = styled.div`
  border: 1px solid red;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 58px;
  gap: 36px;
  margin-right: 4rem;

  border: 2px solid #d5d9eb;
  border-radius: 28px;
`;

const NewSignup = () => {
  const { steps, currentStepIndex, step } = useMultiStepForm([
    <SignupForm />,
    <UserInfoForm />,
  ]);
  return (
    <Section>
      <DetailsContainer>
        {step}
      </DetailsContainer>
      <DescriptionBox />
    </Section>
  );
};

export default NewSignup;

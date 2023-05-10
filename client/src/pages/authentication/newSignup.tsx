import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import DescriptionBox from "../../components/authentication-comp/descriptionBox";
import { useMultiStepForm } from "../../components/authentication-comp/useMultiStepForm";
import SignupForm from "./signupForm";
import UserInfoForm from "./userInfoForm";
import { Link } from "react-router-dom";

const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;

const LeftContainer = styled.div`
  width: 50vw;
  margin-top: 6rem;
  /* border: 1px solid red; */
  box-sizing: border-box;
`;

const RightContainer = styled.div`
  width: 50vw;
  border: 1px solid red;
  box-sizing: border-box;
`;

const DetailsContainer = styled.div`
  /* border: 1px solid red; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 58px 0;
  width: 70%;

  border: 2px solid #d5d9eb;
  border-radius: 28px;
  margin: auto;

  button {
    background: #332ad5;
    border-radius: 8px;
    outline: none;
    border: none;
    padding: 0.75rem 1rem;
    color: white;
    font-size: 18px;
    line-height: 27px;
    cursor: pointer;
    width: 70%;
    margin: 0rem auto 0rem;

    &:last-child{
      margin-top: 1.5rem;
    }
  }

  span.login{
    color: #666666;
    font-size: 16px;
    line-height: 1;
    margin: 0;
    margin-top: 1.5rem;
    padding: 0;

    a{
      color: #332AD5;
      font-weight: 600;
    }
  }
`;

interface USERDATA {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  profilePic: string;
  number: string;
  course: string;
  interestedSubjects: string[];
  strongSubjects: string[];
  preferredLanguages: string[];
}

const initialData: USERDATA = {
  fullName: "",
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  profilePic: "",
  number: "",
  course: "",
  interestedSubjects: [],
  strongSubjects: [],
  preferredLanguages: [],
};

const NewSignup = () => {
  const [userData, setUserData] = useState<USERDATA>(initialData);

  function updateFields(fields: Partial<USERDATA>) {
    setUserData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, next, back } =
    useMultiStepForm([
      <SignupForm {...userData} updateFields={updateFields} />,
      <UserInfoForm />,
    ]);
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation");
  }
  console.log(currentStepIndex);
  
  return (
    <Section>
      <LeftContainer>
        <DetailsContainer>
          {/* <Indicator> */}

          {/* </Indicator> */}
          {step}
          <button type={isLastStep ? "submit" : "button"} onClick={onSubmit} >
            {isLastStep ? "Signup" : "Next"}
          </button>
          {isLastStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          {
            isFirstStep && <span className="login" >Already have an account? <Link to="/signin" >Sign In!!</Link> </span>
          }
        </DetailsContainer>
      </LeftContainer>
      <RightContainer>
        <DescriptionBox />
      </RightContainer>
    </Section>
  );
};

export default NewSignup;

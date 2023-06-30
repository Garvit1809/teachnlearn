import React, { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import DescriptionBox from "../../components/authentication-comp/descriptionBox";
import { useMultiStepForm } from "../../components/authentication-comp/useMultiStepForm";
import SignupForm from "./signupForm";
import UserInfoForm from "./userInfoForm";
import { Link, useNavigate } from "react-router-dom";
import Indicator from "../../components/authentication-comp/indicator";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { localStorageUser } from "../../utils/globalConstants";
import { UserCookie } from "../../utils/userCookie";
import { topNavigator } from "../../utils/helperFunctions";

const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  font-family: "Nunito";
`;

const LeftContainer = styled.div`
  /* border: 1px solid red; */
  width: 50vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const RightContainer = styled.div`
  /* border: 1px solid red; */
  padding: 5vw 0;
  width: 50vw;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const FormContainer = styled.div`
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

  span.login {
    color: #666666;
    font-size: 16px;
    line-height: 1;
    margin: 0;
    margin-top: 1.5rem;
    padding: 0;

    display: flex;
    gap: 6px;

    h5 {
      color: #332ad5;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

const ButtonContainer = styled.div`
  /* border: 1px solid red; */
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
    width: 100%;
    margin: 0rem auto;
    box-sizing: border-box;

    &:nth-child(2) {
      margin-top: 0.8rem;
    }
  }
`;

interface USERDATA {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  photo: string;
  number: string;
  course: string;
  interestedSubject: string;
  interestedSubjects: string[];
  strongSubject: string;
  strongSubjects: string[];
  language: string;
  preferredLanguages: string[];
}

const initialData: USERDATA = {
  fullName: "",
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  photo: "",
  number: "",
  course: "",
  interestedSubject: "",
  interestedSubjects: [],
  strongSubject: "",
  strongSubjects: [],
  preferredLanguages: [],
  language: "",
};

const NewSignup = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (localStorage.getItem(localStorageUser)) {
  //     navigate("/");
  //   }
  // }, [navigate]);

  const [userData, setUserData] = useState<USERDATA>(initialData);

  function updateFields(fields: Partial<USERDATA>) {
    setUserData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { step, isFirstStep, isLastStep, next, back, currentStepIndex } =
    useMultiStepForm([
      <SignupForm {...userData} updateFields={updateFields} />,
      <UserInfoForm {...userData} updateFields={updateFields} />,
    ]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    else {
      e.preventDefault();
      // console.log(userData);
      await axios
        .post(`${BASE_URL}${apiVersion}/auth/signup`, {
          name: userData.fullName,
          userName: userData.userName,
          email: userData.email,
          password: userData.password,
          passwordConfirm: userData.confirmPassword,
          photo: userData.photo,
          phoneNumber: userData.number,
          enrolledProgramme: userData.course,
          interestedSubjects: userData.interestedSubjects,
          strongSubjects: userData.strongSubjects,
          preferredLanguages: userData.preferredLanguages,
        })
        .then(({ data }) => {
          console.log(data);
          console.log(data.token);
          data.data.user.token = data.token;
          localStorage.setItem(
            localStorageUser,
            JSON.stringify(data.data.user)
          );
          navigateLink("/");
        });
    }
  };

  const navigateLink = (link: string) => {
    topNavigator();
    navigate(link);
  };

  return (
    <Section>
      <LeftContainer>
        <FormContainer>
          <Indicator index={currentStepIndex} />
          {step}
          <ButtonContainer>
            <button type={isLastStep ? "submit" : "button"} onClick={onSubmit}>
              {isLastStep ? "Signup" : "Next"}
            </button>
            {isLastStep && (
              <button type="button" onClick={back}>
                Back
              </button>
            )}
          </ButtonContainer>
          <span className="login">
            Already have an account?{" "}
            <h5 onClick={() => navigateLink("/signin")}>Sign In!!</h5>
          </span>
        </FormContainer>
      </LeftContainer>
      <RightContainer>
        <DescriptionBox
          heading={isFirstStep ? "Get Started!" : "Just a little more..."}
        />
      </RightContainer>
    </Section>
  );
};

export default NewSignup;

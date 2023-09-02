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
import { isValidEmail, topNavigator } from "../../utils/helperFunctions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/general-components/loader";

const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  font-family: "Nunito";
  padding-right: 2rem;

  @media only screen and (max-width: 870px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 0;
  }
`;

const LeftContainer = styled.div`
  /* border: 1px solid red; */
  width: 55vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 870px) {
    min-height: 0;
    width: 100vw;
  }
`;

const RightContainer = styled.div`
  /* border: 1px solid red; */
  padding: 5vw 0;
  width: 45vw;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media only screen and (max-width: 870px) {
    min-height: 0;
    padding: 0;
    width: 100vw;
  }
`;

const FormContainer = styled.div`
  border: 1px solid red;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 58px 0;
  width: 80%;

  border: 2px solid #d5d9eb;
  border-radius: 28px;
  margin: auto;

  @media only screen and (max-width: 870px) {
    border: none;
    width: 100%;
  }

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
      color: #094067;
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
    background: #094067;
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
  photo?: string;
  number: string;
  course: string;
  standard: string;
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
  photo: undefined,
  number: "",
  course: "",
  standard: "",
  interestedSubject: "",
  interestedSubjects: [],
  strongSubject: "",
  strongSubjects: [],
  preferredLanguages: [],
  language: "",
};

const NewSignup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem(localStorageUser)) {
      navigate("/");
    }
  }, [navigate]);

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

  const toastOptions = {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
  };

  const handleValidation = () => {
    const { fullName, userName, email, password, confirmPassword, course } =
      userData;
    if (
      fullName === "" ||
      userName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      course === ""
    ) {
      toast.error("Fill in all the details", toastOptions);
      return false;
    } else if (!isValidEmail(email)) {
      toast.error("Email is not valid!!", toastOptions);
      return false;
    } else if (userName.length > 25) {
      toast.error("Username cannot be greater than 25 char!!", toastOptions);
      return false;
    } else if (password.length < 6) {
      toast.error("Password is short", toastOptions);
      return false;
    } else if (confirmPassword.length < 6) {
      toast.error("Both passwords are not same", toastOptions);
      return false;
    } else if (password != confirmPassword) {
      toast.error("Both passwords are not same", toastOptions);
      return false;
    }
    return true;
  };

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    else {
      // console.log(userData);
      e.preventDefault();
      setIsLoading(true);
      if (handleValidation()) {
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
            standard: userData.standard,
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
            setIsLoading(false);
            navigateLink("/");
          })
          .catch((data) => {
            console.log(data);
            if (!data.response) {
              toast.error(data.message, toastOptions);
              return;
            }
            const error = data.response.data.message;
            setIsLoading(false);
            toast.error(error, toastOptions);
            // const errors = data.response.data.error.errors;
            // Object.keys(errors).forEach(function (err, index) {
            //   // console.log(errors[err].message);
            //   toast.error(errors[err].message, toastOptions);
            // });
          });
      }
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
              {isLastStep ? (
                isLoading ? (
                  <Loader color="white" loaderHeight="2rem" />
                ) : (
                  "Signup"
                )
              ) : (
                "Next"
              )}
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
          mobileText="Register for an account"
        />
      </RightContainer>
      <ToastContainer theme="dark" />
    </Section>
  );
};

export default NewSignup;

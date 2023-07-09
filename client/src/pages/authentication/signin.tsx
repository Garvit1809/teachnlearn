import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DescriptionBox from "../../components/authentication-comp/descriptionBox";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../components/authentication-comp/loginForm";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import axios from "axios";
import { localStorageUser } from "../../utils/globalConstants";
import { isValidEmail, topNavigator } from "../../utils/helperFunctions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

    span.link {
      cursor: pointer;
      color: #332ad5;
      font-weight: 600;
    }
  }
`;

const ButtonContainer = styled.div`
  /* border: 1px solid red; */
  width: 70%;

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
  }
`;

interface loginDataProps {
  email: string;
  password: string;
}

const Signin = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (localStorage.getItem(localStorageUser)) {
  //     navigate("/");
  //   }
  // }, [navigate]);

  const [loginData, setLoginData] = useState<loginDataProps>({
    email: "",
    password: "",
  });

  function updateFields(fields: Partial<loginDataProps>) {
    setLoginData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const navigationHandler = (link: string) => {
    topNavigator();
    navigate(link);
  };

 const toastOptions = {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
  };

 
  const handleValidation = () => {
    const { email, password } = loginData;
    if (email === "" || password === "") {
      toast.error("Fill in all the details", toastOptions);
      return false;
    } else if (!isValidEmail(email)) {
      toast.error("Email is not valid!!", toastOptions);
      return false;
    } else if (password.length < 6) {
      toast.error("Password is short", toastOptions);
      return false;
    }
    return true;
  };

  const loginHandler = async (e: any) => {
    e.preventDefault();
    if (handleValidation()) {
      await axios
        .post(`${BASE_URL}${apiVersion}/auth/login`, {
          email: loginData.email,
          password: loginData.password,
        })
        .then(({ data }) => {
          const user = data.data.user;
          user.token = data.token;
          localStorage.setItem(localStorageUser, JSON.stringify(user));
          navigationHandler("/");
        })
        .catch((data) => {
          const errMsg = data.response.data.message;
          console.log(errMsg);
          toast.error(errMsg, toastOptions);
        });
    }
  };

  return (
    <Section>
      <LeftContainer>
        <FormContainer>
          <LoginForm {...loginData} updateFields={updateFields} />
          <ButtonContainer>
            <button type="submit" onClick={loginHandler}>
              Login
            </button>
          </ButtonContainer>
          <span className="login">
            Don't have an account?{" "}
            <span className="link" onClick={() => navigationHandler("/signup")}>
              Sign Up!!
            </span>{" "}
          </span>
        </FormContainer>
      </LeftContainer>
      <RightContainer>
        <DescriptionBox heading="Welcome Back!!" />
      </RightContainer>
      <ToastContainer theme="dark" />
    </Section>
  );
};

export default Signin;

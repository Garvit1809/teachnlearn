import React, { useState } from "react";
import styled from "styled-components";
import DescriptionBox from "../../components/authentication-comp/descriptionBox";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../components/authentication-comp/loginForm";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import axios from "axios";
import { localStorageUser } from "../../utils/globalConstants";
import { UserCookie } from "../../utils/userCookie";

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

    a {
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
  const [loginData, setLoginData] = useState<loginDataProps>({
    email: "",
    password: "",
  });

  const { fetchLocalUserData } = UserCookie();

  function updateFields(fields: Partial<loginDataProps>) {
    setLoginData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const navigate = useNavigate();

  const navigateToHome = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    navigate("/");
  };

  const loginHandler = async (e: any) => {
    e.preventDefault();
    const { data } = await axios.post(`${BASE_URL}${apiVersion}/auth/login`, {
      email: loginData.email,
      password: loginData.password,
    });
    // console.log(data);
    if (data.status === "success") {
      data.data.user.token = data.token;
      localStorage.setItem(localStorageUser, JSON.stringify(data.data.user));
      navigateToHome();
      // fetchLocalUserData();
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
            Don't have an account? <Link to="/signup">Sign Up!!</Link>{" "}
          </span>
        </FormContainer>
      </LeftContainer>
      <RightContainer>
        <DescriptionBox heading="Welcome Back!!" />
      </RightContainer>
    </Section>
  );
};

export default Signin;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { topNavigator } from "../../utils/helperFunctions";
import { styled } from "styled-components";
import TNLLogo from "../../assets/tnl-logo.png";
import { UserCookie } from "../../utils/userCookie";

const Header = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;

const ImageContainer = styled.div`
  /* border: 1px solid red; */
  width: 160px;
  height: 60px;
  margin-left: 4vw;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media only screen and (max-width: 450px) {
    width: 140px;
    height: 52px;
    margin-left: 3vw;
  }
`;

const AuthButtons = styled.div`
  /* border: 1px solid red; */
  display: flex;
  margin-right: 4vw;
  align-items: center;
  justify-content: center;
  /* margin-right: 4rem; */
  gap: 26px;

  div.signup {
    background: #3da9fc;
    color: #fffffe;
  }

  div.signin {
    background: #ef4565;
    color: #fffffe;
  }

  @media only screen and (max-width: 450px) {
    gap: 10px;
    margin-right: 3vw;
  }
`;

const AuthButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 26px;
  gap: 10px;
  background: #ffffff;
  border-radius: 2px;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: #2b2c34;
  cursor: pointer;

  @media only screen and (max-width: 450px) {
    font-size: 12px;
    padding: 8px 18px;
  }
`;

const LandingpageNav = () => {
  const { fetchLocalUserData } = UserCookie();

  const [renderNav, setRenderNav] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLocalUserData()
      .then(() => {
        setRenderNav(false);
      })
      .catch(() => {
        setRenderNav(true);
      });
  }, []);

  const navigationHandler = (link: string) => {
    topNavigator();
    navigate(link);
  };
  return renderNav ? (
    <Header>
      <ImageContainer onClick={() => navigationHandler("/")}>
        <img src={TNLLogo} alt="tnl-logo" />
      </ImageContainer>
      <AuthButtons>
        <AuthButton
          className="signin"
          onClick={() => navigationHandler("/signin")}
        >
          Login
        </AuthButton>
        <AuthButton
          className="signup"
          onClick={() => navigationHandler("/signup")}
        >
          Signup
        </AuthButton>
      </AuthButtons>
    </Header>
  ) : null;
};

export default LandingpageNav;

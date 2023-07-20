import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { topNavigator } from "../../utils/helperFunctions";
import { styled } from "styled-components";
import TNLLogo from "../../assets/tnl-logo.png";
import { UserCookie } from "../../utils/userCookie";

const Header = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  /* padding: 20px 4vw 0; */
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
`;

const AuthButtons = styled.div`
  /* border: 1px solid red; */
  display: flex;
  margin-right: 4vw;
  align-items: center;
  justify-content: center;
  /* margin-right: 4rem; */
  gap: 20px;

  div.signup {
    background: #3da9fc;
    color: #fffffe;
  }

  div.signin {
    background: #ef4565;
    color: #fffffe;
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
  margin-right: 10px;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: #2b2c34;
  cursor: pointer;
`;

const LandingpageNav = () => {
  const { fetchLocalUserData } = UserCookie();

  const [renderNav, setRenderNav] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLocalUserData()
      .then((user) => {
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
      <ImageContainer onClick={() => navigationHandler("/teachNlearn")}>
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

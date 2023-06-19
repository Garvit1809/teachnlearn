import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { getHeaders } from "../../utils/helperFunctions";
import { localStorageUser } from "../../utils/globalConstants";

const Section = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  padding: 20px 28px;
  gap: 22px;
  background: #332ad5;
  border-radius: 61px;
  color: white;
`;

interface ToggleCheckedProps {
  isChecked: boolean;
}

const Slider = styled.span<ToggleCheckedProps>`
  position: absolute;
  cursor: pointer;

  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;

  background-color: #ccc;
  border-radius: 25px;

  &::before {
    border-radius: 20px;
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    transform: ${(props) => (props.isChecked ? "translateX(26px)" : "none")};
  }
`;

const ToggleBtn = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  background-color: white;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const LearnText = styled.span<ToggleCheckedProps>`
  color: ${(props) => (props.isChecked ? "#C2B9F9" : "#FFFFFF")};
  transition: 0.5s;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
`;

const TeachText = styled.span<ToggleCheckedProps>`
  transition: 0.5s;
  color: ${(props) => (!props.isChecked ? "#C2B9F9" : "#FFFFFF")};
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
`;

interface toggleProps {
  userToken: string;
}

const ModeToggle = (props: toggleProps) => {
  const [mode, setMode] = useState("learn");

  const toggleHandler = async () => {
    if (mode == "learn") {
      await axios
        .patch(
          `${BASE_URL}${apiVersion}/user/myMode`,
          {
            mode: "teach",
          },
          {
            headers: getHeaders(props.userToken ?? ""),
          }
        )
        .then(({ data }) => {
          const user = data.updatedUser;
          user.token = props.userToken;
          console.log(user);
          localStorage.setItem(localStorageUser, JSON.stringify(user));
        });
      setMode("teach");
    } else {
      await axios
        .patch(
          `${BASE_URL}${apiVersion}/user/myMode`,
          {
            mode: "learn",
          },
          {
            headers: getHeaders(props.userToken ?? ""),
          }
        )
        .then(({ data }) => {
          const user = data.updatedUser;
          user.token = props.userToken;
          console.log(user);
          localStorage.setItem(localStorageUser, JSON.stringify(user));
        });
      setMode("learn");
    }
  };

  return (
    <Section>
      <LearnText isChecked={mode == "learn"}>Teach Mode</LearnText>
      <ToggleBtn>
        <input
          type="checkbox"
          checked={mode == "learn"}
          onClick={toggleHandler}
        />
        <Slider className="slider" isChecked={mode == "learn"} />
      </ToggleBtn>
      <TeachText isChecked={mode == "learn"}>Learn Mode</TeachText>
    </Section>
  );
};

export default ModeToggle;

import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { getHeaders } from "../../utils/helperFunctions";
import { localStorageUser } from "../../utils/globalConstants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserCookie } from "../../utils/userCookie";

const Section = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  justify-content: center;
  padding: 20px 28px;
  background: #094067;
  border-radius: 61px;
  gap: 22px;
  color: white;

  @media only screen and (max-width: 1000px) {
    /* padding: 20px 22px; */
    /* font-size: 16px; */
  }

  @media only screen and (max-width: 600px) {
    /* grid-template-columns: 1fr; */
    /* gap: 16px; */
    /* font-size: 14px; */
  }
`;

interface ToggleCheckedProps {
  isChecked: boolean;
}

const Slider = styled.span<ToggleCheckedProps>`
  position: absolute;
  cursor: pointer;
  /* border: 1px solid red; */

  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;

  background-color: #ccc;
  background-color: #ffffff;
  border-radius: 25px;

  &::before {
    border-radius: 20px;
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 2px;
    background-color: #674ff1;
    background-color: #3da9fc;
    transition: 0.4s;
    transform: ${(props) => (props.isChecked ? "translateX(26px)" : "none")};
  }
`;

const ToggleBtn = styled.label`
  /* border: 1px solid red; */
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

  @media only screen and (max-width: 400px) {
    /* width: 54px; */
    /* height: 26px; */
  }
`;

const LearnText = styled.span<ToggleCheckedProps>`
  color: ${(props) => (props.isChecked ? "#C2B9F9" : "#FFFFFF")};
  transition: 0.5s;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;

  @media only screen and (max-width: 800px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 400px) {
    /* font-size: 14px; */
  }
`;

const TeachText = styled.span<ToggleCheckedProps>`
  transition: 0.5s;
  color: ${(props) => (!props.isChecked ? "#C2B9F9" : "#FFFFFF")};
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;

  @media only screen and (max-width: 800px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 400px) {
    /* font-size: 14px; */
  }
`;

interface toggleProps {
  userToken: string;
  role: string;
}

const ModeToggle = (props: toggleProps) => {
  // console.log("ROLE :- " + props.role);

  // const [mode, setMode] = useState(props.role);

  // const [localUser, setLocalUser] = useState<userProps>();
  const [mode, setMode] = useState<string>();

  const { fetchLocalUserData } = UserCookie();

  useEffect(() => {
    fetchLocalUserData().then((user) => {
      setMode(user.role);
    });

    window.addEventListener("storage", () => {
      console.log("Change to local storage!");
      fetchLocalUserData().then((user) => {
        setMode(user.role);
      });
    });
  }, []);

  const toastOptions = {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 1000,
    pauseOnHover: true,
    draggable: true,
  };

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
          window.dispatchEvent(new Event("storage"));
          toast.success("Mode updated", toastOptions);
        })
        .catch((data) => {
          toast.error("Mode couldn't be updated", toastOptions);
          // toast.error(data.response.data.message, toastOptions);
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
          window.dispatchEvent(new Event("storage"));
          toast.success("Mode updated", toastOptions);
        })
        .catch((data) => {
          toast.error(data.response.data.message);
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
      <ToastContainer theme="dark" />
    </Section>
  );
};

export default ModeToggle;

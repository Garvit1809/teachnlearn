import styled from "styled-components";
import { useState, useEffect } from "react";
import { UserCookie } from "../../utils/userCookie";
import { useNavigate } from "react-router-dom";
import { topNavigator } from "../../utils/helperFunctions";

interface styleProps {
  imgBorder?: string;
  textColor?: string;
  imgSize?: string;
  textSize?: string;
}

const Section = styled.div<styleProps>`
  display: flex;
  align-items: center;
  /* background-color: grey; */
  /* border: 1px solid red; */
  /* border-radius: 4px; */
  /* padding: 12px 16px; */

  img {
    width: ${(p) => p.imgSize || "28px"};
    height: ${(p) => p.imgSize || "28px"};
    border: ${(p) => `1px solid ${p.imgBorder}`};
    border-radius: 50%;
    object-fit: cover;
    margin-right: 0.4rem;
    cursor: pointer;
  }

  span {
    cursor: pointer;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: ${(p) => (p.textSize ? p.textSize : "20px")};
    line-height: 27px;
    color: ${(p) => p.textColor};
    /* transition: 0.15s all ease; */

    /* &:hover { */
    /* text-decoration: underline; */
    /* } */
  }
`;

interface userchipProps {
  name: string;
  photo?: string;
  imgBorder?: string;
  textColor?: string;
  imgSize?: string;
  textSize?: string;
  userId: string;
  shouldntNavigate?: boolean;
}

const UserChip = ({
  name,
  photo,
  imgBorder,
  textColor,
  imgSize,
  textSize,
  userId,
  shouldntNavigate,
}: userchipProps) => {
  const [localUserId, setLocalUserId] = useState<string>("");

  const { fetchLocalUserData } = UserCookie();

  useEffect(() => {
    fetchLocalUserData().then((data) => {
      setLocalUserId(data._id);
    });
  }, []);

  const navigate = useNavigate();

  const userNavigationHandler = () => {
    topNavigator();
    if (localUserId == userId) {
      navigate("/me");
    } else {
      navigate(`/user/${userId}`, {
        state: {
          userId: userId,
        },
      });
    }
  };

  return (
    <Section
      onClick={shouldntNavigate ? undefined : userNavigationHandler}
      imgBorder={imgBorder}
      textColor={textColor}
      imgSize={imgSize}
      textSize={textSize}
    >
      <img src={photo} alt="user-img" />
      <span>{name}</span>
    </Section>
  );
};

export default UserChip;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { BASE_URL, apiVersion } from "../../../utils/apiRoutes";
import { getHeaders } from "../../../utils/helperFunctions";
import { toast } from "react-toastify";
import { localStorageUser } from "../../../utils/globalConstants";

interface styleProps {
  isFavourite: boolean;
}

const Section = styled.div<styleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  /* background: #ef4565; */
  background: ${(p) =>
    p.isFavourite ? "rgba(239, 69, 101, 0.6)" : "rgb(239, 69, 101)"};
  border-radius: 41px;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  color: #ffffff;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 1rem;
`;

interface favouriteUserProps {
  userToken: string;
  favouriteUsers: string[];
}

const FavouriteUser = (props: favouriteUserProps) => {
  const [userId, setUserId] = useState<string>("");

  const location = useLocation();
  useEffect(() => {
    const id = location.state.userId;
    setUserId(id);
  }, [location]);

  const toastOptions = {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
  };

  const favouriteUserHandler = async () => {
    console.log(userId);

    await axios
      .patch(
        `${BASE_URL}${apiVersion}/user/${userId}/addfavourite`,
        {},
        {
          headers: getHeaders(props.userToken),
        }
      )
      .then(({ data }) => {
        console.log(data.updatedUser);
        const favouriteusers = data.updatedUser.favouriteUsers;
        let user = data.updatedUser;
        user.token = props.userToken;
        localStorage.setItem(localStorageUser, JSON.stringify(user));
        window.dispatchEvent(new Event("storage"));
        if (favouriteusers.includes(userId)) {
          toast.success("User added to favourites", toastOptions);
        } else {
          toast.success("User removed from favourites", toastOptions);
        }
      })
      .catch(() => {
        toast.error("Couldnt make changes!!", toastOptions);
      });
  };

  return (
    <Section
      isFavourite={props.favouriteUsers.includes(userId)}
      onClick={favouriteUserHandler}
    >
      Add to favourites
    </Section>
  );
};

export default FavouriteUser;

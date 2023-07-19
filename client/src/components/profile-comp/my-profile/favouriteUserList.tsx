import React, { useEffect, useState } from "react";
import { UserCookie } from "../../../utils/userCookie";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../../utils/apiRoutes";
import { getHeaders, topNavigator } from "../../../utils/helperFunctions";
import { styled } from "styled-components";
import Loader from "../../general-components/loader";
import UserList from "./userList";
import { userListProps } from "../../../types/userListProps";

const FavouriteUserWrapper = styled.div`
  /* border: 1px solid red; */
  padding-top: 1rem;
  /* display: flex; */
  /* flex-direction: column; */
  /* row-gap: 1.6rem; */
  margin-left: 1rem;
`;

const FavouriteUserList = () => {
  const [localUserId, setlocalUserId] = useState<string>("");
  const [userToken, setUserToken] = useState<string>("");
  const [isLoading, setisLoading] = useState(false);
  const { fetchLocalUserData } = UserCookie();

  const [favouriteusers, setFavouriteusers] = useState<Array<userListProps>>();

  useEffect(() => {
    fetchLocalUserData().then((user) => {
      setUserToken(user.token);
      setlocalUserId(user._id);
    });
  }, []);

  const fetchUserFavourites = async () => {
    setisLoading(true);
    await axios
      .get(`${BASE_URL}${apiVersion}/user/myfavourites`, {
        headers: getHeaders(userToken),
      })
      .then(({ data }) => {
        console.log(data);
        setFavouriteusers(data.userFavourites.favouriteUsers);
        setisLoading(false);
      })
      .catch((data) => {
        console.log(data);
        setisLoading(false);
      });
  };

  useEffect(() => {
    if (userToken) {
      fetchUserFavourites();
    }
  }, [userToken]);

  return (
    <FavouriteUserWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        favouriteusers && (
          <UserList userArr={favouriteusers} localUserId={localUserId} />
        )
      )}
    </FavouriteUserWrapper>
  );
};

export default FavouriteUserList;

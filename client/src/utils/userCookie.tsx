import React, { useEffect, useState } from "react";
import { localStorageUser } from "./globalConstants";

export interface userProps {
  _id: string;
  name: string;
  userName: string;
  photo: string;
  tagline: string;
  email: string;
  coins: number;
  enrolledProgramme: string;
  phoneNumber: string;
  classesEnrolled: string[];
  classesTaken: string[];
  interestedSubjects: string[];
  strongSubjects: string[];
  preferredLanguages: string[];
  token: string;
}

export function UserCookie() {
  const [localUser, setLocalUser] = useState<userProps>();
  const [userToken, setUserToken] = useState(localUser?.token);

  useEffect(() => {
    setUserToken(localUser?.token);
  }, [localUser]);

  async function fetchLocalUserData() {
    const data = await JSON.parse(
      localStorage.getItem(localStorageUser) || "{}"
    );
    // console.log(data);
    setLocalUser(data);
    return data;
  }

  async function fetchLocalUserToken() {
    const data = await JSON.parse(
      localStorage.getItem(localStorageUser) || "{}"
    );
    return data.token;
  }

  async function fetchUserCredit() {
    const data = await JSON.parse(
      localStorage.getItem(localStorageUser) || "{}"
    );
    return data.coins;
  }

  return {
    localUser,
    setLocalUser,
    userToken,
    fetchLocalUserData,
    fetchLocalUserToken,
    fetchUserCredit,
  };
}

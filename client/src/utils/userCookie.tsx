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
  role: string;
  enrolledProgramme: string;
  phoneNumber: string;
  classesEnrolled: classroom[];
  classesTaken: string[];
  interestedSubjects: string[];
  strongSubjects: string[];
  preferredLanguages: string[];
  token: string;
}

export interface classroom {
  class: string;
  endsAt: string;
  isReviewed: boolean;
}

export function UserCookie() {
  const [localUser, setLocalUser] = useState<userProps>();
  const [userToken, setUserToken] = useState(localUser?.token);

  useEffect(() => {
    setUserToken(localUser?.token);
  }, [localUser]);

  async function fetchLocalUserData() {
    const user = localStorage.getItem(localStorageUser);
    let data;
    if (user) {
      data = await JSON.parse(user);
    }
    setLocalUser(data);
    return data;
  }

  async function fetchLocalUserToken() {
    const user = localStorage.getItem(localStorageUser);
    let data;
    if (user) {
      data = await JSON.parse(user);
    }
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

import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BASE_URL, apiVersion } from "../../../utils/apiRoutes";
import { getHeaders } from "../../../utils/helperFunctions";

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 28px;
  gap: 28px;
  background: #094067;
  border-radius: 36px;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;

  h4 {
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.02em;
    color: #ffffff;
  }
`;

export const ProfileStatContainer = styled.div`
  /* border: 1px solid white; */
  /* width: 100%; */
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  padding: 0px;
  gap: 60px;

  div {
    /* border: 1px solid white; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;

    h5 {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 27px;
      text-align: center;
      letter-spacing: 0.02em;
      color: rgba(255, 255, 255, 0.9);
    }

    h3 {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 41px;
      text-align: center;
      letter-spacing: 0.02em;
      color: #ffffff;
    }
  }
`;

interface profileStatProps {
  taught: number;
  userToken: string;
  userId: string;
}

const ProfileStats = (props: profileStatProps) => {
  console.log(props.userId);

  const [userRating, setUserRating] = useState<number>(0);
  const [userTotalRatings, setUserTotalRatings] = useState<number>(0);

  async function fetchUserRating() {
    await axios
      .get(`${BASE_URL}${apiVersion}/user/${props.userId}/myratings`, {
        headers: getHeaders(props.userToken),
      })
      .then(({ data }) => {
        console.log(data);
        if (data.stats[0]) {
          setUserTotalRatings(data.stats[0].nRatings);
          setUserRating(data.stats[0].avgRating);
        }
      });
  }

  useEffect(() => {
    if (props.userToken && props.userId) {
      fetchUserRating();
    }
  }, [props.userToken, props.userId]);

  return (
    <ProfileSection>
      <ProfileHeader>
        <h4>Stats as a Teacher</h4>
      </ProfileHeader>
      <ProfileStatContainer>
        <div>
          <h5>Taught</h5>
          <h3>{props.taught}</h3>
        </div>
        <div>
          <h5>Total Ratings</h5>
          <h3>{userTotalRatings}</h3>
        </div>
        <div>
          <h5>Average Rating</h5>
          <h3>{Math.round(userRating * 10) / 10} / 10</h3>
        </div>
      </ProfileStatContainer>
    </ProfileSection>
  );
};

export default ProfileStats;

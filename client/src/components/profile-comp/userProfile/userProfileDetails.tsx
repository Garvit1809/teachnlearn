import React, { useEffect, useState } from "react";
import { UserDetails, UserProfileSection } from "../my-profile/myProfile";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../../utils/apiRoutes";
import { useLocation } from "react-router-dom";
import { getHeaders } from "../../../utils/helperFunctions";
import { UserCookie, userProps } from "../../../utils/userCookie";
import Loader from "../../general-components/loader";
import styled from "styled-components";
import ProfileStats from "../my-profile/profileStats";
import AcademicContainer from "../my-profile/academicContainer";
import ContactContainer from "../my-profile/contactContainer";

const UserContainer = styled.div`
  width: 100%;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: max-content auto;
  padding: 30px 28px;
  padding-right: 24px;
  gap: 1.2rem;
  /* margin-top: 1rem; */

  border: 1px solid #d5d9eb;
  border-radius: 32px;
`;

const ImageContainer = styled.div`
  box-sizing: border-box;
  width: 84.54px;
  height: 84.54px;
  padding: 2px;
  border: 0.87156px solid #d5d9eb;
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: block;
    object-fit: cover;
    z-index: 1;
  }
`;

const UserProfileDetails = () => {
  const [userId, setUserId] = useState<string>();

  const [userToken, setUserToken] = useState<string>("");

  const { fetchLocalUserData } = UserCookie();

  useEffect(() => {
    fetchLocalUserData().then((data) => {
      setUserToken(data.token);
      console.log("TOKEN :- " + data.token);
    });
  }, []);

  const location = useLocation();
  useEffect(() => {
    const id = location.state.userId;
    console.log(id);

    setUserId(id);
  }, [location]);

  const [userDetails, setUserDetails] = useState<userProps>();

  const fetchUserDetails = async () => {
    console.log("Heelo");

    await axios
      .get(`${BASE_URL}${apiVersion}/user/${userId}`, {
        headers: getHeaders(userToken),
      })
      .then(({ data }) => {
        console.log(data);
        setUserDetails(data.user);
      });
  };

  useEffect(() => {
    console.log("Render");
    if (userId && userToken) {
      fetchUserDetails();
    }
  }, [userToken, userId]);

  return (
    <UserProfileSection>
      {!userDetails ? (
        <Loader />
      ) : (
        <>
          <UserContainer>
            <ImageContainer>
              <img src={userDetails.photo} alt="user-img" />
            </ImageContainer>
            <UserDetails>
              <div className="user-name">
                <h4>{userDetails.name}</h4>
                <h5>@{userDetails.userName}</h5>
              </div>
              <p>{userDetails.tagline}</p>
            </UserDetails>
          </UserContainer>
          <ProfileStats
            attended={userDetails.classesEnrolled.length}
            taught={userDetails.classesTaken.length}
            userId={userDetails._id}
            userToken={userToken}
          />
          <AcademicContainer
            course={userDetails.enrolledProgramme}
            interstedSubjects={userDetails.interestedSubjects}
            preferredLanguages={userDetails.preferredLanguages}
            strongSubjects={userDetails.strongSubjects}
          />
        </>
      )}
    </UserProfileSection>
  );
};

export default UserProfileDetails;

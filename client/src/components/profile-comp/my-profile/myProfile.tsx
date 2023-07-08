import { useEffect, useState } from "react";
import styled from "styled-components";

import ModeToggle from "../modeToggle";
import EditBtn from "./editBtn";
import ContactInfo, { customStyles } from "./contactInfo";
import AcademicInfo from "./academicInfo";
import Modal from "react-modal";
import UserInfoModal from "./profileModals/userInfoModal";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../../utils/apiRoutes";
import { getHeaders } from "../../../utils/helperFunctions";
import { UserCookie } from "../../../utils/userCookie";
import ProfileStats from "./profileStats";
import ProfileImage from "./profileImage";
import { localStorageUser } from "../../../utils/globalConstants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Section = styled.div`
  /* border: 1px solid red; */
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 44px;
  /* width: 95%; */
`;

const Header = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Heading = styled.h3`
  font-size: 26px;
  line-height: 41px;
  color: #000000;
`;

const UserContainer = styled.div`
  width: 100%;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: max-content auto 10%;
  padding: 30px 28px;
  padding-right: 24px;
  gap: 1.2rem;
  /* margin-top: 1rem; */

  border: 1px solid #d5d9eb;
  border-radius: 32px;
`;

const UserDetails = styled.div`
  /* border: 2px solid red; */
  width: 100%;

  h4 {
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.02em;
    color: #000000;
    margin-bottom: 0.2rem;
  }

  p {
    /* border: 2px solid red; */
    width: 90%;
    line-height: 1.2;

    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0.02em;
    color: #697586;
  }
`;

export interface userProps {
  _id: string;
  name: string;
  userName: string;
  photo: string;
  tagline: string;
  email: string;
  enrolledProgramme: string;
  role: string;
  phoneNumber: string;
  classesEnrolled: string[];
  classesTaken: string[];
  interestedSubject: string;
  interestedSubjects: string[];
  strongSubject: string;
  strongSubjects: string[];
  language: string;
  preferredLanguages: string[];
  token: string;
}

const initialData: userProps = {
  _id: "",
  name: "",
  userName: "",
  photo: "",
  tagline: "",
  email: "",
  enrolledProgramme: "",
  phoneNumber: "",
  role: "",
  classesEnrolled: [],
  classesTaken: [],
  interestedSubject: "",
  interestedSubjects: [],
  strongSubject: "",
  strongSubjects: [],
  language: "",
  preferredLanguages: [],
  token: "",
};

const MyProfile = () => {
  const [localUser, setLocalUser] = useState<userProps>(initialData);
  const [userToken, setUserToken] = useState<string>("");

  const { fetchLocalUserToken } = UserCookie();

  useEffect(() => {
    fetchLocalUserToken().then((token) => {
      setUserToken(token);
    });

    // window.addEventListener("storage", () => {
    //   console.log("Change to local storage!");
    //   fetchLocalUserToken().then((token) => {
    //     setUserToken(token);
    //   });
    // });
  }, []);

  async function fetchMyDetails() {
    await axios
      .get(`${BASE_URL}${apiVersion}/user/me`, {
        headers: getHeaders(userToken),
      })
      .then(({ data }) => {
        const user = data.data.data[0];
        user.token = userToken;
        console.log(user);
        setLocalUser(user);
      });
  }

  useEffect(() => {
    if (userToken) {
      fetchMyDetails();
    }
  }, [userToken]);

  function updateFields(fields: Partial<userProps>) {
    if (localUser) {
      setLocalUser((prev) => {
        return { ...prev, ...fields };
      });
    }
  }

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return localUser._id.length != 0 ? (
    <Section>
      <Header>
        <Heading>My profile</Heading>
        <ModeToggle userToken={localUser.token} role={localUser.role} />
      </Header>
      <UserContainer>
        <ProfileImage
          photo={localUser.photo}
          updateFields={updateFields}
          userToken={localUser.token}
        />
        <UserDetails>
          <h4>{localUser.name}</h4>
          {localUser.tagline ? (
            <p>{localUser.tagline}</p>
          ) : (
            <p>Add Tagline for your profile ...</p>
          )}
        </UserDetails>
        <EditBtn onClickFunc={openModal} />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
        >
          <UserInfoModal
            name={localUser.name}
            tagline={localUser.tagline}
            // updateFields={updateFields}
            userToken={localUser.token}
            closeModal={closeModal}
          />
        </Modal>
      </UserContainer>
      <ProfileStats
        attended={localUser.classesEnrolled.length}
        taught={localUser.classesTaken.length}
        userId={localUser._id}
        userToken={localUser.token}
      />
      <ContactInfo
        username={localUser.userName}
        email={localUser.email}
        phone={localUser.phoneNumber}
        updateFields={updateFields}
        userToken={userToken}
      />
      <AcademicInfo
        course={localUser.enrolledProgramme}
        strongSubjects={localUser.strongSubjects}
        interestedSubject={localUser.interestedSubject}
        interstedSubjects={localUser.interestedSubjects}
        language={localUser.language}
        strongSubject={localUser.strongSubject}
        preferredLanguages={localUser.preferredLanguages}
        updateFields={updateFields}
        userToken={userToken}
      />
      <ToastContainer theme="dark" />
    </Section>
  ) : (
    <h3>Loading</h3>
  );
};

export default MyProfile;

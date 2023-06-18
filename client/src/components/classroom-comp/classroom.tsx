import React, { useEffect, useState } from "react";
import ClassBanner from "./classBanner";
import styled from "styled-components";
import PostAnnouncement from "./postAnnouncement";
import JoinCall from "./joinCall";
import Announcement from "./announcement";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { getHeaders } from "../../utils/helperFunctions";

const ClassroomContainer = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 1.3fr 3fr;
`;

const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const Announcements = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
`;

interface classProps {
  topic: string;
  cardBanner: string;
  callLink: string;
  isTeacher: boolean;
  teachCardId: string;
  userToken: string;
}

export interface announcementProps {
  classroom: string;
  comments: [];
  content: string;
  createdAt: string;
  sender: {
    _id: string;
    name: string;
    photo: string;
  };
  _id: string;
}

const Classroom = (props: classProps) => {
  const [announcements, setAnnouncements] =
    useState<Array<announcementProps>>();

  async function fetchAnnouncements() {
    await axios
      .get(
        `${BASE_URL}${apiVersion}/teach/${props.teachCardId}/announcements`,
        {
          headers: getHeaders(props.userToken ?? ""),
        }
      )
      .then(({ data }) => {
        console.log(data.announcements);
        setAnnouncements(data.announcements);
      });
  }

  useEffect(() => {
    if (props.userToken) {
      fetchAnnouncements();
    }
  }, [props.userToken]);

  return (
    <>
      <ClassBanner img={props.cardBanner} title={props.topic} />
      <ClassroomContainer>
        <AdminContainer>
          {props.isTeacher && (
            <PostAnnouncement teachCardId={props.teachCardId} />
          )}
          <JoinCall callLink={props.callLink} />
        </AdminContainer>
        <Announcements>
          {announcements &&
            announcements.map((announcement, index) => {
              return <Announcement {...announcement} key={index} />;
            })}
        </Announcements>
      </ClassroomContainer>
    </>
  );
};

export default Classroom;

import React from "react";
import ClassBanner from "./classBanner";
import styled from "styled-components";
import PostAnnouncement from "./postAnnouncement";
import JoinCall from "./joinCall";
import Announcement from "./announcement";

const ClassroomContainer = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 1.3fr 3fr;
`;

const AdminContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`

const Announcements = styled.div`
 /* border: 1px solid red; */
 display: flex;
 flex-direction: column;
`

const Classroom = () => {
  return (
    <>
      <ClassBanner />
      <ClassroomContainer>
        <AdminContainer>
            <PostAnnouncement />
            <JoinCall />
        </AdminContainer>
        <Announcements>
            <Announcement />
        </Announcements>
      </ClassroomContainer>
    </>
  );
};

export default Classroom;

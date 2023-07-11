import React, { useEffect, useState } from "react";
import ClassBanner from "./classBanner";
import styled from "styled-components";
import PostAnnouncement from "./postAnnouncement";
import JoinCall from "./joinCall";
import Announcement from "./announcement";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { getHeaders } from "../../utils/helperFunctions";
import { DATA_LIMIT } from "../../utils/globalConstants";
import LoadMore from "../general-components/loadMore";
import Loader from "../general-components/loader";

const ClassroomContainer = styled.div`
  margin: 2rem 0 4rem;
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

const NoAnnouncement = styled.h2`
  /* border: 1px solid red; */
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 600;
`;

interface classProps {
  topic: string;
  cardBanner: string;
  callLink: string;
  isTeacher: boolean;
  teachCardId: string;
  userToken: string;
  classElemType: string;
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
  const [announcements, setAnnouncements] = useState<Array<announcementProps>>(
    []
  );

  const [announcementSet, setAnnouncementSet] = useState<number>(1);
  const [dataLimit, setDataLimit] = useState(2);
  const [hasMoreData, sethasMoreData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loaderLoading, setLoaderLoading] = useState(true);

  const checkMoreData = (arr: Array<any>) => {
    if (arr.length == 0) {
      sethasMoreData(false);
      return;
    } else if (arr.length % dataLimit != 0) {
      sethasMoreData(false);
      return;
    }
    sethasMoreData(true);
  };

  async function fetchAnnouncements() {
    setLoaderLoading(true);
    await axios
      .get(
        `${BASE_URL}${apiVersion}/teach/${props.teachCardId}/announcements`,
        {
          params: {
            limit: DATA_LIMIT,
            page: announcementSet,
          },
          headers: getHeaders(props.userToken ?? ""),
        }
      )
      .then(({ data }) => {
        console.log(data.announcements);
        checkMoreData(data.announcements);
        setAnnouncements((prev) => [...prev, ...data.announcements]);
        setIsLoading(false);
        setLoaderLoading(false);
        setAnnouncementSet((prev) => prev + 1);
      })
      .catch((data) => {
        console.log(data);
        setIsLoading(false);
        setLoaderLoading(false);
        setLoaderLoading(false);
      });
  }

  useEffect(() => {
    if (props.userToken) {
      fetchAnnouncements();
    }

    window.addEventListener("announcement", () => {
      console.log("Announcement added!");
      fetchAnnouncements();
    });
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
        {isLoading ? (
          <Loader />
        ) : announcements?.length != 0 ? (
          <Announcements>
            {announcements &&
              announcements.map((announcement, index) => {
                return <Announcement {...announcement} userToken={props.userToken} key={index} />;
              })}
          </Announcements>
        ) : (
          <NoAnnouncement>No announcements yet!!</NoAnnouncement>
        )}
      </ClassroomContainer>
      {announcements && hasMoreData && (
        <LoadMore loaderLoading={loaderLoading} onClick={fetchAnnouncements} />
      )}
    </>
  );
};

export default Classroom;

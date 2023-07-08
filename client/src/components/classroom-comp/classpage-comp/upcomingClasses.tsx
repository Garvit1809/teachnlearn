import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { teachCardProps } from "../../../pages/classroom/classrooms";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../../utils/apiRoutes";
import { getHeaders } from "../../../utils/helperFunctions";
import { classElemProps } from "./allClasses";
import ClassroomGrid from "../classroomGrid";
import { teachinCardProps } from "../../../types/teachingCardType";
import NoClassComp from "../noClassComp";
import LoadMore from "../../general-components/loadMore";
import { DATA_LIMIT } from "../../../utils/globalConstants";
import Loader from "../../general-components/loader";

const Section = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
`;

const UpcomingClasses = (props: classElemProps) => {
  const [teachCards, setTeachCards] = useState<Array<teachinCardProps>>([]);

  const [upcomingClassSet, setUpcomingClassSet] = useState<number>(1);
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

  async function fetchAllUpcomingClasses() {
    setLoaderLoading(true);
    await axios
      .get(`${BASE_URL}${apiVersion}/user/myclasses/upcoming`, {
        params: {
          sort: "-classStartsAt",
          limit: DATA_LIMIT,
          page: upcomingClassSet,
        },
        headers: getHeaders(props.userToken ?? ""),
      })
      .then(({ data }) => {
        const classes = data.upcomingClasses;
        console.log(classes);
        checkMoreData(classes);
        setTeachCards((prev) => [...prev, ...classes]);
        setIsLoading(false);
        setLoaderLoading(false);
        setUpcomingClassSet((prev) => prev + 1);
      })
      .catch((data) => {
        console.log(data);
        setIsLoading(false);
        setLoaderLoading(false);
      });
  }

  useEffect(() => {
    if (props.userToken) {
      fetchAllUpcomingClasses();
    }
  }, [props.userToken]);

  return (
    <Section>
      {isLoading ? (
        <Loader />
      ) : teachCards.length != 0 ? (
        <ClassroomGrid teachCards={teachCards} elemType="upcoming" />
      ) : (
        <NoClassComp
          elemLink="all classes"
          heading="No upcoming classes"
          subHeading="You don't have any upcoming classes. Enroll in a class and start your
        learning"
        />
      )}
      {teachCards && hasMoreData && (
        <LoadMore
          loaderLoading={loaderLoading}
          onClick={fetchAllUpcomingClasses}
        />
      )}
    </Section>
  );
};

export default UpcomingClasses;

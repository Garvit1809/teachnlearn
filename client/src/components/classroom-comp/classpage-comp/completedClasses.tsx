import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { teachCardProps } from "../../../pages/classroom/classrooms";
import { classElemProps } from "./allClasses";
import { BASE_URL, apiVersion } from "../../../utils/apiRoutes";
import { getHeaders } from "../../../utils/helperFunctions";
import axios from "axios";
import ClassroomGrid from "../classroomGrid";
import { teachinCardProps } from "../../../types/teachingCardType";
import { DATA_LIMIT } from "../../../utils/globalConstants";
import LoadMore from "../../general-components/loadMore";
import NoClassComp from "../noClassComp";
import Loader from "../../general-components/loader";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
`;

const CompletedClasses = (props: classElemProps) => {
  const [teachCards, setTeachCards] = useState<Array<teachinCardProps>>([]);

  const [completedClassSet, setCompletedClassSet] = useState<number>(1);
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

  async function fetchAllCompletedClasses() {
    setLoaderLoading(true);
    await axios
      .get(`${BASE_URL}${apiVersion}/user/myclasses/completed`, {
        params: {
          sort: "-classStartsAt",
          limit: DATA_LIMIT,
          page: completedClassSet,
        },
        headers: getHeaders(props.userToken ?? ""),
      })
      .then(({ data }) => {
        console.log(data);
        const classes = data.completedClasses;
        checkMoreData(classes);
        setTeachCards((prev) => [...prev, ...classes]);
        setIsLoading(false);
        setLoaderLoading(false);
        setCompletedClassSet((prev) => prev + 1);
      })
      .catch((data) => {
        console.log(data);
        setIsLoading(false);
        setLoaderLoading(false);
      });
  }

  useEffect(() => {
    if (props.userToken) {
      fetchAllCompletedClasses();
    }
  }, [props.userToken]);

  return (
    <Section>
      {isLoading ? (
        <Loader />
      ) : teachCards.length != 0 ? (
        <ClassroomGrid teachCards={teachCards} elemType="completed" />
      ) : (
        <NoClassComp
          elemLink="upcoming"
          heading="No Completed Classes"
          subHeading="You don't have any completed classes. Check your enrolled classes"
        />
      )}
      {teachCards && hasMoreData && (
        <LoadMore
          loaderLoading={loaderLoading}
          onClick={fetchAllCompletedClasses}
        />
      )}
    </Section>
  );
};

export default CompletedClasses;

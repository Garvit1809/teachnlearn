import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BASE_URL, apiVersion } from "../../../utils/apiRoutes";
import { getHeaders } from "../../../utils/helperFunctions";
import axios from "axios";
import ClassroomGrid from "../classroomGrid";
import { teachinCardProps } from "../../../types/teachingCardType";
import { DATA_LIMIT } from "../../../utils/globalConstants";
import Loader from "../../general-components/loader";
import LoadMore from "../../general-components/loadMore";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
`;

export interface classElemProps {
  userToken: string;
}

const AllClasses = (props: classElemProps) => {
  const [teachCards, setTeachCards] = useState<Array<teachinCardProps>>([]);

  const [classSet, setClassSet] = useState<number>(1);
  const [hasMoreData, sethasMoreData] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [loaderLoading, setLoaderLoading] = useState(true);

  const checkMoreData = (arr: Array<any>) => {
    if (arr.length == 0) {
      sethasMoreData(false);
      return;
    } else if (arr.length % DATA_LIMIT != 0) {
      sethasMoreData(false);
      return;
    }
    sethasMoreData(true);
  };

  async function fetchAllTeachCards() {
    setLoaderLoading(true);
    await axios
      .get(`${BASE_URL}${apiVersion}/teach`, {
        params: {
          sort: "classStartsAt",
          limit: DATA_LIMIT,
          page: classSet,
        },
        headers: getHeaders(props.userToken ?? ""),
      })
      .then(({ data }) => {
        console.log(data.teachCards);
        const classes = data.teachCards;
        checkMoreData(classes);
        setTeachCards((prev) => [...prev, ...classes]);
        setIsLoading(false);
        setLoaderLoading(false);
        setClassSet((prev) => prev + 1);
      })
      .catch((data) => {
        console.log(data);
        setIsLoading(false);
        setLoaderLoading(false);
      });
  }

  useEffect(() => {
    if (props.userToken) {
      fetchAllTeachCards();
    }
  }, [props.userToken]);

  return (
    <Section>
      {isLoading ? (
        <Loader />
      ) : (
        teachCards.length != 0 && (
          <ClassroomGrid teachCards={teachCards} elemType="all classes" />
        )
      )}
      {teachCards && hasMoreData && (
        <LoadMore loaderLoading={loaderLoading} onClick={fetchAllTeachCards} />
      )}
    </Section>
  );
};

export default AllClasses;

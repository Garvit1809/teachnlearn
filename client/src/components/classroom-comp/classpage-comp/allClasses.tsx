import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BASE_URL, apiVersion } from "../../../utils/apiRoutes";
import { getHeaders } from "../../../utils/helperFunctions";
import axios from "axios";
import ClassroomGrid from "../classroomGrid";
import { teachinCardProps } from "../../../types/teachingCardType";

const Section = styled.div``;

export interface classElemProps {
  userToken: string;
}

const AllClasses = (props: classElemProps) => {
  const [teachCards, setTeachCards] = useState<Array<teachinCardProps>>();

  async function fetchAllTeachCards() {
    await axios
      .get(`${BASE_URL}${apiVersion}/teach`, {
        params: {
          sort: "date",
        },
        headers: getHeaders(props.userToken ?? ""),
      })
      .then(({ data }) => {
        console.log(data.teachCards);
        setTeachCards(data.teachCards);
      });
  }

  useEffect(() => {
    if (props.userToken) {
      fetchAllTeachCards();
    }
  }, [props.userToken]);

  return (
    <Section>
      {teachCards && (
        <ClassroomGrid teachCards={teachCards} elemType="all classes" />
      )}
    </Section>
  );
};

export default AllClasses;

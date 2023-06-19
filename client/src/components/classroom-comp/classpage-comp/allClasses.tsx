import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { teachCardProps } from "../../../pages/classroom/classrooms";
import { UserCookie } from "../../../utils/userCookie";
import { BASE_URL, apiVersion } from "../../../utils/apiRoutes";
import { getHeaders } from "../../../utils/helperFunctions";
import axios from "axios";
import ClassroomGrid from "../classroomGrid";
import { classroomCardProps } from "../classroomCard";

const Section = styled.div``;

export interface classElemProps {
  userToken: string;
}

const AllClasses = (props: classElemProps) => {
  const [teachCards, setTeachCards] = useState<Array<classroomCardProps>>();

  async function fetchAllTeachCards() {
    await axios
      .get(`${BASE_URL}${apiVersion}/teach`, {
        params: {
          sort: "classStartsAt",
        },
        headers: getHeaders(props.userToken ?? ""),
      })
      .then(({ data }) => {
        console.log(data.data.data);
        setTeachCards(data.data.data);
      });
  }

  useEffect(() => {
    if (props.userToken) {
      fetchAllTeachCards();
    }
  }, [props.userToken]);

  return (
    <Section>{teachCards && <ClassroomGrid teachCards={teachCards} />}</Section>
  );
};

export default AllClasses;

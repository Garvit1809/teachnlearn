import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { teachCardProps } from "../../../pages/classroom/classrooms";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../../utils/apiRoutes";
import { getHeaders } from "../../../utils/helperFunctions";
import { classElemProps } from "./allClasses";
import ClassroomGrid from "../classroomGrid";
import { classroomCardProps } from "../classroomCard";

const Section = styled.div``;

const UpcomingClasses = (props: classElemProps) => {
  const [teachCards, setTeachCards] = useState<Array<classroomCardProps>>();

  async function fetchAllUpcomingClasses() {
    await axios
      .get(`${BASE_URL}${apiVersion}/user/myclasses/upcoming`, {
        headers: getHeaders(props.userToken ?? ""),
      })
      .then(({ data }) => {
        const classes = data.upcomingClasses;
        console.log(classes);
        setTeachCards(classes);
      });
  }

  useEffect(() => {
    if (props.userToken) {
      fetchAllUpcomingClasses();
    }
  }, [props.userToken]);

  return (
    <Section>
      {teachCards && (
        <ClassroomGrid teachCards={teachCards} elemType="upcoming" />
      )}
    </Section>
  );
};

export default UpcomingClasses;

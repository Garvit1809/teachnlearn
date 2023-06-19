import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { teachCardProps } from "../../../pages/classroom/classrooms";
import { classElemProps } from "./allClasses";
import { BASE_URL, apiVersion } from "../../../utils/apiRoutes";
import { getHeaders } from "../../../utils/helperFunctions";
import axios from "axios";
import ClassroomGrid from "../classroomGrid";
import { classroomCardProps } from "../classroomCard";

const Section = styled.div``;

const CompletedClasses = (props: classElemProps) => {
  const [teachCards, setTeachCards] = useState<Array<classroomCardProps>>();

  async function fetchAllCompletedClasses() {
    await axios
      .get(`${BASE_URL}${apiVersion}/user/myclasses/completed`, {
        headers: getHeaders(props.userToken ?? ""),
      })
      .then(({ data }) => {
        console.log(data);
        const classes = data.completedClasses;
        // console.log(classes);
        setTeachCards(classes);
      });
  }

  useEffect(() => {
    if (props.userToken) {
      fetchAllCompletedClasses();
    }
  }, [props.userToken]);

  return (
    <Section>{teachCards && <ClassroomGrid teachCards={teachCards} />}</Section>
  );
};

export default CompletedClasses;

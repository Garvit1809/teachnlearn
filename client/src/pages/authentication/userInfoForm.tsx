import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Inputholder from "../../components/general-components/input/inputholder";
import MultipleInput from "../../components/general-components/input/multipleInput";
import ArrChip from "../../components/authentication-comp/arrChip";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  margin: auto;
  margin-bottom: 2rem;
  /* border: 1px solid red; */

  form {
    width: 90%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding: 0px; */
    padding-right: 10px;
    gap: 20px;
  }
`;

interface UserInfo {
  profilePic: string;
  number: string;
  course: string;
  interestedSubject: string;
  interestedSubjects: string[];
  strongSubject: string;
  strongSubjects: string[];
  language: string;
  preferredLanguages: string[];
}

type UserInfoFormProps = UserInfo & {
  updateFields: (fields: Partial<UserInfo>) => void;
};

const UserInfoForm = (props: UserInfoFormProps) => {
  const [interestedSubjects, setInterestedSubjects] = useState(
    props.interestedSubjects
  );

  // useEffect(() => {
  //   setInterestedSubjects((prev) => {
  //     return [...prev, props.subject];
  //   });
  // }, [props.subject]);

  return (
    <Section>
      <form action="">
        <Inputholder
          type="text"
          label="Course Enrolled"
          value={props.course}
          name="course"
          updateFields={props.updateFields}
        />
        <Inputholder
          type="text"
          label="Phone Number"
          value={props.number}
          name="number"
          updateFields={props.updateFields}
        />
        <MultipleInput
          label="Interested Subjects (Max 5)"
          value={props.interestedSubject}
          name="interestedSubjects"
          elemName="interestedSubject"
          updateFields={props.updateFields}
          arr={props.interestedSubjects}
        />
        {props.interestedSubjects.length != 0 ? (
          <ArrChip
            listArr={props.interestedSubjects}
            updateFields={props.updateFields}
            name="interestedSubjects"
          />
        ) : null}
        <MultipleInput
          label="Strong Subjects"
          value={props.strongSubject}
          elemName="strongSubject"
          name="strongSubjects"
          updateFields={props.updateFields}
          arr={props.strongSubjects}
        />
        {props.strongSubjects.length != 0 ? (
          <ArrChip
            listArr={props.strongSubjects}
            updateFields={props.updateFields}
            name="strongSubjects"
          />
        ) : null}
        <MultipleInput
          label="Preferred Languages"
          value={props.language}
          elemName="language"
          name="preferredLanguages"
          updateFields={props.updateFields}
          arr={props.preferredLanguages}
        />
        {props.preferredLanguages.length != 0 ? (
          <ArrChip
            listArr={props.preferredLanguages}
            updateFields={props.updateFields}
            name="preferredLanguages"
          />
        ) : null}
      </form>
    </Section>
  );
};

export default UserInfoForm;

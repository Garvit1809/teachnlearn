import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Inputholder from "../../components/general-components/input/inputholder";
import MultipleInput from "../../components/general-components/input/multipleInput";
import ArrChip from "../../components/authentication-comp/arrChip";
import UploadImage from "../../components/general-components/input/uploadImage";
// import { } from '../../data/PROGRAMME_LIST.json'
import { subjects } from "../../data/SUBJECT_LIST.json";
import { languages } from "../../data/LANGUAGE_LIST.json";
import { standard } from "../../data/STANDARD_LIST.json";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  margin: auto;
  margin-bottom: 2rem;

  form {
    /* border: 1px solid red; */
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
  }
`;

export const InputWrapper = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

interface UserInfo {
  photo?: string;
  number?: string;
  course: string;
  standard: string;
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
  return (
    <Section>
      <form action="">
        <UploadImage updateFields={props.updateFields} />
        <Inputholder
          type="text"
          label="Phone Number"
          value={props.number}
          name="number"
          updateFields={props.updateFields}
          placeholderText="Phone Number"
        />
        <Inputholder
          type="text"
          label="Course/Exam/Board/Degree"
          value={props.course}
          name="course"
          updateFields={props.updateFields}
          // hasDropdown={true}
          // dropdownData={}
          isRequired={true}
          placeholderText="Course/Exam/Board/Degree you are currently preparing for"
        />
        <Inputholder
          type="text"
          label="Standard/Year"
          value={props.standard}
          name="standard"
          updateFields={props.updateFields}
          isRequired={false}
          placeholderText="Standard/Year"
          hasDropdown={true}
          dropdownData={standard}
        />
        <InputWrapper>
          <MultipleInput
            label="Subjects you mostly need help in"
            value={props.interestedSubject}
            name="interestedSubjects"
            elemName="interestedSubject"
            updateFields={props.updateFields}
            arr={props.interestedSubjects}
            hasDropdown={true}
            dropdownData={subjects}
            maxLimit={5}
          />
          {props.interestedSubjects.length != 0 ? (
            <ArrChip
              listArr={props.interestedSubjects}
              updateFields={props.updateFields}
              name="interestedSubjects"
            />
          ) : null}
        </InputWrapper>
        <InputWrapper>
          <MultipleInput
            label="Subjects you can help others in"
            value={props.strongSubject}
            elemName="strongSubject"
            name="strongSubjects"
            updateFields={props.updateFields}
            arr={props.strongSubjects}
            hasDropdown={true}
            dropdownData={subjects}
            maxLimit={5}
          />
          {props.strongSubjects.length != 0 ? (
            <ArrChip
              listArr={props.strongSubjects}
              updateFields={props.updateFields}
              name="strongSubjects"
            />
          ) : null}
        </InputWrapper>
        <InputWrapper>
          <MultipleInput
            label="Preferred Languages"
            value={props.language}
            elemName="language"
            name="preferredLanguages"
            updateFields={props.updateFields}
            arr={props.preferredLanguages}
            hasDropdown={true}
            dropdownData={languages}
            maxLimit={3}
          />
          {props.preferredLanguages.length != 0 ? (
            <ArrChip
              listArr={props.preferredLanguages}
              updateFields={props.updateFields}
              name="preferredLanguages"
            />
          ) : null}
        </InputWrapper>
      </form>
    </Section>
  );
};

export default UserInfoForm;

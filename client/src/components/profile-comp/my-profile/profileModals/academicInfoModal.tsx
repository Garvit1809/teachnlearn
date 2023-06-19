import React, { useState } from "react";
import styled from "styled-components";
import { userProps } from "../myProfile";
import FormField from "../../../request-comp/formField";
import Inputholder from "../../../general-components/input/inputholder";
import MultipleInput from "../../../general-components/input/multipleInput";
import ArrChip from "../../../authentication-comp/arrChip";
import { BASE_URL, apiVersion } from "../../../../utils/apiRoutes";
import { getHeaders } from "../../../../utils/helperFunctions";
import axios from "axios";
import { localStorageUser } from "../../../../utils/globalConstants";

const Section = styled.div`
  width: 50vw;
  padding: 20px 32px;
  form {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    margin-bottom: 3rem;
    /* border: 1px solid red; */
  }
`;

const Header = styled.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  h4 {
    font-size: 16px;
    border-bottom: 1px solid black;
  }
`;

export const SubmitButton = styled.div`
  /* border: 1px solid green; */
  display: flex;
  /* align-items: flex-end; */
  justify-content: flex-end;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 40px;
    gap: 10px;
    background: #332ad5;
    border-radius: 8px;
    outline: none;
    border: none;
    cursor: pointer;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
  }
`;

const MultipleInputWrapper = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

interface AcademicProps {
  course: string;
  strongSubject: string;
  strongSubjects: string[];
  interestedSubject: string;
  interstedSubjects: Array<string>;
  language: string;
  preferredLanguages: string[];
  userToken: string;
  closeModal: any;
}

type modalProps = AcademicProps & {
  updateFields: (fields: Partial<userProps>) => void;
};

const AcademicInfoModal = (props: modalProps) => {
  const updateUserAcademicInfoHandler = async () => {
    await axios
      .patch(
        `${BASE_URL}${apiVersion}/user/myacademicInfo`,
        {
          enrolledProgramme: props.course,
          strongSubjects: props.strongSubjects,
          interestedSubjects: props.interstedSubjects,
          preferredLanguages: props.preferredLanguages,
        },
        {
          headers: getHeaders(props.userToken),
        }
      )
      .then(({ data }) => {
        console.log(data.updatedUser);
        const user = data.updatedUser;
        user.token = props.userToken;
        localStorage.setItem(localStorageUser, JSON.stringify(user));
        props.closeModal();
      });
  };

  return (
    <Section>
      <Header>
        <h4>Academic Information</h4>
      </Header>
      <form action="">
        <FormField
          elem={
            <Inputholder
              label="Entrolled Programme"
              name="course"
              type="text"
              updateFields={props.updateFields}
              value={props.course}
            />
          }
          inputDesc="Change your Course"
        />
        <FormField
          elem={
            <MultipleInputWrapper>
              <MultipleInput
                label="Strong Subjects"
                value={props.strongSubject}
                elemName="strongSubject"
                name="strongSubjects"
                arr={props.strongSubjects}
                updateFields={props.updateFields}
              />
              <ArrChip
                listArr={props.strongSubjects}
                updateFields={props.updateFields}
                name="strongSubjects"
              />
            </MultipleInputWrapper>
          }
          inputDesc="Change your Strong Subjects"
        />
        <FormField
          elem={
            <MultipleInputWrapper>
              <MultipleInput
                label="Interested Subjects"
                value={props.interestedSubject}
                elemName="interestedSubject"
                name="interstedSubjects"
                arr={props.interstedSubjects}
                updateFields={props.updateFields}
              />
              <ArrChip
                listArr={props.interstedSubjects}
                updateFields={props.updateFields}
                name="interstedSubjects"
              />
            </MultipleInputWrapper>
          }
          inputDesc="Change your Interested Subjects"
        />
        <FormField
          elem={
            <MultipleInputWrapper>
              <MultipleInput
                label="Preferred Language"
                value={props.language}
                elemName="language"
                name="preferredLanguages"
                arr={props.preferredLanguages}
                updateFields={props.updateFields}
              />
              <ArrChip
                listArr={props.preferredLanguages}
                updateFields={props.updateFields}
                name="preferredLanguages"
              />
            </MultipleInputWrapper>
          }
          inputDesc="Change your Interested Subjects"
        />
      </form>
      <SubmitButton>
        <button type="submit" onClick={updateUserAcademicInfoHandler}>
          Edit Academic Info
        </button>
      </SubmitButton>
    </Section>
  );
};

export default AcademicInfoModal;

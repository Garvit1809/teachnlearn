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
import { toast } from "react-toastify";
import { subjects } from "../../../../data/SUBJECT_LIST.json";
import { languages } from "../../../../data/LANGUAGE_LIST.json";

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
    /* background: #094067; */
    /* background: #ef4565; */
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
  strongSubjects: string[];
  interstedSubjects: Array<string>;
  preferredLanguages: string[];
  strongSubject: string;
  interestedSubject: string;
  language: string;
}

type modalProps = AcademicProps & {
  strongSubject: string;
  interestedSubject: string;
  language: string;
  userToken: string;
  closeModal: any;
  updateFields: (fields: Partial<userProps>) => void;
};

const AcademicInfoModal = (props: modalProps) => {
  const [academicInfo, setAcademicInfo] = useState<AcademicProps>({
    course: props.course,
    interstedSubjects: props.interstedSubjects,
    strongSubjects: props.strongSubjects,
    preferredLanguages: props.preferredLanguages,
    strongSubject: props.strongSubject,
    interestedSubject: props.interestedSubject,
    language: props.language,
  });

  const toastOptions = {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
  };

  const handleValidation = () => {
    const { course, interstedSubjects, preferredLanguages, strongSubjects } =
      academicInfo;
    if (
      course == "" ||
      interstedSubjects.length == 0 ||
      strongSubjects.length == 0 ||
      preferredLanguages.length == 0
    ) {
      toast.error("Fill in all the details", toastOptions);
      return false;
    } else if (interstedSubjects.length > 5 || strongSubjects.length > 5) {
      toast.error("Cannot select more than 5 subjects ", toastOptions);
      return false;
    } else if (preferredLanguages.length > 3) {
      toast.error("Cannot select more than 3 languages ", toastOptions);
      return false;
    }
    return true;
  };

  const updateUserAcademicInfoHandler = async () => {
    if (handleValidation()) {
      console.log(academicInfo);
      await axios
        .patch(
          `${BASE_URL}${apiVersion}/user/myacademicInfo`,
          {
            enrolledProgramme: academicInfo.course,
            strongSubjects: academicInfo.strongSubjects,
            interestedSubjects: academicInfo.interstedSubjects,
            preferredLanguages: academicInfo.preferredLanguages,
          },
          {
            headers: getHeaders(props.userToken),
          }
        )
        .then(({ data }) => {
          console.log(data.updatedUser);
          window.location.reload();
        })
        .catch((data) => {
          console.log(data);
          toast.error("Some error occured", toastOptions);
        });
    }
  };

  const updateFields = (fields: Partial<AcademicProps>) => {
    setAcademicInfo((prev) => {
      return { ...prev, ...fields };
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
              updateFields={updateFields}
              value={academicInfo.course}
            />
          }
          inputDesc="Change your Course"
        />
        <FormField
          elem={
            <MultipleInputWrapper>
              <MultipleInput
                label="Strong Subjects"
                value={academicInfo.strongSubject}
                elemName="strongSubject"
                name="strongSubjects"
                arr={academicInfo.strongSubjects}
                updateFields={updateFields}
                hasDropdown={true}
                dropdownData={subjects}
                maxLimit={5}
              />
              <ArrChip
                listArr={academicInfo.strongSubjects}
                updateFields={updateFields}
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
                value={academicInfo.interestedSubject}
                elemName="interestedSubject"
                name="interstedSubjects"
                arr={academicInfo.interstedSubjects}
                updateFields={updateFields}
                hasDropdown={true}
                dropdownData={subjects}
                maxLimit={5}
              />
              <ArrChip
                listArr={academicInfo.interstedSubjects}
                updateFields={updateFields}
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
                value={academicInfo.language}
                elemName="language"
                name="preferredLanguages"
                arr={academicInfo.preferredLanguages}
                updateFields={updateFields}
                hasDropdown={true}
                dropdownData={languages}
                maxLimit={3}
              />
              <ArrChip
                listArr={academicInfo.preferredLanguages}
                updateFields={updateFields}
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

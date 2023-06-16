import React, { useState } from "react";
import styled from "styled-components";
import EditBtn from "./editBtn";
import Modal from "react-modal";
import AcademicInfoModal from "./profileModals/academicInfoModal";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 28px;
  gap: 18px;
  border: 1px solid #d5d9eb;
  border-radius: 32px;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  /* border: 1px solid red; */
  width: 100%;
  justify-content: space-between;

  h4 {
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.02em;
    color: #000000;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  row-gap: 1rem;
  column-gap: 1.5rem;
  width: 100%;

  div {
    /* border: 1px solid red; */
    h4 {
      font-size: 16px;
      line-height: 25px;
      letter-spacing: 0.02em;
      color: #4b5565;
      text-transform: capitalize;
      margin-bottom: 0.2rem;
    }
  }
  span {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: 0.02em;
    color: #000000;
  }
`;

const Tags = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 8px;
  /* align-items: center; */
`;

const Tag = styled.div`
  /* border: 1px solid #697586; */
  border: 1px solid black;
  padding: 10px;
  border-radius: 12px;
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "auto",
    height: "80vh",
  },
};

interface AcademicProps {
  course: string;
  strongSubject: string;
  strongSubjects: string[];
  interestedSubject: string;
  interstedSubjects: Array<string>;
  language: string;
  preferredLanguages: string[];
  updateFields: any;
}

const AcademicInfo = (props: AcademicProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Section>
        <Header>
          <h4>Academic Information</h4>
          <EditBtn onClickFunc={openModal} />
        </Header>
        <Wrapper>
          {/* {Object.values(props).map((item, index) => {
            const currentKey = Object.keys(props)[index];
            console.log(Array.isArray(item));

            if (!Array.isArray(item)) {
              return (
                <div>
                  <h4>Course</h4>
                  <span>{props.course}</span>
                </div>
              );
            }
            return (
              <div>
                <h4>{currentKey}</h4>
                <Tags>
                  {item?.map((sub, index) => {
                    return <Tag key={index}>{sub}</Tag>;
                  })}
                </Tags>
              </div>
            );
          })} */}
          <div>
            <h4>Course</h4>
            <span>{props.course}</span>
          </div>
          <div>
            <h4>Strong Subjects</h4>
            <Tags>
              {props.strongSubjects?.map((sub, index) => {
                return <Tag key={index}>{sub}</Tag>;
              })}
            </Tags>
          </div>
          <div>
            <h4>Interested Subjects</h4>
            <Tags>
              {props.interstedSubjects?.map((sub, index) => {
                return <Tag key={index}>{sub}</Tag>;
              })}
            </Tags>
          </div>
          <div>
            <h4>Preferred Languages</h4>
            <Tags>
              {props.preferredLanguages?.map((sub, index) => {
                return <Tag key={index}>{sub}</Tag>;
              })}
            </Tags>
          </div>
        </Wrapper>
      </Section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <AcademicInfoModal
          course={props.course}
          interestedSubject={props.interestedSubject}
          interstedSubjects={props.interstedSubjects}
          strongSubject={props.strongSubject}
          strongSubjects={props.strongSubjects}
          language={props.language}
          preferredLanguages={props.preferredLanguages}
          updateFields={props.updateFields}
        />
      </Modal>
    </>
  );
};

export default AcademicInfo;

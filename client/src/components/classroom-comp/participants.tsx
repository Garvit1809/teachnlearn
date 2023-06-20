import ClassBanner from "./classBanner";
import ParticipantList from "./participantList";
import styled from "styled-components";
import ethan from "../../assets/ethan.jpg";
import { student } from "../../pages/classroom/classrooms";

const ParticipantWrapper = styled.div`
  width: 60%;
  margin: 3rem auto 0;
`;

const TeacherSection = styled.div`
  /* border: 5px solid yellow; */
  margin-bottom: 3rem;
`;

const StudentSection = styled.div``;

interface participantProps {
  cardBanner: string;
  topic: string;
  createdBy: {
    name: string;
    photo: string;
    _id: string;
    userName: string;
  };
  studentsEnrolled: student[];
}

const Participants = (props: participantProps) => {
  return (
    <div>
      <ClassBanner img={props.cardBanner} title={props.topic} />
      <ParticipantWrapper>
        <TeacherSection>
          <ParticipantList heading="Teachers" teacherObj={props.createdBy} />
        </TeacherSection>
        <StudentSection>
          {props.studentsEnrolled.length != 0 ? (
            <ParticipantList
              heading="Students"
              listArr={props.studentsEnrolled}
            />
          ) : null}
        </StudentSection>
      </ParticipantWrapper>
    </div>
  );
};

export default Participants;

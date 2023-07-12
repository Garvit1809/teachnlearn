import ClassBanner from "./classBanner";
import ParticipantList from "./participantList";
import styled from "styled-components";
import { student } from "../../pages/classroom/classrooms";

const Section = styled.div`
  /* border: 1px solid red; */
  margin-bottom: 2rem;
`;

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
  localUserId: string;
}

const Participants = (props: participantProps) => {
  return (
    <Section>
      <ClassBanner img={props.cardBanner} title={props.topic} />
      <ParticipantWrapper>
        <TeacherSection>
          <ParticipantList heading="Teachers" teacherObj={props.createdBy} localUserId={props.localUserId} />
        </TeacherSection>
        <StudentSection>
          {props.studentsEnrolled.length != 0 ? (
            <ParticipantList
              heading="Students"
              listArr={props.studentsEnrolled}
              localUserId={props.localUserId}
            />
          ) : null}
        </StudentSection>
      </ParticipantWrapper>
    </Section>
  );
};

export default Participants;

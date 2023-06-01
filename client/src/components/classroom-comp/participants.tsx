import ClassBanner from "./classBanner";
import ParticipantList from "./participantList";
import styled from "styled-components";
import ethan from "../../assets/ethan.jpg";

const ParticipantWrapper = styled.div`
  width: 60%;
  margin: 3rem auto;
`;

const TeacherSection = styled.div`
  /* border: 5px solid yellow; */
  margin-bottom: 3rem;
`;

const StudentSection = styled.div``;

const teacherObj = {
  userImg: ethan,
  userName: "ethanalex",
  name: "Ethan Alexander",
};

const studentArr = [
  {
    userImg: ethan,
    userName: "ethanalex",
    name: "Ethan Alexander",
  },
  {
    userImg: ethan,
    userName: "ethanalex",
    name: "Ethan Alexander",
  },
  {
    userImg: ethan,
    userName: "ethanalex",
    name: "Ethan Alexander",
  },
  {
    userImg: ethan,
    userName: "ethanalex",
    name: "Ethan Alexander",
  },
  {
    userImg: ethan,
    userName: "ethanalex",
    name: "Ethan Alexander",
  },
  {
    userImg: ethan,
    userName: "ethanalex",
    name: "Ethan Alexander",
  },
  {
    userImg: ethan,
    userName: "ethanalex",
    name: "Ethan Alexander",
  },
];

const Participants = () => {
  return (
    <div>
      <ClassBanner />
      <ParticipantWrapper>
        <TeacherSection>
          <ParticipantList heading="Teachers" teacherObj={teacherObj} />
        </TeacherSection>
        <StudentSection>
          <ParticipantList heading="Students" listArr={studentArr} />
        </StudentSection>
      </ParticipantWrapper>
    </div>
  );
};

export default Participants;

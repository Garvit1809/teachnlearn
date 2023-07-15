import React from "react";
import {
  ProfileHeader,
  ProfileSection,
  ProfileStatContainer,
} from "./profileStats";

interface profileStatProps {
  attended: number;
}

const StudentRating = (props: profileStatProps) => {
  return (
    <ProfileSection>
      <ProfileHeader>
        <h4>Stats as a Student</h4>
      </ProfileHeader>
      <ProfileStatContainer>
        <div>
          <h5>Attended</h5>
          <h3>{props.attended}</h3>
        </div>
      </ProfileStatContainer>
    </ProfileSection>
  );
};

export default StudentRating;

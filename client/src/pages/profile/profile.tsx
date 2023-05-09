import Navbar from "../../components/general-components/navbar";
import ProfileOptions from "../../components/profile-comp/profileOptions";
import styled from "styled-components";

const Section = styled.div`
  /* padding: 5rem; */
  border: 1px solid red;
  /* background: #A6A6A6; */
  border-radius: 12px;
  padding: 45px;
  margin: 50px;
  display: flex;
  /* align-items: ; */
`;

const Profile = () => {
  return (
    <>
      <Navbar />
      <Section>
        <ProfileOptions />
      </Section>
    </>
  );
};

export default Profile;

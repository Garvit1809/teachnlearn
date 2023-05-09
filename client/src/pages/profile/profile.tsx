import { useEffect, useState } from "react";
import Navbar from "../../components/general-components/navbar";
import ProfileOptions from "../../components/profile-comp/profileOptions";
import styled from "styled-components";
import MyProfile from "../../components/profile-comp/myProfile";
import InviteFriends from "../../components/profile-comp/inviteFriends";
import PurchaseCoins from "../../components/profile-comp/purchaseCoins";

const Section = styled.div`
  border: 1px solid red;
  border-radius: 12px;
  padding: 45px;
  margin: 50px;
  display: flex;
  gap: 30px;
  align-items: flex-start;
`;

const ProfileContainer = styled.div`
  border-left: 1px solid #d5d9eb;
`;

const Profile = () => {
//   let rightScreen;
  let rightScreen = <MyProfile />;
  const [selectedLeftScreen, setSelectedLeftScreen] = useState("MyProfile");
  useEffect(() => {
    console.log(selectedLeftScreen);
    if (selectedLeftScreen == "MyProfile") {
      rightScreen = <MyProfile />;
    } else if (selectedLeftScreen == "PurchaseCoins") {
        console.log('ollolol');
        
      rightScreen = <PurchaseCoins />;
    } else if (selectedLeftScreen == "InviteFriends") {
      rightScreen = <InviteFriends />;
    }
    // console.log(rightScreen);
  }, [selectedLeftScreen]);

  return (
    <>
      <Navbar />
      <Section>
        <ProfileOptions setSelectedLeftScreen={setSelectedLeftScreen} />
        <ProfileContainer>{rightScreen}</ProfileContainer>
      </Section>
    </>
  );
};

export default Profile;

import { ReactElement, useEffect, useState } from "react";
import Navbar from "../../components/general-components/navbar";
import ProfileOptions from "../../components/profile-comp/profileOptions";
import styled from "styled-components";
import MyProfile from "../../components/profile-comp/my-profile/myProfile";
import InviteFriends from "../../components/profile-comp/inviteFriends";
import PurchaseCoins from "../../components/profile-comp/purchaseCoins";
import Footer from "../../components/general-components/footer/footer";
import { MyProfileIcon } from "../../components/general-components/svg";

export const ProfileSection = styled.div`
  border: 2px solid #d5d9eb;
  border-radius: 12px;
  padding: 45px;
  margin: 50px;
  display: grid;
  grid-template-columns: 25% 70%;
  gap: 30px;
`;

export const ProfileContainer = styled.div`
  border-left: 1px solid #d5d9eb;
`;

const Profile = () => {
  const [selectedLeftScreen, setSelectedLeftScreen] = useState("MyProfile");

  useEffect(() => {
    console.log(selectedLeftScreen);
    if (selectedLeftScreen == "MyProfile") {
      setElement(<MyProfile />);
    }
    // else if (selectedLeftScreen == "PurchaseCoins") {
    //   setElement(<PurchaseCoins />);
    // } else if (selectedLeftScreen == "InviteFriends") {
    //   setElement(<InviteFriends />);
    // }
  }, [selectedLeftScreen]);

  const [element, setElement] = useState<ReactElement>(<MyProfile />);

  const profileOptions = [
    {
      option: "My profile",
      label: "MyProfile",
      icon: <MyProfileIcon />,
    },
  ];

  return (
    <>
      <Navbar />
      <ProfileSection>
        <ProfileOptions
          profileOptions={profileOptions}
          setSelectedLeftScreen={setSelectedLeftScreen}
          isOtherUser={false}
        />
        <ProfileContainer>{element}</ProfileContainer>
      </ProfileSection>
      <Footer />
    </>
  );
};

export default Profile;

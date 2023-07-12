import { ReactElement, useEffect, useState } from "react";
import Navbar from "../../components/general-components/navbar";
import Footer from "../../components/general-components/footer/footer";
import ProfileOptions from "../../components/profile-comp/profileOptions";
import UserProfileDetails from "../../components/profile-comp/userProfile/userProfileDetails";
import { ProfileContainer, ProfileSection } from "./profile";
import { UserCookie } from "../../utils/userCookie";
import { MyProfileIcon } from "../../components/general-components/svg";

const UserProfile = () => {
  const [userToken, setUserToken] = useState<string>("");

  const { fetchLocalUserData } = UserCookie();

  useEffect(() => {
    fetchLocalUserData().then((data) => {
      setUserToken(data.token);
      console.log("TOKEN :- " + data.token);
    });
  }, []);

  const [selectedLeftScreen, setSelectedLeftScreen] = useState("Profile");

  const [element, setElement] = useState<ReactElement>(<UserProfileDetails />);

  useEffect(() => {
    console.log(selectedLeftScreen);
    if (selectedLeftScreen == "Profile") {
      setElement(<UserProfileDetails />);
    }
    // else if (selectedLeftScreen == "PurchaseCoins") {
    //   setElement(<PurchaseCoins />);
    // }
  }, [selectedLeftScreen]);

  const profileOptions = [
    {
      option: "Profile",
      label: "Profile",
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
          isOtherUser={true}
        />
        <ProfileContainer>{element}</ProfileContainer>
      </ProfileSection>
      <Footer />
    </>
  );
};

export default UserProfile;

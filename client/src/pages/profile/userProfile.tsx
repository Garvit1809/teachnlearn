import { ReactElement, useEffect, useState } from "react";
import Navbar from "../../components/general-components/navbar";
import Footer from "../../components/general-components/footer/footer";
import ProfileOptions from "../../components/profile-comp/profileOptions";
import UserProfileDetails from "../../components/profile-comp/userProfile/userProfileDetails";
import { ProfileContainer, ProfileSection } from "./profile";
import { UserCookie, userProps } from "../../utils/userCookie";
import { MyProfileIcon } from "../../components/general-components/svg";

const UserProfile = () => {
  const [localUser, setLocalUser] = useState<userProps>();

  const { fetchLocalUserData } = UserCookie();

  useEffect(() => {
    fetchLocalUserData().then((data) => {
      setLocalUser(data);
    });

    window.addEventListener("storage", () => {
      fetchLocalUserData().then((data) => {
        setLocalUser(data);
      });
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
        {localUser && (
          <ProfileOptions
            profileOptions={profileOptions}
            setSelectedLeftScreen={setSelectedLeftScreen}
            isOtherUser={true}
            userToken={localUser.token}
            favouriteUsers={localUser.favouriteUsers}
          />
        )}
        <ProfileContainer>{element}</ProfileContainer>
      </ProfileSection>
      <Footer />
    </>
  );
};

export default UserProfile;

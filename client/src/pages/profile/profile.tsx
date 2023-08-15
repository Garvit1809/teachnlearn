import { ReactElement, useEffect, useState } from "react";
import Navbar from "../../components/general-components/navbar";
import ProfileOptions from "../../components/profile-comp/profileOptions";
import styled from "styled-components";
import MyProfile from "../../components/profile-comp/my-profile/myProfile";
import Footer from "../../components/general-components/footer/footer";
import {
  FavouriteIcon,
  MyProfileIcon,
  RedeemIcon,
} from "../../components/general-components/svg";
import UserBalance from "../../components/profile-comp/my-profile/userBalance";
import FavouriteUserList from "../../components/profile-comp/my-profile/favouriteUserList";

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
    } else if (selectedLeftScreen == "MyWallet") {
      setElement(<UserBalance />);
    } else if (selectedLeftScreen == "MyFavourites") {
      setElement(<FavouriteUserList />);
    }
  }, [selectedLeftScreen]);

  const [element, setElement] = useState<ReactElement>(<MyProfile />);

  const profileOptions = [
    {
      option: "My profile",
      label: "MyProfile",
      icon: <MyProfileIcon />,
    },
    {
      option: "My Wallet",
      label: "MyWallet",
      icon: <RedeemIcon />,
    },
    {
      option: "My Favourites",
      label: "MyFavourites",
      icon: <FavouriteIcon />,
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

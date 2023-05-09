import React from "react";
import styled from "styled-components";
import { Coins, Friends, MyProfile, Redeem } from "../general-components/svg";

const Section = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 28px;
  gap: 126px;

  width: 329px;
  height: 530px;

  /* Gray blue/200 */

  border: 1px solid #d5d9eb;
  border-radius: 32px;
`;

const Menu = styled.div`
  border: 1px solid red;
`;

const MenuOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  gap: 16px;

  width: 193px;
  height: 56px;

  background: #f3f6ff;
  border-radius: 41px;
`;

const DeleteButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px 24px;
  gap: 16px;

  width: 206px;
  height: 60px;
  background: #fecdca;
  border-radius: 41px;
`;

const profileOptions = [
  {
    option: "My profile",
    label: "myProfile",
    icon: <MyProfile />,
  },
  {
    option: "Purchase Coins",
    label: "myProfile",
    icon: <Coins />,
  },
  {
    option: "Invite Friends",
    label: "myProfile",
    icon: <Friends />,
  },
  {
    option: "Redeem Items",
    label: "myProfile",
    icon: <Redeem />,
  },
];

const ProfileOptions = () => {
  return (
    <Section>
      <Menu>
        {profileOptions.map((option, index) => {
          return (
            <MenuOptions>
              {option.icon}
              <span>{option.option}</span>
            </MenuOptions>
          );
        })}
      </Menu>
      <DeleteButton>Delete Account</DeleteButton>
    </Section>
  );
};

export default ProfileOptions;

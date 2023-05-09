import React, { useState } from "react";
import styled from "styled-components";
import { Coins, Friends, MyProfile, Redeem } from "../general-components/svg";

const Section = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 28px 15px;
  border: 1px solid #d5d9eb;
  border-radius: 32px;
`;

const Menu = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  margin-bottom: 2rem;
`;

interface menuOptionsProps {
  isSelected: boolean;
}

const MenuOptions = styled.div<menuOptionsProps>`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  border-radius: 41px;
  gap: 16px;
  cursor: pointer;
  font-size: 16px;
  background: ${(props) => (props.isSelected ? "#F3F6FF" : "none")};
`;

const DeleteButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  background: #fecdca;
  border-radius: 41px;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  color: #b42318;
`;

const profileOptions = [
  {
    option: "My profile",
    label: "myProfile",
    icon: <MyProfile />,
  },
  {
    option: "Purchase Coins",
    label: "purchaseCoins",
    icon: <Coins />,
  },
  {
    option: "Invite Friends",
    label: "invite",
    icon: <Friends />,
  },
  {
    option: "Redeem Items",
    label: "redeem",
    icon: <Redeem />,
  },
];

const ProfileOptions = () => {
  const [selectedOption, setSelectedOption] = useState("myProfile");
  return (
    <Section>
      <Menu>
        {profileOptions.map((option, index) => {
          return (
            <MenuOptions isSelected={selectedOption == option.label}>
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

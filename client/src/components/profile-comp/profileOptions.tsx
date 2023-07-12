import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import DeleteProfileModal from "./deleteProfileModal";

const Section = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 28px 15px;
  border: 1px solid #d5d9eb;
  border-radius: 32px;
  height: max-content;
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
  background: ${(props) => (props.isSelected ? "#D8EEFE" : "none")};
  transition: all 0.5s ease;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
`;

interface optionsProps {
  setSelectedLeftScreen: React.Dispatch<React.SetStateAction<string>>;
  profileOptions: Array<any>;
  isOtherUser: boolean;
}

const ProfileOptions = ({
  setSelectedLeftScreen,
  profileOptions,
  isOtherUser,
}: optionsProps) => {
  const [selectedOption, setSelectedOption] = useState(profileOptions[0].label);

  const menuOptionHandler = (label: string) => {
    setSelectedOption(label);
    setSelectedLeftScreen(label);
  };
  return (
    <Section>
      <Menu>
        {profileOptions.map((option, index) => {
          return (
            <MenuOptions
              key={index}
              isSelected={selectedOption == option.label}
              onClick={() => menuOptionHandler(option.label)}
            >
              {option.icon}
              <span>{option.option}</span>
            </MenuOptions>
          );
        })}
      </Menu>
      {!isOtherUser && <DeleteProfileModal />}
    </Section>
  );
};

export default ProfileOptions;

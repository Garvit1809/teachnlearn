import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  padding: 20px 28px;
  gap: 22px;
  background: #332ad5;
  border-radius: 61px;
  color: white;
`;

interface ToggleCheckedProps {
  isChecked: boolean;
}

const Slider = styled.span<ToggleCheckedProps>`
  position: absolute;
  cursor: pointer;

  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;

  background-color: #ccc;
  border-radius: 25px;

  &::before {
    border-radius: 20px;
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    transform: ${(props) => (props.isChecked ? "translateX(26px)" : "none")};
  }
`;

const ToggleBtn = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  background-color: white;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const LearnText = styled.span<ToggleCheckedProps>`
  color: ${(props) => (props.isChecked ? "#C2B9F9" : "#FFFFFF")};
  transition: 0.5s;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
`;

const TeachText = styled.span<ToggleCheckedProps>`
  transition: 0.5s;
  color: ${(props) => (!props.isChecked ? "#C2B9F9" : "#FFFFFF")};
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
`;

const ModeToggle = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Section>
      <LearnText isChecked={isChecked}>Learn Mode</LearnText>
      <ToggleBtn>
        <input
          type="radio"
          checked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
        />
        <Slider className="slider" isChecked={isChecked} />
      </ToggleBtn>
      <TeachText isChecked={isChecked}>Teach Mode</TeachText>
    </Section>
  );
};

export default ModeToggle;

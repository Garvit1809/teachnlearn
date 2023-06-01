import React from "react";
import styled from "styled-components";
import UserChip from "../general-components/userChip";

const Section = styled.div`
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
    0px -4px 6px -2px rgba(16, 24, 40, 0.03);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 30px;
  gap: 20px;

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: #000000;
  }
`;

const Announcement = () => {
  return (
    <Section>
      <UserChip name="Garvit var" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Drew Cano
      </p>
    </Section>
  );
};

export default Announcement;

import React from "react";
import styled from "styled-components";
import UserChip from "../general-components/userChip";
import { announcementProps } from "./classroom";
import { getReadableDate, getReadableTime } from "../../utils/helperFunctions";

const Section = styled.div`
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
    0px -4px 6px -2px rgba(16, 24, 40, 0.03);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 30px;
  gap: 20px;

  header {
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    }
  }

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: #000000;
  }
`;

const Announcement = (props: announcementProps) => {
  return (
    <Section>
      <header>
        <UserChip
          name={props.sender.userName}
          photo={props.sender.photo}
          textSize="20px"
          imgSize="32px"
          userId={props.sender._id}
        />
        <h4>
          {getReadableDate(props.createdAt) +
            ", " +
            getReadableTime(props.createdAt)}
        </h4>
      </header>
      <p>{props.content}</p>
    </Section>
  );
};

export default Announcement;

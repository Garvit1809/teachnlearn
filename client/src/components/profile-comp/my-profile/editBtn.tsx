import React from "react";
import styled from "styled-components";
import { EditIcon } from "../../general-components/svg";

const Section = styled.div`
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  div {
    border: 1px solid #cdd5df;
    border-radius: 42px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 14px;
    gap: 6px;

    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0.02em;
      color: #4b5565;
    }
  }
`;

const EditBtn = () => {
  return (
    <Section>
      <div>
        <span>Edit</span>
        <EditIcon />
      </div>
    </Section>
  );
};

export default EditBtn;

import React, { useEffect } from "react";
import styled from "styled-components";
import { CrossIcon } from "../general-components/svg";
import { USERDATA } from "../general-components/input/multipleInput";

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid red; */

  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  /* margin-top: 1rem; */
  width: 100%;
`;

const Chip = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 12px;
  gap: 8px;
  background: #000000;
  border-radius: 22px;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #ffffff;

  svg {
    cursor: pointer;
  }
`;

const CrossContainer = styled.div``;

interface arrChipProps {
  listArr: string[];
  name: string;
  updateFields: (fields: Partial<USERDATA>) => void;
}

const ArrChip = (props: arrChipProps) => {
  const removeElement = (subToDelete: string) => {
    console.log("jnvj");

    var filteredArr = props.listArr.filter((sub, index) => {
      console.log(sub == subToDelete);
      return sub != subToDelete;
    });
    console.log(filteredArr);
    props.updateFields({ [props.name]: filteredArr });

  };

  return (
    <Section>
      {props.listArr.map((sub, index) => {
        return (
          <Chip key={index}>
            <span>{sub}</span>
            <CrossContainer onClick={() => removeElement(sub)}>
              <CrossIcon />
            </CrossContainer>
          </Chip>
        );
      })}
    </Section>
  );
};

export default ArrChip;

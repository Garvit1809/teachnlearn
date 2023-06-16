import React from "react";
import styled from "styled-components";
import { getReadableTime } from "../../utils/helperFunctions";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  width: 40vw;
  padding: 20px 32px;

  header {
    margin-bottom: 1rem;
  }
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 1rem;

  h2{
    margin-bottom: 1rem;
  }

  div {
    border: 1px solid red;
    /* width: 100%; */
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
  }
`;

const TImeContainer = styled.div`

`

interface enrollProps {
  title: string;
  price: number;
  date: string;
  classStartsAt: string;
  classEndsAt: string;
}

const EnrollModal = (props: enrollProps) => {
  return (
    <Section>
      <header>
        <h4>Enroll Now</h4>
      </header>
      <ModalBody>
        <h2>{props.title}</h2>
        <div>
          <h3>Time</h3>
          <TImeContainer>
            {
                getReadableTime(props.date)
            }
          </TImeContainer>
        </div>
      </ModalBody>
    </Section>
  );
};

export default EnrollModal;

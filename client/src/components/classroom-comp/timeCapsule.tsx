import styled from "styled-components";
import { getReadableDate, getReadableTime } from "../../utils/helperFunctions";

const Section = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 22px;
  gap: 10px;
  background: #d1fadf;
  background: #094067;
  border-radius: 30px;

  font-weight: 600;
  font-size: 17px;
  line-height: 27px;
  color: #054f31;
  color: white;
  /* margin-bottom: 1.5rem; */
  
  div {
    width: 4px;
    height: 4px;
    background-color: #054f31;
    background-color: white;
    border-radius: 50%;
    /* border: 1px solid red; */
  }
`;

interface capsuleProps {
  date: string;
  classStartsAt?: string;
  classEndsAt?: string;
}

const TimeCapsule = (props: capsuleProps) => {
  let startingTime;
  let endingTime;

  if (props.classStartsAt && props.classEndsAt) {
    startingTime = getReadableTime(props.classStartsAt);
    endingTime = getReadableTime(props.classEndsAt);
  }

  return (
    <Section>
      {props.classStartsAt && props.classEndsAt ? (
        <>
          <span>{getReadableDate(props.date)}</span>
          <div></div>
          <span>{startingTime + " - " + endingTime}</span>
        </>
      ) : (
        <span>Due By :- {getReadableDate(props.date)}</span>
      )}
    </Section>
  );
};

export default TimeCapsule;

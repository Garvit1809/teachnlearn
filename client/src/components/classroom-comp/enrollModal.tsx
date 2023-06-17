import React from "react";
import styled from "styled-components";
import {
  getHeaders,
  getReadableDate,
  getReadableTime,
} from "../../utils/helperFunctions";
import ModalField from "./modalField";
import { Arrow, InfoIcon, PurchaseCoinIcon } from "../general-components/svg";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { useNavigate } from "react-router-dom";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  width: 40vw;
  padding: 20px 32px;

  header {
    margin-bottom: 0.8rem;
    border-bottom: 1px solid black;
  }
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 1rem;
  margin-bottom: 1rem;

  h2 {
    margin-bottom: 0.5rem;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    color: #000000;
  }
`;

const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }

  svg {
    width: 20px;
    height: 18px;
  }
`;

const DotContainer = styled.div`
  width: 6px;
  height: 6px;
  background-color: black;
  border-radius: 50%;
`;

const EnrollBtn = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  justify-content: flex-end;
  button {
    cursor: pointer;
    outline: none;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 40px;
    gap: 10px;
    background: #332ad5;
    border-radius: 8px;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    color: #ffffff;
  }
`;

const CoinAlertCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #f8f8fa;
  border-radius: 8px;
  margin: auto;
  margin-bottom: 1rem;

  div.info-cont {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-left: 5px;
    margin-right: 2px;
  }

  span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #4a5578;
    display: flex;
    gap: 5px;
  }
`;

interface enrollProps {
  title: string;
  price: number;
  date: string;
  classStartsAt: string;
  classEndsAt: string;
  userCredit: number;
  teachCardId: string;
  userToken: string;
}

const EnrollModal = (props: enrollProps) => {
  console.log(props.userToken);

  const navigate = useNavigate();

  const enrollHandler = async () => {
    await axios
      .patch(
        `${BASE_URL}${apiVersion}/teach/${props.teachCardId}/enroll`,
        {},
        {
          headers: getHeaders(props.userToken ?? ""),
        }
      )
      .then(({ data }) => {
        console.log(data);
        navigate(`/classes/class/${props.teachCardId}`, {
          state: {
            classroomId: props.teachCardId,
          },
        });
      });
  };

  return (
    <Section>
      <header>
        <h4>Enroll Now</h4>
      </header>
      <ModalBody>
        <h2>{props.title}</h2>
        <ModalField
          title="Time :"
          value={
            <TimeContainer>
              <span>{getReadableDate(props.date)}</span>
              <DotContainer />
              <span>
                {getReadableTime(props.classStartsAt) +
                  " - " +
                  getReadableTime(props.classEndsAt)}
              </span>
            </TimeContainer>
          }
        />
        <ModalField
          title="Coins :"
          value={
            <TimeContainer>
              <PurchaseCoinIcon color="#000000" />
              <span>{props.price}</span>
            </TimeContainer>
          }
        />
      </ModalBody>
      <CoinAlertCont>
        <div className="info-cont">
          <InfoIcon />
        </div>
        <span>You have</span>
        <PurchaseCoinIcon color="#000000" />
        <span>
          <h3>{props.userCredit}</h3> coins right now
        </span>
      </CoinAlertCont>
      <EnrollBtn>
        <button type="submit" onClick={enrollHandler}>
          <span>Buy Class</span>
          <Arrow strokeColor="white" />
        </button>
      </EnrollBtn>
    </Section>
  );
};

export default EnrollModal;

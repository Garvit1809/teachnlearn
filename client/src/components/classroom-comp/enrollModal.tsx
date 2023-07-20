import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  getHeaders,
  getReadableDate,
  getReadableTime,
  getToastOptions,
} from "../../utils/helperFunctions";
import ModalField from "./modalField";
import { Arrow, InfoIcon, PurchaseCoinIcon } from "../general-components/svg";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../general-components/loader";

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
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 1rem;
  margin-bottom: 1rem;
  width: 100%;

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

interface enrollBtnProps {
  isDisabled: boolean;
}

const EnrollBtn = styled.div<enrollBtnProps>`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  justify-content: flex-end;
  button {
    cursor: ${(p) => (p.isDisabled ? "auto" : "pointer")};
    outline: none;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 40px;
    gap: 10px;
    background: #332ad5;
    background: ${(p) => (p.isDisabled ? "rgba(51, 42, 213, 0.6)" : "#332ad5")};
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
  /* border: 1px solid red; */

  div.info-cont {
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
  teachCardId: string;
  userToken: string;
}

const EnrollModal = (props: enrollProps) => {
  const navigate = useNavigate();

  const toastOptions = {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
  };

  const [totalCoins, setTotalCoins] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchUserBalance = async () => {
    setIsLoading(true);
    await axios
      .get(`${BASE_URL}${apiVersion}/user/mybalance`, {
        headers: getHeaders(props.userToken),
      })
      .then(({ data }) => {
        const user = data.user;
        setTotalCoins(user.coins + user.forumCoins + user.reviewCoins);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(true);
      });
  };

  useEffect(() => {
    if (props.userToken) {
      fetchUserBalance();
    }
  }, [props.userToken]);

  const enrollHandler = async () => {
    // if (props.price < totalCoins) {
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
        })
        .catch((data) => {
          // console.log(data);
          const err = data.response.data.message;
          toast.error(err, toastOptions);
        });
    // }
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
              <span>10</span>
            </TimeContainer>
          }
        />
      </ModalBody>
      {isLoading ? (
        <Loader loaderHeight="2rem" />
      ) : (
        <CoinAlertCont>
          <div className="info-cont">
            <InfoIcon />
          </div>
          <span>You have</span>
          <PurchaseCoinIcon color="#000000" />
          <span>
            <h3>{totalCoins}</h3> coins right now
          </span>
        </CoinAlertCont>
      )}
      <EnrollBtn isDisabled={isLoading ? true : props.price > totalCoins}>
        <button
          type="submit"
          onClick={enrollHandler}
          // disabled={isLoading ? true : props.price > totalCoins ? true : false}
        >
          <span>Buy Class</span>
          <Arrow strokeColor="white" />
        </button>
      </EnrollBtn>
    </Section>
  );
};

export default EnrollModal;

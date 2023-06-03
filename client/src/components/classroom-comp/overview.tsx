import React from "react";
import ClassBanner from "./classBanner";
import UserChip from "../general-components/userChip";
import styled from "styled-components";
import { Plus } from "../general-components/svg";

const OverviewContainer = styled.div`
  /* border: 1px solid red; */
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 1.3fr 3fr;
`;

const CallDetailContainer = styled.div`
  /* border: 1px solid red; */
`;

const TimeCapsule = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 22px;
  gap: 10px;
  background: #d1fadf;
  border-radius: 30px;

  font-weight: 600;
  font-size: 17px;
  line-height: 27px;
  color: #054f31;
  margin-bottom: 1.5rem;

  div {
    width: 4px;
    height: 4px;
    background-color: #054f31;
    border-radius: 50%;
    /* border: 1px solid red; */
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 22px;
  gap: 10px;
  width: fit-content;
  background: #054f31;
  border-radius: 30px;

  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
`;

const ClassOverview = styled.div``;

const ChipContainer = styled.div`
  margin-bottom: 1.2rem;
  img {
    width: 40px;
    height: 40px;
    margin-right: 0.6rem;
  }

  span {
    font-weight: 600;
    font-size: 22px;
    line-height: 35px;
    color: #000000;
  }
`;

const Details = styled.div`
  p {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #4a5578;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 22px;
    opacity: 0.8;
    margin-bottom: 0.8rem;
  }

  ul {
    padding-left: 1rem;
    li {
      font-weight: 500;
      color: #4a5578;
      font-size: 18px;
      line-height: 26px;
      margin-bottom: 0.5rem;
    }
  }
`;

const Overview = () => {
  return (
    <>
      <ClassBanner />
      <OverviewContainer>
        <CallDetailContainer>
          <TimeCapsule>
            <span>27th April</span>
            <div></div>
            <span>01 - 02 PM</span>
          </TimeCapsule>
          <LinkContainer>
            <span>Add class link</span>
            <Plus color="white" />
          </LinkContainer>
        </CallDetailContainer>
        <ClassOverview>
          <ChipContainer>
            <UserChip name="Drew Cano" imgBorder="white" textColor="black" />
          </ChipContainer>
          <Details>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
              explicabo cupiditate recusandae debitis vel quaerat, dignissimos
              eum ipsa perferendis reprehenderit sunt optio laboriosam quis at
              veniam reiciendis sit atque expedita repudiandae hic sint
              assumenda vero. Pariatur consectetur distinctio eos eius?
            </p>
            <h3>After this Class, students would be able to :-</h3>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus ea cumque vero facere ipsam necessitatibus!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus ea cumque vero facere ipsam necessitatibus!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus ea cumque vero facere ipsam necessitatibus!
              </li>
            </ul>
          </Details>
        </ClassOverview>
      </OverviewContainer>
    </>
  );
};

export default Overview;

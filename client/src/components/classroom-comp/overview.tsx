import React from "react";
import ClassBanner from "./classBanner";
import UserChip from "../general-components/userChip";
import styled from "styled-components";
import { Plus } from "../general-components/svg";
import DetailsContainer from "./detailsContainer";
import TimeCapsule from "./timeCapsule";
import JoinCall from "./joinCall";

const OverviewContainer = styled.div`
  /* border: 1px solid red; */
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 1.3fr 3fr;
`;

const CallDetailContainer = styled.div`
  /* border: 1px solid red; */
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

const Overview = () => {
  return (
    <>
      {/* <ClassBanner  /> */}
      {/* <OverviewContainer>
        <CallDetailContainer>
          <TimeCapsule />
          <JoinCall />
        </CallDetailContainer>
        <ClassOverview>
          <ChipContainer>
            <UserChip name="Drew Cano" imgBorder="white" textColor="black" />
          </ChipContainer>
          <DetailsContainer />
        </ClassOverview>
      </OverviewContainer> */}
    </>
  );
};

export default Overview;

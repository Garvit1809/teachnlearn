import React from "react";
import ClassBanner from "./classBanner";
import UserChip from "../general-components/userChip";
import styled from "styled-components";
import { Plus } from "../general-components/svg";
import DetailsContainer from "./detailsContainer";
import TimeCapsule from "./timeCapsule";
import JoinCall from "./joinCall";
import { teachCardProps } from "../../pages/classroom/classrooms";
import AddLink from "./addLink";
import ReviewClass from "./reviewClass";

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

interface overviewProps {
  callLink: string;
  cardBanner: string;
  classStartsAt: string;
  classEndsAt: string;
  createdBy: {
    name: string;
    photo: string;
    _id: string;
  };
  date: string;
  description: string;
  expectations: string[];
  preferredLanguage: string;
  programme: string;
  standard: string;
  subject: string;
  tags: string[];
  topic: string;
  _id: string;
}

type overallOverviewProps = overviewProps & {
  userId: string;
  userToken: string;
};

const Overview = (props: overallOverviewProps) => {
  const checkIsCompleted = () => {
    const date = new Date();
    const classEndingDate = props.classEndsAt;
    const ISOstring = new Date(classEndingDate);
    return date > ISOstring;
  };

  const checkHasReviewed = () => {

  }

  return (
    props && (
      <>
        <ClassBanner img={props.cardBanner} title={props.topic} />
        <OverviewContainer>
          <CallDetailContainer>
            <TimeCapsule
              date={props.date}
              classStartsAt={props.classStartsAt}
              classEndsAt={props.classEndsAt}
            />
            {
            !checkIsCompleted() ? 
            (

              props.userId == props.createdBy._id ? (
                <AddLink
                callLink={props.callLink}
                teachCardId={props._id}
                userId={props.userId}
                userToken={props.userToken}
              />
            ) : (
              <JoinCall callLink={props.callLink} />
            )
            ) : (
              <ReviewClass teachCardId={props._id} userToken={props.userToken} teacherID={props.createdBy._id} />
            )
          }
          </CallDetailContainer>
          <ClassOverview>
            <ChipContainer>
              <UserChip
                name={props.createdBy.name}
                photo={props.createdBy.photo}
                imgBorder="white"
                textColor="black"
              />
            </ChipContainer>
            <DetailsContainer
              desciption={props.description}
              expectations={props.expectations}
            />
          </ClassOverview>
        </OverviewContainer>
      </>
    )
  );
};

export default Overview;

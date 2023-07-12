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
import { classroomProps } from "../../types/classroomType";

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

type overallOverviewProps = classroomProps & {
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
    const userID = props.userId;
    const reviews = props.reviews;

    const isReviewed = reviews.filter((review) => {
      return review.user._id == userID;
    });

    return isReviewed.length == 1;
  };

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
            {!checkIsCompleted() ? (
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
            ) : props.userId ==
              props.createdBy._id ? null : !checkHasReviewed() ? (
              <ReviewClass
                teachCardId={props._id}
                userToken={props.userToken}
                teacherID={props.createdBy._id}
              />
            ) : null}
          </CallDetailContainer>
          <ClassOverview>
            <ChipContainer>
              <UserChip
                name={props.createdBy.name}
                photo={props.createdBy.photo}
                imgBorder="white"
                textColor="black"
                userId={props.createdBy._id}
              />
            </ChipContainer>
            <DetailsContainer
              desciption={props.description}
            />
          </ClassOverview>
        </OverviewContainer>
      </>
    )
  );
};

export default Overview;

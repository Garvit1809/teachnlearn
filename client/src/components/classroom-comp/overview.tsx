import React from "react";
import ClassBanner from "./classBanner";
import UserChip from "../general-components/userChip";
import styled from "styled-components";
import { Copy, Plus } from "../general-components/svg";
import DetailsContainer from "./detailsContainer";
import TimeCapsule from "./timeCapsule";
import JoinCall from "./joinCall";
import AddLink from "./addLink";
import ReviewClass from "./reviewClass";
import { classroomProps } from "../../types/classroomType";
import { ToastContainer, toast } from "react-toastify";

const OverviewContainer = styled.div`
  /* border: 1px solid red; */
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 1.3fr 3fr;
`;

const CallDetailContainer = styled.div`
  /* border: 1px solid red;
  border: 1px solid #d5d9eb; */
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

const ClassOverview = styled.div``;

const ChipContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.2rem;
  cursor: pointer;
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
  span.id {
    font-size: 16px;
  }
`;

export const ClassIDCont = styled.div`
  background-color: #b3b8db;
  display: flex;
  align-items: center;
  padding: 14px 18px;
  width: fit-content;
  gap: 10px;
  cursor: pointer;
  border-radius: 30px;
`;

const TagCont = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px 12px;
  flex-wrap: wrap;

  div.lang {
    color: #ef4565;
    padding: 6px 12px;
    font-weight: 700;
  }

  div {
    border: 1px solid grey;
    padding: 6px 12px;
    border-radius: 6px;
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

  const toastOptions = {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
  };

  const classIdHandler = () => {
    navigator.clipboard.writeText(props._id);
    toast.success("ID copied to clipboard", toastOptions);
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
            <TagCont>
              <div className="lang">
                <span>{props.preferredLanguage}</span>
              </div>
              {props?.tags.map((tag, index) => {
                return (
                  <div key={index}>
                    <span>{tag}</span>
                  </div>
                );
              })}
            </TagCont>
          </CallDetailContainer>
          <ClassOverview>
            <ChipContainer>
              <UserChip
                name={props.createdBy.userName}
                photo={props.createdBy.photo}
                imgBorder="white"
                textColor="black"
                userId={props.createdBy._id}
              />
              <ClassIDCont onClick={classIdHandler}>
                <Copy />
                <span className="id">{props._id}</span>
              </ClassIDCont>
            </ChipContainer>
            <DetailsContainer desciption={props.description} />
          </ClassOverview>
        </OverviewContainer>
        <ToastContainer theme="dark" />
      </>
    )
  );
};

export default Overview;

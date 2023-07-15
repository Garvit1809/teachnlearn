import React, { useEffect, useState } from "react";
import ClassBanner from "./classBanner";
import UserChip from "../general-components/userChip";
import styled from "styled-components";
import { Copy, FilledIcon, Plus } from "../general-components/svg";
import DetailsContainer from "./detailsContainer";
import TimeCapsule from "./timeCapsule";
import JoinCall from "./joinCall";
import AddLink from "./addLink";
import ReviewClass from "./reviewClass";
import { classroomProps } from "../../types/classroomType";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { getHeaders } from "../../utils/helperFunctions";
import { classReview } from "../../types/classReviewProps";
import moment from "moment";

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
  background-color: #094067;
  display: flex;
  align-items: center;
  padding: 14px 18px;
  width: fit-content;
  gap: 10px;
  cursor: pointer;
  border-radius: 30px;

  span {
    color: white;
  }

  svg {
    /* border: 1px solid red; */
    width: 1.5rem;
    height: 1.3rem;
  }
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

const ReviewContainr = styled.div`
  /* border: 1px solid red; */

  h2 {
    color: #000;
    font-family: "Nunito";
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 2rem;
    text-decoration: underline;
  }
`;

const ReviewGrid = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  row-gap: 1.5rem;
`;

const ReviewCard = styled.div`
  border: 1px solid #d5d9eb;
  /* background-color: #094067; */
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 32px 24px;
  box-sizing: border-box;
  border-radius: 12px;

  div.head {
    /* border: 1px solid red; */
    display: grid;
    grid-template-columns: max-content auto max-content;

    div.user {
      display: flex;
      flex-direction: column;
      h4 {
        margin-left: 4px;
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 2px;
      }
    }

    div.rating {
      /* border: 1px solid red; */
      display: flex;
    }

    div.time {
      color: #98a2b3;
      font-size: 0.9rem;
    }
  }

  img {
    /* border: 1px solid red; */
    width: 46px;
    height: 46px;
    object-fit: cover;
    border-radius: 100%;
    margin-right: 6px;
    border: 1px solid black;
  }
`;

interface svgColorProps {
  colored: boolean;
}

const IconWrapper = styled.div<svgColorProps>`
  /* border: 1px solid red; */
  padding: 0;
  margin-right: 0.4rem;
  svg {
    cursor: pointer;
    width: 24px;
    height: 20px;
    fill: ${(p) => (p.colored ? "#ffc557" : "rgba(125, 137, 176, 0.2);")};
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

  const [reviews, setReviews] = useState<Array<classReview>>();

  const fetchClassReviews = async () => {
    await axios
      .get(`${BASE_URL}${apiVersion}/teach/${props._id}/reviews`, {
        headers: getHeaders(props.userToken),
      })
      .then(({ data }) => {
        console.log(data);
        setReviews(data.reviews);
      });
  };

  useEffect(() => {
    if (props.userToken && checkIsCompleted()) {
      fetchClassReviews();
    }
  }, [props.userToken]);

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
                <span className="id">Card ID :- {props._id}</span>
                <Copy color="white" />
              </ClassIDCont>
            </ChipContainer>
            <DetailsContainer desciption={props.description} />
          </ClassOverview>
        </OverviewContainer>
        {reviews && (
          <ReviewContainr>
            <h2>Reviews :-</h2>
            <ReviewGrid>
              {reviews.map((review, index) => {
                return (
                  <ReviewCard>
                    <div className="head">
                      <img src={review.user.photo} alt="reviewer-img" />
                      <div className="user">
                        <h4>{review.user.name}</h4>
                        <div className="rating">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => i + 1)
                            .map((idx) => (
                              <IconWrapper
                                key={idx}
                                colored={idx <= review.rating}
                              >
                                <FilledIcon />
                              </IconWrapper>
                            ))}
                        </div>
                      </div>
                      <div className="time">
                        {moment(review.createdAt).fromNow()}
                      </div>
                    </div>
                    <div className="review">
                      <p>{review.review}</p>
                    </div>
                  </ReviewCard>
                );
              })}
            </ReviewGrid>
          </ReviewContainr>
        )}
        <ToastContainer theme="dark" />
      </>
    )
  );
};

export default Overview;

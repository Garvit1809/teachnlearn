import React, { useState } from "react";
import styled from "styled-components";
import { LinkContainer } from "./addLink";
import { Arrow, ThumbsUp } from "../general-components/svg";
import Modal from "react-modal";
import { customStyles } from "../profile-comp/my-profile/contactInfo";
import Textarea from "../general-components/input/textarea";
import { SubmitButton } from "../profile-comp/my-profile/profileModals/academicInfoModal";
import star from "../../assets/star.svg";
import Rating from "./rating";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { getHeaders } from "../../utils/helperFunctions";
import ReviewSubmitted from "./reviewSubmitted";

const Section = styled.div`
  /* border: 1px solid red; */
  width: 50vw;
  textarea {
    margin-bottom: 2rem;
    width: 90%;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  h4 {
    font-size: 16px;
    border-bottom: 1px solid black;
  }
`;

const RatingContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 1.5rem;

  span {
    /* border: 1px solid red; */
    color: #000;
    font-family: "Nunito";
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: 0.03rem;
  }

  h4 {
    /* border: 1px solid red; */
    margin-bottom: 1rem;
    color: #697586;
    padding-left: 2px;
    font-size: 1.125rem;
    font-weight: 500;
    font-family: "Nunito";
    letter-spacing: 0.0225rem;
  }
`;

interface reviewProps {
  teachCardId: string;
  userToken: string;
  teacherID: string;
}

const ReviewClass = (props: reviewProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [rating, setRating] = useState<number>(1);
  const [review, setReview] = useState("");

  const [hasReviewed, setHasReviewed] = useState(false);

  const updateReview = (content: string) => {
    setReview(content);
  };

  function thanksGiving() {
    setInterval(() => {
      closeModal();
    }, 2500);
  }

  const submitReviewHandler = async () => {
    await axios
      .post(
        `${BASE_URL}${apiVersion}/teach/${props.teachCardId}/reviews`,
        {
          review,
          rating,
          teacherID: props.teacherID,
        },
        {
          headers: getHeaders(props.userToken),
        }
      )
      .then(({ data }) => {
        console.log(data);
        setHasReviewed(true);
        thanksGiving();
      });
  };

  return (
    <>
      <LinkContainer onClick={openModal}>
        <span>Give Review</span>
        <Arrow strokeColor="white" />
      </LinkContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {!hasReviewed ? (
          <Section>
            <Header>
              <h4>Class Feedback</h4>
            </Header>
            <RatingContainer>
              <span>Rate your experience</span>
              <h4>Are you satisfied with the teacher</h4>
              <Rating
                onRating={(rate: number) => setRating(rate)}
                rating={rating}
              />
            </RatingContainer>
            <Textarea
              label="Brief Review"
              name="review"
              value={review}
              areaHeight="10rem"
              updateSingleField={updateReview}
            />
            <SubmitButton>
              <button type="submit" onClick={submitReviewHandler}>
                <span>Submit Review</span>
              </button>
            </SubmitButton>
          </Section>
        ) : (
          <ReviewSubmitted />
        )}
      </Modal>
    </>
  );
};

export default ReviewClass;

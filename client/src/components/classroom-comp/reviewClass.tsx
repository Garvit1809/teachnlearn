import React, { useState } from "react";
import styled from "styled-components";
import { LinkContainer } from "./addLink";
import { Arrow } from "../general-components/svg";
import Modal from "react-modal";
import { customStyles } from "../profile-comp/my-profile/contactInfo";
import Textarea from "../general-components/input/textarea";
import { SubmitButton } from "../profile-comp/my-profile/profileModals/academicInfoModal";
import star from "../../assets/star.svg";

const Section = styled.div`
  /* border: 1px solid red; */
  textarea {
    margin-bottom: 2rem;
    width: 90%;
  }
`;

const Header = styled.div`
  width: 50vw;
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
  /* row-gap: 1rem; */
  margin-bottom: 2rem;

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

const ReviewClass = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [review, setReview] = useState("");

  const updateReview = (content: string) => {
    setReview(content);
  };

  const submitReviewHandler = () => {
    console.log(review);
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
        <Section>
          <Header>
            <h4>Class Feedback</h4>
          </Header>
          <RatingContainer>
            <span>Rate your experience</span>
            <h4>Are you satisfied with the teacher</h4>
            {/* <img src={star} alt="" /> */}
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
      </Modal>
    </>
  );
};

export default ReviewClass;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { UserCookie } from "../../utils/userCookie";
import { UpvoteIcon } from "../general-components/svg";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { getHeaders } from "../../utils/helperFunctions";

interface ratingStyleProps {
  isAnswer: boolean;
}

const Section = styled.div<ratingStyleProps>`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  svg {
    /* border: 1px solid red; */
    width: 2rem;
    width: ${(p) => (p.isAnswer ? "1.6rem" : "2rem")};
    height: 1.8rem;
    cursor: pointer;
  }

  span {
    color: #000;
    font-size: 1.175rem;
    font-size: ${(p) => (p.isAnswer ? "1.175rem" : "1.375")};
    font-family: "Nunito";
    font-weight: 500;
    letter-spacing: 0.0275rem;
  }
`;

const SvgWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
`;

interface ratingProps {
  userId: string;
  userToken: string;
  isAnswer: boolean;
  upvotes: string[];
  forumId: string;
  answerId?: string;
}

const RatingContainer = (props: ratingProps) => {
  const [upvoteArr, setUpvoteArr] = useState(props.upvotes);

  const upvoteCheck = () => {
    return upvoteArr.includes(props.userId);
  };

  const upvoteHandler = async () => {
    if (!props.isAnswer) {
      await axios
        .patch(
          `${BASE_URL}${apiVersion}/forum/${props.forumId}`,
          {},
          {
            headers: getHeaders(props.userToken),
          }
        )
        .then(({ data }) => {
          console.log(data);
          const newUpvotes = data.updatedForum.upvotes;
          setUpvoteArr(newUpvotes);
        });
    } else {
      await axios
        .patch(
          `${BASE_URL}${apiVersion}/forum/${props.forumId}/answers/${props.answerId}`,
          {},
          {
            headers: getHeaders(props.userToken),
          }
        )
        .then(({ data }) => {
          console.log(data);
          const newUpvotes = data.updatedAnswer.upvotes;
          setUpvoteArr(newUpvotes);
        });
    }
  };

  return (
    <Section isAnswer={props.isAnswer}>
      <SvgWrapper onClick={upvoteHandler}>
        <UpvoteIcon
          color={upvoteCheck() ? "#094067" : "rgba(125, 137, 176, 0.4)"}
        />
      </SvgWrapper>
      <span>{upvoteArr.length}</span>
    </Section>
  );
};

export default RatingContainer;

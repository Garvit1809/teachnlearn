import React, { useRef } from "react";
import { topNavigator, useOutsideAlerter } from "../../utils/helperFunctions";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { forumProps } from "../../pages/forum/forum";

const Section = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  border-radius: 4px;
  border: 1px solid #d5d9eb;
  box-sizing: border-box;
  padding: 1rem 0 1rem;
  background-color: white;
  position: absolute;
  z-index: 100;
  max-height: 50vh;
  overflow-y: auto;
`;

const ForumChip = styled.div`
  /* border: 1px solid red; */
  margin-bottom: 1rem;
  padding: 0.5rem 1.15rem;
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background-color: #d8eefe;
  }

  &:last-child {
    margin-bottom: 0;
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
  }

  div {
    display: flex;
    align-items: center;
    column-gap: 4px;

    img {
      width: 26px;
      height: 26px;
      border-radius: 100%;
      object-fit: cover;
      border: 1px solid black;
    }

    h4 {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

interface searchProps {
  closeSearchBox: any;
  searchResults: Array<forumProps>;
  userToken: string;
}

const ForumSearchDropdown = (props: searchProps) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.closeSearchBox);

  const navigate = useNavigate();

  const forumNavigator = (forumId: string) => {
    topNavigator();
    navigate(`/forum/${forumId}`, {
      state: {
        forumId: forumId,
        userToken: props.userToken,
      },
    });
  };

  return (
    <Section ref={wrapperRef}>
      {props.searchResults.map((forum, index) => {
        return (
          <ForumChip onClick={() => forumNavigator(forum._id)}>
            <h3>{forum.tagline.slice(0, 50) + "..."}</h3>
            <div>
              <img src={forum.createdBy.photo} alt="" />
              <h4>{forum.createdBy.name}</h4>
            </div>
          </ForumChip>
        );
      })}
    </Section>
  );
};

export default ForumSearchDropdown;

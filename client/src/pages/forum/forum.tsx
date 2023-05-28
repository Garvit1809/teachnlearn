import React from "react";
import Navbar from "../../components/general-components/navbar";
import SearchBar from "../../components/general-components/searchBar";
import styled from "styled-components";
import ForumCard from "../../components/forum-components/forumCard";

const Section = styled.div`
  border: 1px solid brown;
  overflow-x: hidden;
  /* display: flex; */
  /* align-items: center; */
`;

const TopBar = styled.div`
  width: 100%;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ForumGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  /* border: 2px solid green; */
  gap: 2rem 2.5rem;
  margin: 2rem 15vw 1rem;
`;

const forumData = [
  {
    id: 1,
    tag: "Technology",
    question: "How long does ot take to learn full stack web dev",
    userName: "gaevirvasy",
    time: "2 Hours ago",
    likes: 23,
    comments: 12,
  },
  {
    id: 2,
    tag: "Technology",
    question: "How long does ot take to learn full stack web dev",
    userName: "gaevirvasy",
    time: "2 Hours ago",
    likes: 23,
    comments: 12,
  },
  {
    id: 3,
    tag: "Technology",
    question: "How long does ot take to learn full stack web dev",
    userName: "gaevirvasy",
    time: "2 Hours ago",
    likes: 23,
    comments: 12,
  },
  {
    id: 4,
    tag: "Technology",
    question: "How long does ot take to learn full stack web dev",
    userName: "gaevirvasy",
    time: "2 Hours ago",
    likes: 23,
    comments: 12,
  },
  {
    id: 5,
    tag: "Technology",
    question: "How long does ot take to learn full stack web dev",
    userName: "gaevirvasy",
    time: "2 Hours ago",
    likes: 23,
    comments: 12,
  },
];

const Forum = () => {
  return (
    <>
      <Navbar />
      <Section>
        <TopBar>
          <SearchBar />
        </TopBar>
        <ForumGrid>
          {forumData.map((forum, index) => {
            return <ForumCard key={index} {...forum} />;
          })}
        </ForumGrid>
      </Section>
    </>
  );
};

export default Forum;

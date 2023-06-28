import React, { useEffect, useState } from "react";
import Navbar from "../../components/general-components/navbar";
import SearchBar from "../../components/general-components/searchBar";
import styled from "styled-components";
import ForumCard from "../../components/forum-components/forumCard";
import FooterWrapper from "../../components/general-components/footer/footerWrapper";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { getHeaders } from "../../utils/helperFunctions";
import { UserCookie } from "../../utils/userCookie";
import ForumOptions from "../../components/forum-components/forumOptions";
import { useNavigate } from "react-router-dom";
import { PostBtn } from "./singleForum";
import Footer from "../../components/general-components/footer/footer";

const Section = styled.div`
  /* border: 1px solid brown; */
  /* display: flex; */
  /* align-items: center; */
`;

const HeaderBtn = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: flex-end;
  width: 90%;
`;

const TopBar = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 26px;
`;

const ForumGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 2.5rem;
  margin: 2rem 15vw 1rem;
`;

const CreateForumBtn = styled.div`
  /* border: 1px solid red; */
`;

export interface forumProps {
  _id: string;
  answers: string[];
  createdBy: {
    _id: string;
    userName: string;
    name?: string;
    photo?: string;
  };
  tagline: string;
  question: string;
  topic: string;
  upvotes: string[];
  createdAt: string;
}

const Forum = () => {
  const [forums, setForums] = useState<Array<forumProps>>();
  const [userToken, setUserToken] = useState<string>();

  const { fetchLocalUserToken } = UserCookie();

  useEffect(() => {
    fetchLocalUserToken().then((token) => {
      setUserToken(token);
    });
  }, []);

  async function fetchAllForums() {
    await axios
      .get(`${BASE_URL}${apiVersion}/forum`, {
        headers: getHeaders(userToken ?? ""),
      })
      .then(({ data }) => {
        console.log(data.data.data);
        setForums(data.data.data);
      });
  }

  useEffect(() => {
    if (userToken) {
      fetchAllForums();
    }
  }, [userToken]);

  const navigate = useNavigate();
  const postForumNavigator = () => {
    navigate("/create-forum");
  };

  return (
    <>
      <Navbar />
      <Section>
        <HeaderBtn>
          <PostBtn onClick={postForumNavigator}>Post Forum</PostBtn>
        </HeaderBtn>
        <TopBar>
          <SearchBar placeholderText="Search n forums..." />
        </TopBar>
        <ForumGrid>
          {forums &&
            userToken &&
            forums.map((forum, index) => {
              return <ForumCard key={index} {...forum} userToken={userToken} />;
            })}
        </ForumGrid>
      </Section>
      <Footer />
    </>
  );
};

export default Forum;

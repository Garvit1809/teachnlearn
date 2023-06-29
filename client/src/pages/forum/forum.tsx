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
import LoadMore from "../../components/general-components/loadMore";

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
  /* border: 1px solid red; */
  width: 50%;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 26px;
`;

const ForumGrid = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 2.5rem;
  margin: 2rem 15vw 4rem;
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
  const [forums, setForums] = useState<Array<forumProps>>([]);
  const [userToken, setUserToken] = useState<string>();
  const [forumPageSet, setForumPageSet] = useState<number>(1);
  const [dataLimit, setDataLimit] = useState(10);
  const [hasMoreData, sethasMoreData] = useState(true);

  const { fetchLocalUserToken } = UserCookie();

  useEffect(() => {
    fetchLocalUserToken().then((token) => {
      setUserToken(token);
    });
  }, []);

  const checkMoreData = (arr: Array<forumProps>) => {
    if (arr.length == 0) {
      sethasMoreData(false);
      return;
    } else if (arr.length % dataLimit != 0) {
      sethasMoreData(false);
    }
  };

  async function fetchAllForums() {
    await axios
      .get(`${BASE_URL}${apiVersion}/forum`, {
        params: {
          page: forumPageSet,
        },
        headers: getHeaders(userToken ?? ""),
      })
      .then(({ data }) => {
        const forums = data.data.data;
        checkMoreData(forums);
        console.log(forums);
        setForums((prev) => [...prev, ...forums]);
        setForumPageSet((prev) => prev + 1);
      });
  }

  useEffect(() => {
    if (forums) {
      console.log(forums);
    }
  }, [forums]);

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
        {forums && hasMoreData && <LoadMore onClick={fetchAllForums} />}
      </Section>
      <Footer />
    </>
  );
};

export default Forum;

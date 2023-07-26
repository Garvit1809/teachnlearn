import React, { useEffect, useState } from "react";
import Navbar from "../../components/general-components/navbar";
import SearchBar from "../../components/general-components/searchBar";
import styled from "styled-components";
import ForumCard from "../../components/forum-components/forumCard";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { getHeaders, topNavigator } from "../../utils/helperFunctions";
import { UserCookie } from "../../utils/userCookie";
import { useNavigate } from "react-router-dom";
import { PostBtn } from "./singleForum";
import Footer from "../../components/general-components/footer/footer";
import LoadMore from "../../components/general-components/loadMore";
import { DATA_LIMIT } from "../../utils/globalConstants";
import Loader from "../../components/general-components/loader";
import { Plus } from "../../components/general-components/svg";
import ForumSearchDropdown from "../../components/forum-components/forumSearchDropdown";

const Section = styled.div`
  /* border: 1px solid brown; */
  /* display: flex; */
  /* align-items: center; */
`;

const HeaderBtn = styled.div`
  /* border: 1px solid red; */
  display: flex;
  margin-top: 2rem;
  justify-content: flex-end;
  width: 95%;
  @media only screen and (max-width: 1000px) {
  }
`;

const TopBar = styled.div`
  /* border: 1px solid red; */
  width: 60%;
  margin: 1rem auto;
  margin-top: 26px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 950px) {
    width: 80%;
  }
  @media only screen and (max-width: 600px) {
    width: 85%;
  }
`;

const ForumGrid = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 2.5rem;
  margin: 4rem 15vw;

  @media only screen and (max-width: 1100px) {
    margin: 4rem 10vw;
  }
  @media only screen and (max-width: 950px) {
    margin: 4rem 5vw;
    gap: 1.5rem 1rem;
  }
  @media only screen and (max-width: 680px) {
    grid-template-columns: 1fr;
    margin: 4rem 12vw;
    gap: 1.5rem;
  }
  @media only screen and (max-width: 600px) {
    margin: 4rem 10vw;
  }
  @media only screen and (max-width: 500px) {
    margin: 3rem 5vw 2rem;
    gap: 1.5rem;
  }
`;

const LoaderWrapper = styled.div`
  margin-top: 4rem;
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
  const [hasMoreData, sethasMoreData] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [loaderLoading, setLoaderLoading] = useState(true);

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
    } else if (arr.length % DATA_LIMIT != 0) {
      sethasMoreData(false);
      return;
    }
    sethasMoreData(true);
  };

  async function fetchAllForums() {
    setLoaderLoading(true);
    await axios
      .get(`${BASE_URL}${apiVersion}/forum`, {
        params: {
          limit: DATA_LIMIT,
          page: forumPageSet,
        },
        headers: getHeaders(userToken ?? ""),
      })
      .then(({ data }) => {
        const forums = data.data.data;
        console.log(forums);
        checkMoreData(forums);
        setForums((prev) => [...prev, ...forums]);
        setIsLoading(false);
        setLoaderLoading(false);
        setForumPageSet((prev) => prev + 1);
      })
      .catch((data) => {
        console.log(data);
        setIsLoading(false);
        setLoaderLoading(false);
      });
  }

  useEffect(() => {
    if (userToken) {
      fetchAllForums();
    }
  }, [userToken]);

  const navigate = useNavigate();
  const postForumNavigator = () => {
    navigate("/forums/create-forum");
  };

  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Array<forumProps>>([]);

  const handleSearch = async (query: string) => {
    setshowDropDown(true);
    setQuery(query);
    if (query === "") {
      setSearchResults([]);
      return;
    }

    await axios
      .post(
        `${BASE_URL}${apiVersion}/forum/search`,
        {
          search: query,
        },
        {
          headers: getHeaders(userToken || ""),
        }
      )
      .then(({ data }) => {
        console.log(data.forums);
        const forums = data.forums;
        setSearchResults(forums);
      });
  };

  const [showDropDown, setshowDropDown] = useState(true);

  const closeSearchBox = () => {
    setshowDropDown(false);
  };

  const searchNavigator = () => {
    if (query != "") {
      topNavigator();
      navigate("/forum/search/feed", {
        state: {
          keyword: query,
          searchedForums: searchResults,
        },
      });
    }
  };

  return (
    <>
      <Navbar />
      <Section>
        <HeaderBtn>
          <PostBtn onClick={postForumNavigator}>
            <Plus color="#ffffff" />
            <span>Post your query</span>
          </PostBtn>
        </HeaderBtn>
        <TopBar>
          <SearchBar
            updateSearch={handleSearch}
            placeholderText="Search in forum..."
            showButton={true}
            onEnterFunc={searchNavigator}
            closeDropdown={closeSearchBox}
            searchQuery={query}
            elem={
              searchResults.length == 0 ? undefined : showDropDown &&
                userToken ? (
                <ForumSearchDropdown
                  searchResults={searchResults}
                  closeSearchBox={closeSearchBox}
                  userToken={userToken}
                />
              ) : undefined
            }
          />
        </TopBar>
        {isLoading ? (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        ) : (
          <ForumGrid>
            {forums &&
              userToken &&
              forums.map((forum, index) => {
                return (
                  <ForumCard key={index} {...forum} userToken={userToken} />
                );
              })}
          </ForumGrid>
        )}
        {forums && hasMoreData && (
          <LoadMore loaderLoading={loaderLoading} onClick={fetchAllForums} />
        )}
      </Section>
      <Footer />
    </>
  );
};

export default Forum;

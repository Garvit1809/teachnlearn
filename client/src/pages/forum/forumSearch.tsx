import { useEffect, useState } from "react";
import Footer from "../../components/general-components/footer/footer";
import BackBtn from "../../components/request-comp/backBtn";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { getHeaders } from "../../utils/helperFunctions";
import { forumProps } from "./forum";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { UserCookie, userProps } from "../../utils/userCookie";
import SearchBar from "../../components/general-components/searchBar";
import ForumCard from "../../components/forum-components/forumCard";
import { styled } from "styled-components";
import Navbar from "../../components/general-components/navbar";

const Section = styled.div`
  /* border: 1px solid brown; */
  padding: 0 6.3vw;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  gap: 2rem;
`;

const TopBar = styled.div`
  /* border: 1px solid red; */
  width: 60%;
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
  margin: 2rem 8vw 4rem;
`;

const ForumSearch = () => {
  const [localUser, setLocalUser] = useState<userProps>();

  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Array<forumProps>>([]);

  const { fetchLocalUserData } = UserCookie();
  const location = useLocation();

  useEffect(() => {
    const keyword = location.state.keyword;
    const forums = location.state.searchedForums;
    setQuery(keyword);
    setSearchResults(forums);

    fetchLocalUserData().then((user) => {
      setLocalUser(user);
    });
  }, []);

  const handleSearch = async (query: string) => {
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
          headers: getHeaders(localUser?.token || ""),
        }
      )
      .then(({ data }) => {
        console.log(data.forums);
        const forums = data.forums;
        setSearchResults(forums);
      });
  };

  return (
    <>
    <Navbar />
      <Section>
        <BackBtn link="/forums" />
        <TopBar>
          <SearchBar
            updateSearch={handleSearch}
            placeholderText="Search in forum..."
            searchQuery={query}
            showButton={true}
          />
        </TopBar>
        <ForumGrid>
          {searchResults &&
            localUser &&
            searchResults.map((forum, index) => {
              return (
                <ForumCard
                  {...forum}
                  key={index}
                  userToken={localUser?.token}
                />
              );
            })}
        </ForumGrid>
      </Section>
      <Footer />
    </>
  );
};

export default ForumSearch;

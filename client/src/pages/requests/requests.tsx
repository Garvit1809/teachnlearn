import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/general-components/navbar";
import FooterWrapper from "../../components/general-components/footer/footerWrapper";
import Intro from "../../components/home-comp/intro";
import LearnCard from "../../components/request-comp/learnCard";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import axios from "axios";
import Footer from "../../components/general-components/footer/footer";
import LoadMore from "../../components/general-components/loadMore";
import { DATA_LIMIT } from "../../utils/globalConstants";
import { UserCookie } from "../../utils/userCookie";
import { getHeaders } from "../../utils/helperFunctions";
import Loader from "../../components/general-components/loader";
import LearnCardGrid from "../../components/request-comp/learnCardGrid";

const Section = styled.div`
  padding: 0 6.3vw;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  /* margin-top: 4rem; */
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2.5rem;
`;

export interface learnCardProps {
  _id: string;
  createdBy: {
    name: string;
    photo: string;
    _id: string;
    userName: string;
  };
  subject: string;
  topic: string;
  programme: string;
  standard: string;
  dueDate: string;
  interestedStudents: string[];
  preferredLanguage: string;
  description: string;
  tags: string[];
}

const Requests = () => {
  const [learnCards, setLearnCards] = useState<Array<learnCardProps>>([]);
  const [requestPageSet, setrequestPageSet] = useState<number>(1);
  const [hasMoreData, sethasMoreData] = useState(false);

  const [userToken, setUserToken] = useState<string>();

  const [isLoading, setIsLoading] = useState(true);
  const [loaderLoading, setLoaderLoading] = useState(true);

  const { fetchLocalUserToken } = UserCookie();

  useEffect(() => {
    fetchLocalUserToken().then((token) => {
      setUserToken(token);
    });
  }, []);

  const checkMoreData = (arr: Array<any>) => {
    if (arr.length == 0) {
      sethasMoreData(false);
      return;
    } else if (arr.length % DATA_LIMIT != 0) {
      sethasMoreData(false);
      return;
    }
    sethasMoreData(true);
  };

  const fetchLearnCards = async () => {
    setLoaderLoading(true);
    const curentDate = new Date();
    await axios
      .get(`${BASE_URL}${apiVersion}/learn`, {
        params: {
          limit: DATA_LIMIT,
          page: requestPageSet,
          // dueDate: {
          //   $gte: curentDate,
          // },
        },
        headers: getHeaders(userToken ?? ""),
      })
      .then(({ data }) => {
        console.log(data);
        const learnCardData = data.data.data;
        checkMoreData(learnCardData);
        setLearnCards((prev) => [...prev, ...learnCardData]);
        setIsLoading(false);
        setLoaderLoading(false);
        setrequestPageSet((prev) => prev + 1);
      })
      .catch((data) => {
        console.log(data);
        setIsLoading(false);
        setLoaderLoading(false);
      });
  };

  useEffect(() => {
    if (userToken) {
      fetchLearnCards();
      console.log("CHECKIN");
    }
  }, [userToken]);

  return (
    <>
      <Navbar />
      <Section>
        <Intro />
        {isLoading ? (
          <Loader />
        ) : learnCards.length != 0 ? (
          <LearnCardGrid learnCards={learnCards} />
        ) : null}
        {learnCards && hasMoreData && (
          <LoadMore loaderLoading={loaderLoading} onClick={fetchLearnCards} />
        )}
      </Section>
      <Footer />
    </>
  );
};

export default Requests;

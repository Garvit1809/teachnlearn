import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL, apiVersion } from "../../../utils/apiRoutes";
import { getHeaders } from "../../../utils/helperFunctions";
import { styled } from "styled-components";
import { UserCookie } from "../../../utils/userCookie";
import Loader from "../../general-components/loader";
import { PurchaseCoinIcon } from "../../general-components/svg";

const Section = styled.div`
  /* border: 1px solid red; */
  margin-left: 1rem;
  margin-top: 1rem;

  h4 {
    font-size: 1rem;
    color: #4b5565;
    text-decoration: underline;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 600;
  }

  header {
    margin-bottom: 1.5rem;
    div {
      display: flex;
      align-items: center;
      column-gap: 6px;

      svg {
        width: 2rem;
        height: 2rem;
      }
    }
  }

  div.coin-cont {
    display: flex;
    width: 100%;
    column-gap: 2rem;
  }
`;

const CoinContainer = styled.div`
  /* border: 1px solid red; */
  border: 1px solid #d5d9eb;
  padding: 32px 54px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  /* row-gap: 6px; */

  h4 {
    text-decoration: underline;
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

const UserBalance = () => {
  const [userCoins, setUserCoins] = useState<number>(0);
  const [userForumCoins, setUserForumCoins] = useState<number>(0);
  const [userToken, setUserToken] = useState<string>("");
  const [isLoading, setisLoading] = useState(false);
  const { fetchLocalUserToken } = UserCookie();

  useEffect(() => {
    fetchLocalUserToken().then((token) => {
      setUserToken(token);
    });
  }, []);

  const fetchUserBalance = async () => {
    setisLoading(true);
    await axios
      .get(`${BASE_URL}${apiVersion}/user/mybalance`, {
        headers: getHeaders(userToken),
      })
      .then(({ data }) => {
        const user = data.user;
        setUserCoins(user.coins);
        setUserForumCoins(user.forumCoins);
        setisLoading(false);
      });
  };

  useEffect(() => {
    if (userToken) {
      fetchUserBalance();
    }
  }, [userToken]);

  return isLoading ? (
    <Loader />
  ) : (
    <Section>
      <header>
        <h4>Total Balance</h4>
        <div>
          <PurchaseCoinIcon color="black" />
          <h2>{userCoins + userForumCoins}</h2>
        </div>
      </header>
      <div className="coin-cont">
        <CoinContainer>
          <h4>Coins</h4>
          <h3>{userCoins}</h3>
        </CoinContainer>
        <CoinContainer>
          <h4>Coins from Forum</h4>
          <h3>{userForumCoins}</h3>
        </CoinContainer>
      </div>
    </Section>
  );
};

export default UserBalance;

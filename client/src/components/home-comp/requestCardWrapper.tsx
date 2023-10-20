import styled from "styled-components";
import { learnCardProps } from "../../pages/requests/requests";
import { Arrow } from "../general-components/svg";
import RequestCard from "./requestCard";
import { useNavigate } from "react-router-dom";
import { topNavigator } from "../../utils/helperFunctions";
import Loader from "../general-components/loader";
import LearnCard from "../request-comp/learnCard";

const Section = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  /* margin-bottom: 2rem; */
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Nunito";
`;

const Heading = styled.h3`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #000000;
`;

const SeeAll = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 16px;
  gap: 12px;
  cursor: pointer;
  height: 41px;
  background: #eeeeee;
  border-radius: 46px;

  span {
    margin: 0;
    padding: 0;
  }
`;

const CardGrid = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @media only screen and (max-width: 1170px) {
    /* grid-template-columns: 1fr 1fr; */
    /* gap: 1rem; */
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

interface requestWrapperProps {
  requestCard: Array<learnCardProps>;
  heading: string;
  loading: boolean;
}

const RequestCardWrapper = (props: requestWrapperProps) => {
  const navigate = useNavigate();
  const requestNavigator = () => {
    topNavigator();
    navigate("/requests");
  };

  return (
    <Section>
      <Header>
        <Heading>{props.heading}</Heading>
        <SeeAll onClick={requestNavigator}>
          <span>See All</span>
          <Arrow strokeColor="#384250" />
        </SeeAll>
      </Header>
      {props.loading ? (
        <Loader />
      ) : (
        <CardGrid>
          {props.requestCard &&
            props.requestCard.map((card, index) => {
              // return <RequestCard key={index} {...card} />;
              return <LearnCard key={index} {...card} />;
            })}
        </CardGrid>
      )}
    </Section>
  );
};

export default RequestCardWrapper;

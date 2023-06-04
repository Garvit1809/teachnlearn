import React from "react";
import styled from "styled-components";
import {
  Arrow,
  InterestedIcon,
  PurchaseCoinIcon,
} from "../general-components/svg";
import UserChip from "../general-components/userChip";
import { useNavigate } from "react-router-dom";

const Section = styled.div`
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
    0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  border-radius: 16px;
  overflow: hidden;
`;

interface imageProps {
  imgHeight?: string;
}

interface detailProps {
  gapSize?: string;
}

interface headerProps {
  headerSize?: string;
}
interface buttonProps {
  btnSize?: string;
  svgSize?: string;
}
interface titleProps {
  titleSize?: string;
}

const ImageContainer = styled.div<imageProps>`
  height: 232px;
  height: ${(p) => p.imgHeight || "232px"};

  img {
    margin: 0;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DetailContainer = styled.div<detailProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 20px 32px;
  gap: 24px;
  gap: ${(p) => p.gapSize || "24px"};
  background: #f6f6f6;
  font-family: "Nunito";
`;

const Header = styled.div<headerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* border: 1px solid red; */

  h4 {
    font-weight: 500;
    font-size: ${props => props.headerSize || '18px'};
    line-height: 1;
    line-height: 25px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #000000;
  }
`;

const Interested = styled.div<headerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  span {
    font-weight: 500;
    font-size: ${props => props.headerSize || '18px'};
    line-height: 25px;
    color: #000000;
    text-transform: capitalize;
  }
`;

const Title = styled.p<titleProps>`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  font-size: ${p => p.titleSize || '24px'};
  line-height: 35px;
  color: #000000;
`;

const EnrollCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const EnrollBtn = styled.div<buttonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  gap: 8px;
  background: #332ad5;
  border-radius: 4px;
  cursor: pointer;

  span {
    font-weight: 500;
    font-size: 16px;
    font-size: ${p => p.btnSize || '16px'};
    letter-spacing: 0.02em;
    color: #ffffff;
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;

const Coins = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  svg {
    width: 18px;
    height: 18px;
  }

  span {
    font-weight: 600;
    font-size: 18px;
    color: #000000;
  }
`;

interface classCardProps {
  cssArr?: obj;
}

interface obj {
  imageHeight: string;
  gap: string;
  headerSize: string;
  titleSize: string;
  btnSize: string;
  svgSize: string;
}

const ClassroomCard = (props: classCardProps) => {
  let link =
    "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";

  const navigate = useNavigate();

  const enrollClassNavigator = () => {
    navigate("/classes/class/1");
  };

  return (
    <Section>
      <ImageContainer imgHeight={props.cssArr?.imageHeight}>
        <img src={link} alt="" />
      </ImageContainer>
      <DetailContainer gapSize={props.cssArr?.gap}>
        <Header headerSize={props.cssArr?.headerSize} >
          <h4>Web Development</h4>
          <Interested headerSize={props.cssArr?.headerSize} >
            <InterestedIcon />
            <span>22 enrolled</span>
          </Interested>
        </Header>
        <Title titleSize={props.cssArr?.titleSize} >
          Get started in Web Development and get selected in MH Fellowsip
        </Title>
        <UserChip
          name="Garvit Varshney"
          imgBorder="#000000"
          textColor="#000000"
        />
        <EnrollCont>
          <EnrollBtn onClick={enrollClassNavigator}>
            <span>Enroll Now</span>
            <Arrow strokeColor="white" />
          </EnrollBtn>
          <Coins>
            <PurchaseCoinIcon color="black" />
            <span>200 Coins</span>
          </Coins>
        </EnrollCont>
      </DetailContainer>
    </Section>
  );
};

export default ClassroomCard;

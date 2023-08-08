import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Arrow,
  InterestedIcon,
  PurchaseCoinIcon,
} from "../general-components/svg";
import UserChip from "../general-components/userChip";
import { useNavigate } from "react-router-dom";
import { UserCookie, userProps } from "../../utils/userCookie";
import {
  getReadableDate,
  getReadableTime,
  topNavigator,
} from "../../utils/helperFunctions";
import { teachinCardProps } from "../../types/teachingCardType";
import { CardStats, TagBox } from "../request-comp/learnCard";

const Section = styled.div<cardAnimationProps>`
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
    0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  border-radius: 16px;
  overflow: hidden;
  background: #094067;
  transition: all 0.15s linear;

  &:hover {
    transform: ${(p) => (p.hasAnimation ? "translateY(-10px)" : null)};
  }
`;

interface cardAnimationProps {
  hasAnimation?: boolean;
}

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
  titleLineHeight?: string;
}

// const ImageContainer = styled.div<imageProps>`
//   height: ${(p) => p.imgHeight || "232px"};

//   img {
//     margin: 0;
//     border-top-right-radius: 16px;
//     border-top-left-radius: 16px;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     /* border: 1px solid red; */
//   }
// `;

const DetailContainer = styled.div<detailProps>`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 22px;
  gap: ${(p) => p.gapSize || "24px"};
  background: #094067;
  font-family: "Nunito";
`;

const Header = styled.div<headerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* border: 1px solid red; */

  h4 {
    font-weight: 700;
    font-size: ${(props) => props.headerSize || "18px"};
    /* font-size: 18px; */
    line-height: 22px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #ef4565;
  }
`;

const Interested = styled.div<headerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  span {
    font-weight: 500;
    font-size: ${(props) => props.headerSize || "18px"};
    line-height: 22px;
    color: #000000;
    color: white;
    text-transform: capitalize;
  }
`;

const Title = styled.p<titleProps>`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: ${(p) => p.titleSize || "24px"};
  line-height: ${(p) => p.titleLineHeight || "35px"};
  color: #d8eefe;
`;

const EnrollCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.4rem;
`;

const EnrollBtn = styled.div<buttonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  gap: 8px;
  background: #332ad5;
  background: #ef4565;
  border-radius: 4px;
  cursor: pointer;

  span {
    font-weight: 500;
    font-size: 16px;
    font-size: ${(p) => p.btnSize || "16px"};
    letter-spacing: 0.02em;
    color: #ffffff;
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;

const Coins = styled.div<buttonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  svg {
    /* fill: white; */
    width: ${(p) => p.svgSize || "18px"};
    height: ${(p) => p.svgSize || "18px"};
  }

  span {
    font-weight: 600;
    font-size: ${(p) => p.btnSize || "18px"};
    color: #000000;
    color: white;
  }
`;

const UserWrapper = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* flex-wrap: wrap; */
`;

const TimeCont = styled.span`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: white;
`;

interface classCardProps {
  cssArr?: obj;
  teachCard: teachinCardProps;
  elemType?: string;
  fromLearnCard?: boolean;
  learnCardId?: string;
}

interface obj {
  hasAnimation?: boolean;
  imageHeight: string;
  gap: string;
  headerSize: string;
  titleSize: string;
  titleLineHeight?: string;
  btnSize: string;
  svgSize: string;
  userChipImgSize?: string;
  userChipTextSize?: string;
}

const ClassroomCard = (props: classCardProps) => {
  const navigate = useNavigate();

  const { fetchLocalUserData } = UserCookie();

  const [localUser, setLocalUser] = useState<userProps>();

  useEffect(() => {
    fetchLocalUserData().then((data) => {
      setLocalUser(data);
    });
    checkIsCompleted();
  }, []);

  const checkEnrolledClass = () => {
    if (localUser) {
      // console.log(props.teachCard.studentsEnrolled);

      const bool = props.teachCard.studentsEnrolled.filter((student) => {
        return student == localUser._id;
      });
      // console.log(bool);
      return bool.length;
    } else {
      return null;
    }
  };

  const checkClassTeacher = () => {
    if (localUser) {
      const isTeacher = props.teachCard.createdBy._id == localUser._id;
      return isTeacher;
    } else {
      return null;
    }
  };

  const checkIsCompleted = () => {
    const date = new Date();
    const classEndingDate = props.teachCard.classEndsAt;
    const ISOstring = new Date(classEndingDate);
    return date > ISOstring;
  };

  const checkIsReviewed = () => {
    const userId = localUser?._id;
    const reviews = props.teachCard.reviews;

    let hasReviewed = false;

    // console.log(reviews);
    reviews.forEach((element) => {
      if (element.user._id == userId) {
        hasReviewed = true;
      }
    });

    return hasReviewed;
  };

  const enrollClassNavigator = () => {
    topNavigator();
    if (checkClassTeacher()) {
      if (props.fromLearnCard) {
        navigate(`/classes/class/${props.teachCard._id}`, {
          state: {
            classroomId: props.teachCard._id,
            elemType: props.elemType,
            learnCardId: props.learnCardId,
          },
        });
      } else {
        navigate(`/classes/class/${props.teachCard._id}`, {
          state: {
            classroomId: props.teachCard._id,
            elemType: props.elemType,
          },
        });
      }
    } else {
      if (checkEnrolledClass()) {
        if (props.fromLearnCard) {
          navigate(`/classes/class/${props.teachCard._id}`, {
            state: {
              classroomId: props.teachCard._id,
              elemType: props.elemType,
              learnCardId: props.learnCardId,
            },
          });
        } else {
          navigate(`/classes/class/${props.teachCard._id}`, {
            state: {
              classroomId: props.teachCard._id,
              elemType: props.elemType,
            },
          });
        }
      } else {
        if (props.fromLearnCard) {
          navigate(`/class-overviw/${props.teachCard._id}`, {
            state: {
              classroomId: props.teachCard._id,
              elemType: props.elemType,
              learnCardId: props.learnCardId,
            },
          });
        } else {
          navigate(`/class-overviw/${props.teachCard._id}`, {
            state: {
              classroomId: props.teachCard._id,
              elemType: props.elemType,
            },
          });
        }
      }
    }
  };

  return (
    <Section hasAnimation={props.cssArr?.hasAnimation}>
      <DetailContainer gapSize={props.cssArr?.gap}>
        <Header headerSize={props.cssArr?.headerSize}>
          <h4>{props.teachCard.subject}</h4>
        </Header>
        <Title
          titleSize={props.cssArr?.titleSize}
          titleLineHeight={props.cssArr?.titleLineHeight}
        >
          {props.teachCard.topic.length > 52
            ? props.teachCard.topic.slice(0, 52) + "..."
            : props.teachCard.topic}
        </Title>
        <UserWrapper>
          <UserChip
            name={props.teachCard.createdBy.userName}
            photo={props.teachCard.createdBy.photo}
            imgBorder="#ffffff"
            textColor="#ffffff"
            imgSize={props.cssArr?.userChipImgSize}
            textSize={props.cssArr?.userChipTextSize}
            userId={props.teachCard.createdBy._id}
          />
        </UserWrapper>
        <CardStats>
          <Interested headerSize={props.cssArr?.headerSize}>
            <InterestedIcon />
            <span>{props.teachCard.studentsEnrolled.length} enrolled</span>
          </Interested>
          <TimeCont>
            {getReadableDate(props.teachCard.date) +
              ", " +
              getReadableTime(props.teachCard.classStartsAt) +
              " - " +
              getReadableTime(props.teachCard.classEndsAt)}
          </TimeCont>
        </CardStats>
        <TagBox>
          {props.teachCard.tags.map((tag, index) => {
            return (
              <div key={index}>
                <span>{tag}</span>
              </div>
            );
          })}
        </TagBox>
        <EnrollCont>
          <EnrollBtn
            onClick={enrollClassNavigator}
            btnSize={props.cssArr?.btnSize}
          >
            <span>
              {props.teachCard.hasCancelled
                ? "Class Cancelled"
                : checkClassTeacher()
                ? "Check Class"
                : checkEnrolledClass() == 1
                ? !checkIsCompleted()
                  ? "Check Class"
                  : checkIsReviewed()
                  ? "Check Class"
                  : "Give Review"
                : checkIsCompleted()
                ? "Check Class"
                : "Enroll Now"}
            </span>
            <Arrow strokeColor="white" />
          </EnrollBtn>
          {/* {checkClassTeacher() ? null : checkEnrolledClass() == 0 ? (
            <Coins
              svgSize={props.cssArr?.svgSize}
              btnSize={props.cssArr?.btnSize}
            >
              <PurchaseCoinIcon color="white" />
              <span>{props.teachCard.price} Coins</span>
            </Coins>
          ) : null} */}
        </EnrollCont>
      </DetailContainer>
    </Section>
  );
};

export default ClassroomCard;

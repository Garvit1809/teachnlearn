import styled from "styled-components";
import UserChip from "../general-components/userChip";
import {
  getReadableDate,
  getReadableTime,
  topNavigator,
} from "../../utils/helperFunctions";
import { InterestedIcon, PurchaseCoinIcon } from "../general-components/svg";
import { useNavigate } from "react-router-dom";
import { teachinCardProps } from "../../types/teachingCardType";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 22px;
  background: #674ff1;
  background: #094067;
  border-radius: 16px;
  box-sizing: border-box;
  cursor: pointer;
  font-family: "Nunito";
  transition: all 0.15s linear;

  &:hover {
    transform: translateY(-10px);
  }

  @media only screen and (max-width: 800px) {
    gap: 18px;
  }
`;

const Tag = styled.div`
  h4 {
    font-weight: 800;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #ef4565;
  }

  @media only screen and (max-width: 800px) {
    h4 {
      font-size: 14px;
    }
  }
`;

const Topic = styled.div`
  font-weight: 600;
  font-size: 22px;
  color: #ffffff;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;

  @media only screen and (max-width: 800px) {
    font-size: 20px;
    line-height: 30px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 22px;
    line-height: 26px;
  }
`;

const Stats = styled.div`
  /* border: 1px solid white; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 6px;

    span {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      color: #ffffff;
    }
  }
`;

export const UserWrapper = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 22px;

    span {
      font-size: 18px;
    }

    img {
      width: 26px;
      height: 26px;
    }
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const DueCont = styled.div`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;

  @media only screen and (max-width: 800px) {
    span {
      font-size: 16px;
    }
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

  @media only screen and (max-width: 800px) {
    span {
      font-size: 16px;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

interface cardProps {
  card: teachinCardProps;
  userId: string;
}

const RecommendedClassCard = ({ card, userId }: cardProps) => {
  const checkIfUserEnrolled = () => {
    const enrolledStudents = card.studentsEnrolled;
    const arr = enrolledStudents.filter((student) => {
      return student == userId;
    });
    return arr;
  };

  const isTeacher = () => {
    const createdBy = card.createdBy._id;
    return createdBy == userId;
  };

  const navigate = useNavigate();

  const classNavigator = () => {
    topNavigator();
    if (isTeacher()) {
      navigate(`/classes/class/${card._id}`, {
        state: {
          classroomId: card._id,
          backPageLink: "/",
        },
      });
    } else {
      if (checkIfUserEnrolled().length == 1) {
        navigate(`/classes/class/${card._id}`, {
          state: {
            classroomId: card._id,
            backPageLink: "/",
          },
        });
      } else {
        navigate(`/class-overviw/${card._id}`, {
          state: {
            classroomId: card._id,
            backPageLink: "/",
          },
        });
      }
    }
  };

  return (
    <Section onClick={classNavigator}>
      <Tag>
        <h4>{card.subject}</h4>
      </Tag>
      <Topic>
        <span>
          {card.topic.length > 50
            ? card.topic.slice(0, 50) + " ..."
            : card.topic}
        </span>
      </Topic>
      <UserWrapper>
        <UserChip
          name={card.createdBy.name}
          photo={card.createdBy.photo}
          imgBorder="#FFFFFF"
          textColor="#FFFFFF"
          userId={card.createdBy._id}
        />
        <DueCont>
          <span>
            {getReadableDate(card.date) +
              " , " +
              getReadableTime(card.classStartsAt) +
              " - " +
              getReadableTime(card.classEndsAt)}
          </span>
        </DueCont>
      </UserWrapper>
      <Stats>
        <div>
          <InterestedIcon />
          <span>{card.studentsEnrolled.length} Enrolled</span>
        </div>
        <Coins>
          <PurchaseCoinIcon color="white" />
          <span>{card.price} Coins</span>
        </Coins>
      </Stats>
    </Section>
  );
};

export default RecommendedClassCard;

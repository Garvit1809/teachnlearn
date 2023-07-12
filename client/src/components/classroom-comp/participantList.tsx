import styled from "styled-components";
import { topNavigator } from "../../utils/helperFunctions";
import { useNavigate } from "react-router-dom";

interface participantListProps {
  heading: string;
  listArr?: Array<listObj>;
  teacherObj?: listObj;
  localUserId: string;
}

interface listObj {
  name: string;
  photo: string;
  _id: string;
  userName: string;
}

const Section = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;

  h3 {
    font-weight: 600;
    font-size: 26px;
    width: 100%;
    padding-bottom: 0.3rem;
    color: #3622a5;
    border-bottom: 1px solid #3622a5;
  }

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
  }
`;

const UserContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  /* margin-bottom: 1rem; */
  cursor: pointer;

  img {
    /* border: 1px solid red; */
    width: 51px;
    height: 53px;
    object-fit: cover;
    border-radius: 50%;
  }

  div {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  h4 {
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #000000;
  }

  h5 {
    font-weight: 400;
    font-size: 16px;
    color: #000000;
  }
`;

const ParticipantList = (props: participantListProps) => {
  console.log(Array.isArray(props.listArr));

  const navigate = useNavigate();
  const userNavigationHandler = (userId?: string) => {
    topNavigator();
    if (props.localUserId == userId) {
      navigate("/me");
    } else {
      navigate(`/user/${userId}`, {
        state: {
          userId: userId,
        },
      });
    }
  };

  return (
    <Section>
      <h3>{props.heading}</h3>
      <ul>
        {Array.isArray(props.listArr) ? (
          props.listArr.map((user, index) => {
            return (
              <UserContainer
                key={index}
                onClick={() => userNavigationHandler(user._id)}
              >
                <img src={user.photo} alt="user-img" />
                <div>
                  <h4>{user.name}</h4>
                  <h5>@{user.userName}</h5>
                </div>
              </UserContainer>
            );
          })
        ) : (
          <UserContainer
            onClick={() => userNavigationHandler(props.teacherObj?._id)}
          >
            <img src={props.teacherObj?.photo} alt="" />
            <div>
              <h4>{props.teacherObj?.name}</h4>
              <h5>@{props.teacherObj?.userName}</h5>
            </div>
          </UserContainer>
        )}
      </ul>
    </Section>
  );
};

export default ParticipantList;

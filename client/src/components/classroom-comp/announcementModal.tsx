import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Textarea from "../general-components/input/textarea";
import { SubmitButton } from "../profile-comp/my-profile/profileModals/academicInfoModal";
import { Arrow } from "../general-components/svg";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { UserCookie } from "../../utils/userCookie";
import { getHeaders } from "../../utils/helperFunctions";
import { useNavigate } from "react-router-dom";

const Section = styled.div`
  width: 50vw;
  padding: 20px 32px;
  form {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    margin-bottom: 3rem;
    /* border: 1px solid red; */
  }

  textarea {
    margin-bottom: 2rem;
  }
`;

const Header = styled.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  h4 {
    font-size: 16px;
    border-bottom: 1px solid black;
  }
`;

interface announcementModalProps {
  teachCardId: string;
  closeModal: any;
}

const AnnouncementModal = (props: announcementModalProps) => {
  const [userToken, setUserToken] = useState<string>();

  const { fetchLocalUserToken } = UserCookie();

  useEffect(() => {
    fetchLocalUserToken().then((token) => {
      setUserToken(token);
    });
  }, []);

  const [content, setContent] = useState<string>("");

  function updateFields(content: string) {
    setContent(content);
  }

  const navigate = useNavigate();

  const postAnnouncementHandler = async () => {
    console.log(content);
    await axios
      .post(
        `${BASE_URL}${apiVersion}/teach/${props.teachCardId}/announcements`,
        {
          content,
        },
        {
          headers: getHeaders(userToken ?? ""),
        }
      )
      .then(({ data }) => {
        console.log(data);
        props.closeModal();
        navigate(`/classes/class/${props.teachCardId}`, {
          state: {
            classroomId: props.teachCardId,
            navLink: "overview",
          },
        });
      });
  };

  return (
    <Section>
      <Header>
        <h4>Post Announcement</h4>
      </Header>
      <Textarea
        label="Announcement"
        name="content"
        value={content}
        updateSingleField={updateFields}
        areaHeight="8rem"
      />
      <SubmitButton>
        <button type="submit" onClick={postAnnouncementHandler}>
          <span>Make Announcement</span>
          <Arrow strokeColor="#FFFFFF" />
        </button>
      </SubmitButton>
    </Section>
  );
};

export default AnnouncementModal;

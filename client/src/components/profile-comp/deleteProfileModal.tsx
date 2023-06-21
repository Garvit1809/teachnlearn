import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { customStyles } from "./my-profile/contactInfo";
import Modal from "react-modal";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../utils/apiRoutes";
import { getHeaders } from "../../utils/helperFunctions";
import { UserCookie } from "../../utils/userCookie";
import { useNavigate } from "react-router-dom";

const DeleteButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  background: #fecdca;
  border-radius: 41px;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  color: #b42318;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
`;

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

  h2 {
    /* margin-bottom: 2rem; */
  }
`;

const BottomButtons = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.5rem;
  margin-top: 3rem;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 40px;
    gap: 10px;
    background: #332ad5;
    border-radius: 8px;
    outline: none;
    border: none;
    cursor: pointer;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
  }

  button.delete {
    background-color: #fecdca;
    color: #b42318;
    font-weight: 700;
  }
`;

const DeleteProfileModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [userToken, setUserToken] = useState<string>("");

  const { fetchLocalUserToken } = UserCookie();

  useEffect(() => {
    fetchLocalUserToken().then((token) => {
      setUserToken(token);
    });
  }, []);

  const navigate = useNavigate();

  const accountDeleteHandler = async () => {
    if (userToken) {
      await axios
        .patch(
          `${BASE_URL}${apiVersion}/user/deleteMe`,
          {},
          {
            headers: getHeaders(userToken ?? ""),
          }
        )
        .then(({ data }) => {
          console.log(data);
          localStorage.clear();
          navigate("/teachNlearn");
        });
    }
  };

  return (
    <>
      <DeleteButton onClick={openModal}>Delete Account</DeleteButton>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Section>
          <Header>
            <h4>DeActivate Account</h4>
          </Header>
          <h2>Are you sure you want to delete your account??</h2>
          <BottomButtons>
            <button>Go Back</button>
            <button className="delete" onClick={accountDeleteHandler}>
              Delete Account
            </button>
          </BottomButtons>
        </Section>
      </Modal>
    </>
  );
};

export default DeleteProfileModal;

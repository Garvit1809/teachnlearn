import React, { useState } from "react";
import styled from "styled-components";
import Inputholder from "../../../general-components/input/inputholder";
import FormField from "../../../request-comp/formField";
import { userProps } from "../myProfile";
import axios from "axios";
import { BASE_URL, apiVersion } from "../../../../utils/apiRoutes";
import { getHeaders, isValidEmail } from "../../../../utils/helperFunctions";
import { localStorageUser } from "../../../../utils/globalConstants";
import { toast } from "react-toastify";
import Loader from "../../../general-components/loader";

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
`;

const SubmitButton = styled.div`
  /* border: 1px solid green; */
  display: flex;
  /* align-items: flex-end; */
  justify-content: flex-end;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 40px;
    gap: 10px;
    background: #094067;
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
`;

interface ContactProps {
  username: string;
  email: string;
  phone: string;
}

type modalProps = ContactProps & {
  userToken: string;
  closeModal: any;
};

const ContactInfoModal = (props: modalProps) => {
  const [contactInfo, setContactInfo] = useState<ContactProps>({
    username: props.username,
    email: props.email,
    phone: props.phone,
  });
  const [isLoading, setIsLoading] = useState(false);

  const toastOptions = {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
    toastId: "toast1",
  };

  const handleValidation = () => {
    const { email, phone, username } = contactInfo;
    if (email == "" || phone == "" || username == "") {
      toast.error("Fill in all the details", toastOptions);
      return false;
    } else if (!isValidEmail(email)) {
      toast.error("Not a valid email", toastOptions);
      return false;
    }
    return true;
  };

  const updateContactUserHandler = async () => {
    if (handleValidation()) {
      setIsLoading(true);
      await axios
        .patch(
          `${BASE_URL}${apiVersion}/user/mycontactInfo`,
          {
            userName: contactInfo.username,
            email: contactInfo.email,
            phoneNumber: contactInfo.phone,
          },
          {
            headers: getHeaders(props.userToken),
          }
        )
        .then(({ data }) => {
          setIsLoading(false);
          console.log(data.updatedUser);
          const user = data.updatedUser;
          user.token = props.userToken;
          localStorage.setItem(localStorageUser, JSON.stringify(user));
          window.dispatchEvent(new Event("storage"));
          window.location.reload();
        })
        .catch((data) => {
          console.log(data);
          setIsLoading(false);
          if (data.response.data.message) {
            toast.error(data.response.data.message, toastOptions);
          } else {
            toast.error("Some error occured, couldnt update", toastOptions);
          }
        });
    }
  };

  const updateFields = (fields: Partial<ContactProps>) => {
    setContactInfo((prev) => {
      return { ...prev, ...fields };
    });
  };

  return (
    <Section>
      <Header>
        <h4>Contact Information</h4>
      </Header>
      <form action="">
        <FormField
          elem={
            <Inputholder
              label="UserName"
              name="username"
              type="text"
              value={contactInfo.username}
              updateFields={updateFields}
            />
          }
          inputDesc="Change your Username :-"
        />
        <FormField
          elem={
            <Inputholder
              label="Email"
              name="email"
              type="email"
              value={contactInfo.email}
              updateFields={updateFields}
            />
          }
          inputDesc="Change your Email :-"
        />
        <FormField
          elem={
            <Inputholder
              label="Phone Number"
              name="phone"
              type="string"
              value={contactInfo.phone}
              updateFields={updateFields}
            />
          }
          inputDesc="Change your Phone Number :-"
        />
      </form>
      <SubmitButton>
        <button type="submit" onClick={updateContactUserHandler}>
          {isLoading ? (
            <Loader loaderHeight="1.6rem" color="white" />
          ) : (
            "Edit User Info"
          )}
        </button>
      </SubmitButton>
    </Section>
  );
};

export default ContactInfoModal;

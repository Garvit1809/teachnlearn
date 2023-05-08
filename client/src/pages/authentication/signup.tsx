import React from "react";
import styled from "styled-components";
import Inputholder from "../../components/general-components/inputholder";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div``;

const InfoContainer = styled.div``;

const changeHandler = () => {
  console.log('hello');
  
}

const Signup = () => {
  return (
    <Section>
      <FormContainer>
        <form>
          <Inputholder value="loll" onChangeHandler={changeHandler} />
        </form>
      </FormContainer>
      <InfoContainer></InfoContainer>
    </Section>
  );
};

export default Signup;

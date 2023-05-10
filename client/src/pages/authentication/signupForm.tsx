import React, { useState } from "react";
import styled from "styled-components";
import Inputholder from "../../components/general-components/inputholder";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const SignupForm = () => {
  const [name, setname] = useState<string>("");

  return (
    <Section>
      <form>
        <Inputholder
          value={name}
          setname={setname}
        />
      </form>
    </Section>
  );
};

export default SignupForm;

import React from "react";
import styled from "styled-components";
import Textarea from "../general-components/input/textarea";

const Section = styled.div`
  /* border: 1px solid red; */
  width: 100%;
`;

const AddExpecBtn = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 0.5rem;
  button {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 10px;
    background: #332ad5;
    border-radius: 8px;
    border: none;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    /* line-height: px; */
    color: #ffffff;
  }
`;

const ExpectationsContainer = styled.ul`
  /* border: 1px solid red; */
  margin-top: 1rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
`;

const Expectation = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    /* border: 1px solid red; */
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
  }

  span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    cursor: pointer;
  }
`;

interface expecProps {
  updateFields: any;
  expectation: string;
  expectations: string[];
}

const ExpectationWrapper = (props: expecProps) => {

  const expectationHandler = () => {
    const expectation = props.expectation;
    const newArr = props.expectations;
    newArr.push(expectation);
    props.updateFields({ expectations: newArr, expectation: "" });
  };

  const removeExpecHandler = (expec: string) => {
    const newArr = props.expectations;
    const filteredArr = newArr.filter((elem, index) => {
      return elem != expec;
    });
    props.updateFields({ expectations: filteredArr });
  };

  return (
    <Section>
      <Textarea
        label="Expectations"
        name="expectation"
        updateFields={props.updateFields}
        value={props.expectation}
      />
      <AddExpecBtn>
        <button type="button" onClick={expectationHandler}>
          Add Expectation
        </button>
      </AddExpecBtn>
      <ExpectationsContainer>
        {props.expectations.map((expec, index) => {
          return (
            <Expectation>
              <li key={index}>{expec}</li>
              <span onClick={() => removeExpecHandler(expec)}>Remove</span>
            </Expectation>
          );
        })}
      </ExpectationsContainer>
    </Section>
  );
};

export default ExpectationWrapper;

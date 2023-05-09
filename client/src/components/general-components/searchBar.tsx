import React from "react";
import styled from "styled-components";
import { Arrow, SearchIcon } from "./svg";

const Section = styled.div`
  /* border: 1px solid red; */
  form {
    display: flex;
    align-items: center;
    /* justify-content: ; */

    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 16px 14px;
      gap: 10px;

      width: 47px;
      height: 47px;

      background: #000000;
      border-radius: 8px;

      border: 0;
      outline: none;
      cursor: pointer;
    }
  }
`;

const SearchBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 14px;
  gap: 12px;
  /* width: 471px; */
  height: 52px;
  border: 1px solid #7d89b0;
  border-radius: 8px;
  margin-right: 1vw;

  input {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 111.4%;
    color: #98a2b3;
    border: none;
    min-width: 340px;
    
    &::placeholder{
      color: #98a2b3;
    }

    &:focus{
      outline: none;
    }
  }
`;

const SearchBar = () => {
  return (
    <Section>
      <form>
        <SearchBox>
          <SearchIcon />
          <input type="text" placeholder="Search for anything" />
        </SearchBox>
        <button>
          <Arrow strokeColor="white" />
        </button>
      </form>
    </Section>
  );
};

export default SearchBar;

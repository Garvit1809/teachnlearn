import React, { ReactElement } from "react";
import styled from "styled-components";
import { Arrow, SearchIcon } from "./svg";
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Section = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  position: relative;
  form {
    display: flex;
    width: 100%;
    align-items: center;
    /* column-gap: 1rem; */

    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 16px 14px;
      gap: 10px;

      width: 47px;
      height: 47px;
      margin-left: 1rem;

      background: #094067;
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
  width: 100%;
  height: 52px;
  border: 1px solid #7d89b0;
  border-radius: 8px;

  svg {
    /* border: 1px solid red; */
    /* width: 20px; */
    /* height: 20px; */
  }

  input {
    width: 100%;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 111.4%;
    color: #98a2b3;
    border: none;
    /* min-width: 340px; */

    &::placeholder {
      color: #98a2b3;
    }

    &:focus {
      outline: none;
    }
  }
`;

interface searchProps {
  placeholderText?: string;
  updateSearch?: any;
  elem?: ReactElement;
  showButton?: boolean;
  onEnterFunc?: any;
  searchQuery?: string;
  
}

const SearchBar = (props: searchProps) => {
  return (
    <Section>
      <form
        onSubmit={
          props.onEnterFunc ? props.onEnterFunc : (e) => e.preventDefault()
        }
      >
        <SearchBox>
          <SearchIcon />
          <input
            type="text"
            placeholder={props.placeholderText}
            value={props.searchQuery}
            onChange={(e) => props.updateSearch(e.target.value)}
          />
        </SearchBox>
        {props.showButton && (
          <button type="button" onClick={props.onEnterFunc}>
            <Arrow strokeColor="white" />
          </button>
        )}
      </form>
      {props.elem}
    </Section>
  );
};

export default SearchBar;

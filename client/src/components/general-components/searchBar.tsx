import React, { ReactElement } from "react";
import styled from "styled-components";
import { Arrow, CrossIcon, SearchIcon } from "./svg";
import { useNavigate } from "react-router-dom";

const Section = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  position: relative;
  z-index: 10;
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

  @media only screen and (max-width: 750px) {
    form {
      button {
        margin-left: 0.4rem;
      }
    }
  }
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 16px 14px;
  width: 100%;
  height: 52px;
  border: 1px solid #7d89b0;
  border-radius: 8px;
  background-color: #fff;
  box-sizing: border-box;

  div {
    /* border: 1px solid red; */
    height: fit-content;
    display: flex;
    border-radius: 50%;
    cursor: pointer;
  }
  svg {
    /* border: 1px solid red; */
    width: 20px;
    height: 20px;
    &:last-child {
      /* border: 1px solid red; */
      width: 18px;
      height: 18px;
      padding: 4px;
    }
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
      border: 1ox solid red;
    }

    &:focus {
      outline: none;
    }
  }

  @media only screen and (max-width: 750px) {
    display: flex;
    align-items: center;
    gap: 6px;
    input {
      /* font-size: 18px; */
      line-height: 1;
    }

    svg {
      /* border: 1px solid red; */
      width: 20px;
      height: 20px;
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
  closeDropdown?: any;
}

const SearchBar = (props: searchProps) => {
  const cancelhandler = () => {
    if (props.closeDropdown) {
      props.closeDropdown();
      props.updateSearch("");
    }
  };

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
          {props.closeDropdown && props.searchQuery != "" && (
            <div onClick={cancelhandler}>
              <CrossIcon />
            </div>
          )}
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

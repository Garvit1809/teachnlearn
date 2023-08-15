import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useOutsideAlerter } from "../../../utils/helperFunctions";
import { HideEyeIcon } from "../svg";

const Section = styled.div`
  /* border: 1px solid red; */
  position: relative;
  width: 100%;
  box-sizing: border-box;
  font-family: "Nunito";
  height: fit-content;
  display: flex;
  flex-direction: column;

  div.icon {
    /* border: 1px solid red; */
    position: absolute;
    right: 10px;
    top: 30px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  span.show-password {
    font-size: 0.8rem;
    font-weight: 600;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 15px 0px 15px 10px;

  border: 1.5px solid #d5d9eb;
  border-radius: 8px;
  color: #000000;
  outline: none;
  font-size: 16px;
  font-weight: 400;
`;

interface labelProps {
  isValid: boolean;
}

const Label = styled.span<labelProps>`
  position: absolute;
  top: 0;
  font-family: "Nunito";
  left: 10px;
  transform: translateY(19px);
  pointer-events: none;
  font-size: 16px;
  /* text-transform: ${(p) => (p.isValid ? "none" : "uppercase")}; */
  transition: 0.25s;
  line-height: 1;
  transform: ${(props) =>
    props.isValid ? "translateX(5px) translateY(-5px)" : "null"};
  font-size: ${(props) => (props.isValid ? "11px" : "16px")};
  background-color: ${(props) => (props.isValid ? "white" : "none")};
  color: ${(props) => (props.isValid ? "#b3b8db" : "#564c4d")};
  padding: ${(props) => (props.isValid ? "0 5px" : "none")};

  ${Section}:focus-within & {
    text-transform: none;
    transform: translateX(5px) translateY(-5px);
    font-size: 11px;
    background-color: white;
    color: #b3b8db;
    padding: 0 5px;
  }
`;

const DropdownInputWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  box-sizing: border-box;
`;

const DropdownMenu = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  max-height: 12rem;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  z-index: 100;
  background-color: white;
  box-sizing: border-box;
  padding: 0.4rem 1rem;
  width: 100%;
  border: 1.5px solid #d5d9eb;
  /* border: 1.5px solid red; */
  border-radius: 8px;

  span {
    /* border: 1px solid red; */
    padding: 4px 0;
    cursor: pointer;
  }
`;

const RequiredText = styled.div`
  /* position: absolute; */
  /* top: 100%; */
  /* border: 1px solid red; */
  span {
    color: rgba(0, 0, 0, 0.7);
    font-size: 0.8rem;
    text-transform: capitalize;
    /* line-height: 0; */
  }
  /* margin-top: 0rem; */
  margin-left: 0.5rem;
`;

interface inputProps {
  value: string | number | undefined;
  type: string;
  label: string;
  name: string;
  updateFields: any;
  hasDropdown?: boolean;
  dropdownData?: string[];
  isRequired?: boolean;
  placeholderText?: string;
}

const Inputholder = (props: inputProps) => {
  const [inputType, setInputType] = useState(props.type);
  const [isValid, setisValid] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPlaceholder, setshowPlaceholder] = useState(true);

  useEffect(() => {
    if (typeof props.value == "string") {
      if (props.value?.trim().length > 0) {
        setisValid(true);
      }
    } else if (typeof props.value == "number") {
      if (props.value >= 0) {
        setisValid(true);
      }
    }
  }, [props]);

  const inputhandler = (e: any) => {
    setShowDropdown(true);
    props.updateFields({ [e.target.name]: e.target.value });

    const value = e.target.value;

    if (value?.trim().length > 0) {
      setisValid(true);
      setshowPlaceholder(false);
    } else {
      // setshowPlaceholder(true);
      setisValid(false);
    }
  };

  const dropdownMenuhandler = (data: string) => {
    props.updateFields({ [props.name]: data });
    setShowDropdown(false);
  };

  const closeDropDown = () => {
    setShowDropdown(false);
  };

  const removeInputFocus = () => {
    console.log("CHECK");

    if (inputRef.current) {
      const value = inputRef.current.value;
      console.log(value);

      if (value.trim().length > 0) {
        setshowPlaceholder(false);
      } else {
        setshowPlaceholder(true);
      }
    }
  };

  const wrapperRef = useRef<HTMLInputElement | null>(null);
  useOutsideAlerter(wrapperRef, closeDropDown, false, null, false, null);

  const inputRef = useRef<HTMLInputElement | null>(null);
  useOutsideAlerter(inputRef, null, true, removeInputFocus, false, null);

  const hideUnhideHandler = () => {
    if (inputType == "password") {
      setInputType("string");
    } else if (inputType == "string") {
      setInputType("password");
    }
  };

  return (
    <Section>
      <Input
        type={inputType}
        required
        value={props.value}
        name={props.name}
        ref={inputRef}
        onFocus={() => setshowPlaceholder(false)}
        onChange={(e) => inputhandler(e)}
      />
      {props.type == "password" && (
        <div className="icon" onClick={hideUnhideHandler}>
          {inputType == "password" ? (
            <span className="show-password">Show</span>
          ) : (
            <HideEyeIcon />
          )}
        </div>
      )}
      <Label isValid={isValid}>
        {showPlaceholder ? props.placeholderText : props.label}
      </Label>
      {props.isRequired && (
        <RequiredText>
          <span>*required</span>
        </RequiredText>
      )}
      {props.hasDropdown
        ? props.value == ""
          ? null
          : showDropdown &&
            (props.dropdownData?.filter((val) => {
              if (typeof props.value == "string") {
                return val.toLowerCase().includes(props.value.toLowerCase());
              }
            }).length == 0 ? null : (
              <DropdownMenu ref={wrapperRef}>
                {props.dropdownData
                  ?.filter((val) => {
                    if (typeof props.value == "string") {
                      return val
                        .toLowerCase()
                        .includes(props.value.toLowerCase());
                    }
                  })
                  .map((data, index) => {
                    return (
                      <span
                        key={index}
                        onClick={() => dropdownMenuhandler(data)}
                      >
                        {data}
                      </span>
                    );
                  })}
              </DropdownMenu>
            ))
        : null}
    </Section>
  );
};

export default Inputholder;

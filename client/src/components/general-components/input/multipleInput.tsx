import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useOutsideAlerter } from "../../../utils/helperFunctions";

const Section = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;

  input {
    width: 100%;
    height: 100%;
    padding: 15px 0px 15px 10px;
    border: 1.5px solid #d5d9eb;
    box-sizing: border-box;
    border-radius: 8px;
    color: #000000;
    outline: none;
    font-size: 16px;
    font-weight: 400;
  }
`;

interface labelProps {
  isValid: boolean;
}

const Label = styled.span<labelProps>`
  position: absolute;
  top: 0;
  left: 10px;
  transform: translateY(19px);
  pointer-events: none;
  font-size: 16px;
  text-transform: ${(p) => (p.isValid ? "none" : "uppercase")};
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

export interface USERDATA {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  profilePic: string;
  number: string;
  course: string;
  interestedSubjects: string[];
  subject: string;
  strongSubjects: string[];
  preferredLanguages: string[];
}

interface inputProps {
  value: string;
  label: string;
  name: string;
  arr: string[];
  elemName: string;
  updateFields: (fields: Partial<USERDATA>) => void;
  hasDropdown?: boolean;
  dropdownData?: string[];
  maxLimit?: number;
}

const MultipleInput = (props: inputProps) => {
  const [isValid, setisValid] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (props.value?.trim().length > 0) {
      setisValid(true);
    }
  }, []);

  const inputhandler = (e: any) => {
    setShowDropdown(true);
    props.updateFields({ [props.elemName]: e.target.value });

    const value = e.target.value;

    if (value?.trim().length > 0) {
      setisValid(true);
    } else {
      setisValid(false);
    }
  };

  const keyHandler = (e: any) => {
    console.log(e.key == "Enter");
    if (e.key == "Enter") {
      props.arr?.push(props.value);
      console.log(props.arr);
      props.updateFields({ [props.name]: props.arr, [props.elemName]: "" });
    }
  };

  const dropdownMenuhandler = (data: string) => {
    props.updateFields({ [props.elemName]: data });
    setShowDropdown(false);
  };

  const closeDropDown = () => {
    setShowDropdown(false);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, closeDropDown);

  return (
    <Section>
      <input
        type="text"
        required
        value={props.value}
        name={props.name}
        onChange={(e) => inputhandler(e)}
        onKeyDown={keyHandler}
        disabled={props.arr.length == props.maxLimit}
      />
      <Label isValid={isValid}>{props.label}</Label>
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

export default MultipleInput;

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useOutsideAlerter } from "../../../utils/helperFunctions";

const Section = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  font-family: "Nunito";
  height: fit-content;
  display: flex;
  flex-direction: column;
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

interface USERDATA {
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
  value: string | number;
  type: string;
  label: string;
  name: string;
  // updateFields: (fields: Partial<USERDATA>) => void;
  updateFields: any;
  hasDropdoen?: boolean;
  dropdownData?: string[];
}

const Inputholder = (props: inputProps) => {
  const [isValid, setisValid] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

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
    } else {
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

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, closeDropDown);

  return (
    <Section>
      <Input
        type={props.type}
        required
        value={props.value}
        name={props.name}
        onChange={(e) => inputhandler(e)}
      />
      <Label isValid={isValid}>{props.label}</Label>
      {props.hasDropdoen
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

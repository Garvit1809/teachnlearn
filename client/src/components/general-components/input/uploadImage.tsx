import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { UploadIcon } from "../svg";

const Section = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
  /* margin-bottom: 1.5rem; */
  box-sizing: border-box;

  padding: 15px 0px 15px 10px;
  border: 1.5px solid #d5d9eb;
  box-sizing: content-box;
  border-radius: 8px;
  color: #000000;
  outline: none;
  z-index: 1;
  /* transform: translateX(7px); */
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  opacity: 0;
  /* cursor: pointer; */
  font-size: 24px;
  height: 100%;
`;

const Label = styled.span`
  position: absolute;
  top: 0;
  font-family: "Nunito";
  left: 10px;
  pointer-events: none;
  /* text-transform: uppercase; */
  transition: 0.25s;
  line-height: 1;
  transform: translateX(5px) translateY(-5px);
  font-size: 11px;
  background-color: white;
  color: #b3b8db;
  padding: 0 5px;
`;

const InputPlaceholder = styled.div`
  position: absolute;
  font-family: "Nunito";
  font-style: normal;
  padding: 0 5px;
  /* top: 15px; */
  /* left: 10px; */
  font-weight: 400;
  font-size: 16px;
  color: #564c4d;
  transition: all 0.25s linear;
  /* line-height: 1; */
  z-index: -1;
  /* cursor: pointer; */

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  span{
    /* cursor: pointer; */
  }

  svg {
    color: #564c4d;
  }
`;

const UploadImage = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [fileName, setFileName] = useState("");

  const imageUploadHandler = () => {
    if (inputRef.current != null) {
      const files = inputRef.current.files;
      if (files != null) {
        const name = files[0].name;
        console.log(name);
        setFileName(name);
      }
    }
  };

  return (
    <Section>
      <Input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={imageUploadHandler}
      />
      <Label>Profile Pic</Label>
      <InputPlaceholder>
        {fileName ? (
          <span>{fileName}</span>
        ) : (
          <>
            <UploadIcon />
            <span>Click to Upload</span>
          </>
        )}
      </InputPlaceholder>
    </Section>
  );
};

export default UploadImage;

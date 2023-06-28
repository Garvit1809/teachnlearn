import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { CrossIcon, UploadIcon } from "../svg";

const Section = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
  box-sizing: border-box;

  padding: 15px 0px;
  border: 1.5px solid #d5d9eb;
  box-sizing: content-box;
  border-radius: 8px;
  color: #000000;
  outline: none;
  z-index: 1;

  input {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    opacity: 0;
    /* cursor: pointer; */
    font-size: 24px;
    height: 100%;
  }
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
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
  left: 10px;
  font-weight: 400;
  font-size: 16px;
  color: #564c4d;
  transition: all 0.25s linear;
  z-index: -1;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const CrossContainer = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  z-index: 3;
  cursor: pointer;
  svg {
    width: 20px;
    height: 16px;
  }
`;

interface uploadImageProps {
  updateFields: any;
  photoOnCross?: string;
  photoName?: string;
}

const UploadImage = ({
  updateFields,
  photoOnCross,
  photoName,
}: uploadImageProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [fileName, setFileName] = useState("");

  const postImage = (pics: FileList | null) => {
    if (!pics) return;
    if (inputRef.current != null) {
      const files = inputRef.current.files;
      if (files != null) {
        const name = files[0].name;
        console.log(name);
        setFileName(name);
      }
    }
    console.log(pics[0]);

    const pic = pics[0];
    if (pic.type === "image/jpeg" || pic.type === "image/png") {
      const data = new FormData();
      data.append("file", pic);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dkgrvhkxb");
      fetch("https://api.cloudinary.com/v1_1/dkgrvhkxb/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          updateFields({ photo: data.url.toString() });
          console.log(data);
          console.log(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("errrrrrorrrr");
    }
  };

  const imageRemoveHandler = () => {
    updateFields({ photo: photoOnCross ? photoOnCross : "" });
    setFileName(photoName ? photoName : "");
  };

  return (
    <Section>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={(e) => postImage(e.target.files)}
      />
      <CrossContainer onClick={imageRemoveHandler}>
        <CrossIcon />
      </CrossContainer>
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

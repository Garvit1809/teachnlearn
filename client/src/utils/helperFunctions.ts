import { useNavigate } from "react-router-dom";
import { months } from "./globalConstants";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const getHeaders = (token: string) => {
  return {
    Authorization: `Bearer ${token}`,
  };
};

export const getReadableDate = (ISODate: string) => {
  const readable = new Date(ISODate);
  const month = readable.getMonth();
  const date = readable.getDate();
  const year = readable.getFullYear();

  const monthLong = months[month];
  const fulldate = monthLong + " " + date;
  return fulldate;
};

export const getReadableTime = (ISODate: string) => {
  const date = new Date(ISODate);

  const timestampWithOffset = date.getTime();
  const dateWithOffset = new Date(timestampWithOffset);

  const hours = dateWithOffset.getHours();
  let minutes = dateWithOffset.getMinutes();

  let concatedTime;
  if (minutes < 10) {
    concatedTime = String(hours + ":" + minutes) + "0";
  } else {
    concatedTime = String(hours + ":" + minutes);
  }
  return concatedTime;
};

export const topNavigator = () => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
};

export function useOutsideAlerter(ref: any, func: any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      // if (ref.current && !ref.current.contains(event.target)) {

      // }
      if (ref.current && !ref.current.contains(event.target)) {
        console.log("SHOOOOOO");
        func();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export function isValidEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

export async function autoGenerateImage(topic: string) {
  // console.log(process.env.REACT_APP_UNSPASH_ACCESS_KEY);

  const res = await axios.get(
    `https://api.unsplash.com/search/photos?page=1&query=${topic}&client_id=s26KY0b_ODGcUA1jZP4aqy-NPGIYX5qa-z8ZwJg49VU`
  );
  const randomImg = Math.floor(Math.random() * 10);
  let img = res.data.results[randomImg].urls.full;
  if (!img) {
    for (let index = 0; index < res.data.results.length; index++) {
      if (res.data.results[randomImg].urls.full) {
        img = res.data.results[randomImg].urls.full;
        break;
      }
    }
  }
  return img;
}

export const getToastOptions = () => {
  return {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
  };
};

import { useNavigate } from "react-router-dom";
import { months } from "./globalConstants";
import { useEffect } from "react";

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
      if (ref.current && !ref.current.contains(event.target)) {
        // setShowDropdown(true);
        func();
        // alert('djb')
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

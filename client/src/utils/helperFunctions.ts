import { useNavigate } from "react-router-dom";
import { months } from "./globalConstants";

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
  const concatedTime = hours + ":" + minutes;

  return concatedTime;
};

export const topNavigator = () => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
};

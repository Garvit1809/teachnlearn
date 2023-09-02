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

  const monthLong = months[month];
  const fulldate = monthLong + " " + date;
  return fulldate;
};

function toHoursAndMinutes(totalMinutes: number) {
  const timezoneHours = Math.floor(totalMinutes / 60);
  const timezoneMinutes = totalMinutes % 60;

  // console.log(timezoneHours, timezoneMinutes);

  return { timezoneHours, timezoneMinutes };
}

export const getReadableTime = (ISODate: string) => {
  const date = new Date(ISODate);

  let timestampWithOffset = date.getTime();

  // let diff = date.getTimezoneOffset();
  // console.log("DIFF");
  // console.log(diff);

  // let unsignedDiff;

  // if (diff > 0) {
  //   unsignedDiff = diff;
  // } else {
  //   unsignedDiff = -diff;
  // }

  // const { timezoneHours, timezoneMinutes } = toHoursAndMinutes(unsignedDiff);

  const dateWithOffset = new Date(timestampWithOffset);

  let hours = dateWithOffset.getHours();
  let minutes = dateWithOffset.getMinutes();

  // let exactHours;
  // let exactMinutes;

  // if (timezoneHours > hours) {
  //   if (diff < 0) {
  //     exactHours = 24 + hours - timezoneHours;
  //   } else {
  //     exactHours = 24 + hours + timezoneHours;
  //   }
  // } else {
  //   if (diff < 0) {
  //     exactHours = hours - timezoneHours;
  //   } else {
  //     exactHours = hours + timezoneHours;
  //   }
  // }

  // if (timezoneMinutes > minutes) {
  //   if (diff < 0) {
  //     exactMinutes = 60 + minutes - timezoneMinutes;
  //   } else {
  //     exactMinutes = 60 + minutes + timezoneMinutes;
  //   }
  // } else {
  //   if (diff < 0) {
  //     exactMinutes = minutes - timezoneMinutes;
  //   } else {
  //     exactMinutes = minutes + timezoneMinutes;
  //   }
  // }

  let concatedTime;
  // if (exactMinutes < 10) {
  //   concatedTime = String(exactHours + ":" + "0" + exactMinutes);
  // } else {
  //   concatedTime = String(exactHours + ":" + exactMinutes);
  // }

  if (minutes < 10) {
    if (hours < 10) concatedTime = String("0" + hours + ":" + "0" + minutes);
    else concatedTime = String(hours + ":" + "0" + minutes);
  } else {
    if (hours < 10) concatedTime = String("0" + hours + ":" + minutes);
    else concatedTime = String(hours + ":" + minutes);
  }
  return concatedTime;
};

export const topNavigator = () => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
};

export function useOutsideAlerter(
  ref: any,
  divFunc: any,
  isInput: boolean,
  inputFunc: any,
  isNavSearch: boolean,
  navFunc: any
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        !isInput &&
        !isNavSearch &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        // console.log("OUTSIDE DIV");
        // console.log(divFunc);
        divFunc();
      } else if (
        !isInput &&
        isNavSearch &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        // console.log(isNavSearch);
        // console.log("OUTSIDE NAV");
        // console.log(navFunc);
        navFunc();
      } else if (
        isInput &&
        !isNavSearch &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        // console.log("OUTSIDE INPUT");
        // console.log(inputFunc);
        inputFunc();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export function navOutsideAlerter(ref: any, func: any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        func();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export function isValidEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

export async function autoGenerateImage(
  subject: string,
  tags: string[],
  topic?: string
) {
  // console.log(process.env.REACT_APP_UNSPASH_ACCESS_KEY);

  let res = await axios.get(
    `https://api.unsplash.com/search/photos?page=1&query=${subject}&client_id=s26KY0b_ODGcUA1jZP4aqy-NPGIYX5qa-z8ZwJg49VU`
  );

  const resultLength = res.data.results.length;

  if (res.data.results.length == 0) {
    console.log("Nothing from subject");

    if (tags?.length != 0) {
      for (let i = 0; i < tags?.length; i++) {
        console.log(`Checking tag ${i}`);
        res = await axios.get(
          `https://api.unsplash.com/search/photos?page=1&query=${tags[i]}&client_id=s26KY0b_ODGcUA1jZP4aqy-NPGIYX5qa-z8ZwJg49VU`
        );
        if (res.data.results.length != 0) break;
      }
    } else {
      console.log(`Checking Topic`);
      res = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${topic}&client_id=s26KY0b_ODGcUA1jZP4aqy-NPGIYX5qa-z8ZwJg49VU`
      );
    }
  }

  const randomImg = Math.floor(Math.random() * resultLength);
  let img = res.data.results[randomImg].urls.full;
  if (!img) {
    for (let index = 0; index < res.data.results.length; index++) {
      if (res.data.results[randomImg].urls.full) {
        img = res.data.results[randomImg].urls.full;
        break;
      }
    }
  }
  console.log(img);

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

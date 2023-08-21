import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { localStorageUser } from "../../utils/globalConstants";
import Home from "./home";
import LandingPage from "./landingPage";

const MainHome = () => {
  const [storageChecked, setStorageChecked] = useState(false);
  const [renderHome, setRenderHome] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(localStorageUser)) {
      setRenderHome(false);
      setStorageChecked(true);
    } else {
      setRenderHome(true);
      setStorageChecked(true);
    }
  }, []);

  return storageChecked && renderHome ? <Home /> : <LandingPage />;
};

export default MainHome;

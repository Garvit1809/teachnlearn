import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

export const navigateToHome = () => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  navigate("/");
};

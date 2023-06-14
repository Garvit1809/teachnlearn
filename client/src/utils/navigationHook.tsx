import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
export const navigateTo = (link: string) => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    navigate(link);
}
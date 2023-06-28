import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/landing-page/home";
import Profile from "./pages/profile/profile";

import "./app.css";
import NewSignup from "./pages/authentication/newSignup";
import Forum from "./pages/forum/forum";
import SingleForum from "./pages/forum/singleForum";
import Classrooms from "./pages/classroom/classrooms";
import SingleClassroom from "./pages/classroom/singleClassroom";
import Signin from "./pages/authentication/signin";
import CreateLearnCard from "./components/request-comp/createLearnCard";
import CreateTeachCard from "./components/request-comp/createTeachCard";
import Requests from "./pages/requests/requests";
import LearnCardOverview from "./components/request-comp/learnCardOverview";
import { UserCookie } from "./utils/userCookie";
import { useEffect, useState } from "react";
import LandingPage from "./pages/landing-page/landingPage";
import ClassroomOverview from "./pages/classroom/classroomOverview";
import CreateForum from "./components/forum-components/createForum";
import { userProps } from "./components/profile-comp/my-profile/myProfile";

function App() {
  const { fetchLocalUserData } = UserCookie();

  const [localUser, setLocalUser] = useState<userProps>();

  // const loca = document.location.pathname;

  useEffect(() => {
    fetchLocalUserData().then((data) => {
      setLocalUser(data);
    });
    // console.log("LOCA :-" + loca);
  }, []);

  // useEffect(() => {
  //   console.log(localUser);
  // }, [localUser]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachNlearn" element={<LandingPage />} />
        <Route path="/signup" element={<NewSignup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forums" element={<Forum />} />
        <Route path="/forum/:id" element={<SingleForum />} />
        <Route path="/create-forum" element={<CreateForum />} />
        <Route path="/classes" element={<Classrooms />} />
        <Route path="/class-overviw/:id" element={<ClassroomOverview />} />
        <Route path="/classes/class/:id" element={<SingleClassroom />} />
        <Route path="/requests" element={<Requests />} />
        <Route
          path="/learncard-overview/:learncardId"
          element={<LearnCardOverview />}
        />
        <Route path="/create-learn-request" element={<CreateLearnCard />} />
        <Route path="/create-teach-request" element={<CreateTeachCard />} />
        <Route path="/me" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

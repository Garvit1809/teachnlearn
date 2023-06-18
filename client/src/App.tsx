import { Route, Routes } from "react-router-dom";
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
import { useEffect } from "react";
import LandingPage from "./pages/landing-page/landingPage";
import ClassroomOverview from "./pages/classroom/classroomOverview";

function App() {
  const { fetchLocalUserData, localUser } = UserCookie();

  useEffect(() => {
    fetchLocalUserData();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<NewSignup />} />
        <Route path="/signin" element={<Signin />} />
        {localUser ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<LandingPage />} />
        )}
        <Route path="/forum" element={<Forum />} />
        <Route path="/forum/:id" element={<SingleForum />} />
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

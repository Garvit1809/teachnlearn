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
import LandingPage from "./pages/landing-page/landingPage";
import ClassroomOverview from "./pages/classroom/classroomOverview";
import CreateForum from "./components/forum-components/createForum";
import Blogs from "./pages/blogs/blogs";
import Groups from "./pages/groups/groups";
import MyAI from "./pages/ai/myAI";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Terms from "./pages/terms/terms";
import UserProfile from "./pages/profile/userProfile";
import FreeBlogs from "./pages/blogs/freeBlogs";
import SearchFeed from "./components/general-components/searchFeed";
import ForumSearch from "./pages/forum/forumSearch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<NewSignup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forums" element={<Forum />} />
        <Route path="/forum/:id" element={<SingleForum />} />
        <Route path="/forums/create-forum" element={<CreateForum />} />
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
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/teachNlearn-blogs" element={<FreeBlogs />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/myai" element={<MyAI />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-privacy" element={<Terms />} />
        <Route path="/app-coming-soon" element={<FreeBlogs />} />
        <Route path="/search/feed" element={<SearchFeed />} />
        <Route path="/forum/search/feed" element={<ForumSearch />} />
      </Routes>
    </div>
  );
}

export default App;

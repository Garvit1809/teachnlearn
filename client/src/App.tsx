import { Route, Routes } from "react-router-dom";
import Home from "./pages/landing-page/home";
import Profile from "./pages/profile/profile";

import "./app.css";
import NewSignup from "./pages/authentication/newSignup";
import Forum from "./pages/forum/forum";
import SingleForum from "./pages/forum/singleForum";
import Classrooms from "./pages/classroom/classrooms";
import SingleClassroom from "./pages/classroom/singleClassroom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<NewSignup />} />
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/forum/:id" element={<SingleForum />} />
        <Route path="/classroom" element={<Classrooms />} />
        <Route path="/classroom/:id" element={<SingleClassroom />} />
        <Route path="/me" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

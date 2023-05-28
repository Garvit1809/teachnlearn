import { Route, Routes } from "react-router-dom";
import Home from "./pages/landing-page/home";
import Profile from "./pages/profile/profile";

import "./app.css";
import NewSignup from "./pages/authentication/newSignup";
import Forum from "./pages/forum/forum";
import SingleForum from "./pages/forum/singleForum";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<NewSignup />} />
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/forum/:id" element={<SingleForum />} />
        <Route path="/me" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

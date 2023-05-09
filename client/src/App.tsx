import { Route, Routes } from "react-router-dom";
import Signup from "./pages/authentication/signup";
import Home from "./pages/landing-page/home";
import Profile from "./pages/profile/profile";

import "./app.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/me" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

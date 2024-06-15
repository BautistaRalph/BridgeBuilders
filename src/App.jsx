import { Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Profile from "./pages/profile";
import Edit from "./pages/edit";
import Overview from "./pages/overview";
import Forms from "./pages/forms";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/create" element={<Forms />} />
      </Routes>
    </div>
  );
}

export default App;

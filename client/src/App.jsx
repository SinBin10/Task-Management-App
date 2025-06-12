import { Home } from "./Pages/Home";
import { SignUp } from "./Pages/SignUp";
import { Login } from "./Pages/Login";
import { Dashboard } from "./Pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

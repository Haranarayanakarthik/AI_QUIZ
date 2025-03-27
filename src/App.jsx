import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Services from "./Pages/Services.jsx";
import Nclearavbar from "./Pages/navbar.jsx";
import SignIn from "./Pages/Login/SIgnIn.jsx";
import SignUp from "./Pages/Signup/signup.jsx";
import Pricing from "./Pages/pricing.jsx";
import Quizes from "../components/quizes.jsx";
import Dashboard from "../components/dashboard.jsx";


const App = () => {
  return (
    <>
      <Nclearavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/quizzes" element={<Quizes />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;

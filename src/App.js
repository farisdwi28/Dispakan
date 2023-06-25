import { Routes, Route } from "react-router-dom";

import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
      {/* <HomePage /> */}
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
    </div>
  );
}

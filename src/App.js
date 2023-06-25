import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";

export default function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
    </div>
  );
}

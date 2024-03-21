import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Login from "./Components/Login/Login";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import HomePage from "./Pages/LoginPage/HomePage/HomePage";
import "./index.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />}>
            <Route index element={<Login />} />
            <Route path="forgot" element={<ForgotPassword />} />
            <Route path="reset" element={<ResetPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

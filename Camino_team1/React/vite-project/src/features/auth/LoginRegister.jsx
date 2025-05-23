//登入的主要呈現介面
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import OverlayPanel from "../shared/OverlayPanel";
import Navbar1 from "../homepage/Navbar1";
import "./LoginRegister.css";

const LoginRegister = ({ setIsLoggedIn }) => {
  const [isRegister, setIsRegister] = useState(false);
  const isLoggedIn = localStorage.getItem("userId") !== null; // ✅ 確保 Navbar1 有登入狀態

  return (
    <div className="login-page-wrapper">
      <Navbar1 isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className={`container ${isRegister ? "right-panel-active" : ""}`}>
        <RegisterForm isVisible={isRegister} />
        <LoginForm isVisible={!isRegister} setIsLoggedIn={setIsLoggedIn} />
        <OverlayPanel setIsRegister={setIsRegister} />
      </div>
    </div>
  );
};

export default LoginRegister;

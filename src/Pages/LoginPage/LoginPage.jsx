import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../Components/Logo/Logo";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.login}>
      <Logo />
      <Outlet />
    </div>
  );
};

export default LoginPage;

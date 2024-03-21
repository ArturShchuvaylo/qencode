import React from "react";
import styles from "./Button.module.css";

const Button = ({ title = "Log in to Qencode", variant = "default" }) => {
  const buttonClass = `${styles.loginButton} ${
    variant !== "default" ? styles[variant] : ""
  }`;

  return (
    <button type="submit" className={buttonClass}>
      {title}
    </button>
  );
};

export default Button;

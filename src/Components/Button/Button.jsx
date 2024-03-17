import React from "react";
import styles from "./Button.module.css";

const Button = ({
  title = "Log in to Qencode",
  variant = "default",
  isValid = true,
  onClick = null,
}) => {
  const buttonClass = `${styles.loginButton} ${
    variant !== "default" ? styles[variant] : ""
  }`;

  return (
    <button
      onClick={onClick}
      type="submit"
      disabled={!isValid}
      className={buttonClass}
    >
      {title}
    </button>
  );
};

export default Button;

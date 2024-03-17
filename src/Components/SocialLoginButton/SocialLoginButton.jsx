import React from "react";
import styles from "./SocialLoginButton.module.css";

const SocialLoginButton = ({ title, img }) => {
  return (
    <div className={styles.button}>
      <img width={18} height={18} src={img} alt="google-icon" />
      <p>{title}</p>
    </div>
  );
};

export default SocialLoginButton;

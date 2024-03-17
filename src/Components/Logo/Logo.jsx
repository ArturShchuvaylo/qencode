import React from "react";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src="Logo.svg" alt="logo" />
    </div>
  );
};

export default Logo;

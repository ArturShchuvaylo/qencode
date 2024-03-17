import React, { useState } from "react";
import styles from "./PasswordInput.module.css";

const PasswordInput = ({ passwordHandler, password, title = "" }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.formLine}>
      <label className={styles.formLabel}>{title}</label>
      <div className={styles.formPassword}>
        <input
          onChange={(e) => passwordHandler(e.target.value)}
          value={password}
          type={showPassword ? "text" : "password"}
          className={styles.passwordInput}
          placeholder="Password"
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className={styles.passwordToggle}
        >
          <img src="eye.svg" alt="" />
        </span>
      </div>
    </div>
  );
};

export default PasswordInput;

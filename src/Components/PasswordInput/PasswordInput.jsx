import React, { useState } from "react";
import styles from "./PasswordInput.module.css";

const PasswordInput = ({
  passwordHandler,
  password,
  title = "",
  passwordDirty,
  passwordError,
  blurPasswordHandler,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.formLine}>
      <label className={styles.formLabel}>{title}</label>
      <div className={styles.formPassword}>
        <input
          onBlur={(e) => blurPasswordHandler(e)}
          onChange={(e) => passwordHandler(e.target.value)}
          value={password}
          type={showPassword ? "text" : "password"}
          className={`${styles.passwordInput} ${
            passwordDirty && passwordError ? styles.red : ""
          }`}
          placeholder="Password"
        />

        {passwordDirty && passwordError && (
          <p className={styles.error}>{passwordError}</p>
        )}
        <span
          onClick={() => setShowPassword(!showPassword)}
          className={styles.passwordToggle}
        >
          <img src="/eye.svg" alt="icon" />
        </span>
      </div>
    </div>
  );
};

export default PasswordInput;

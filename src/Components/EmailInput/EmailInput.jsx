import React from "react";
import styles from "./EmailInput.module.css";

const EmailInput = ({
  email,
  emailHandler,
  blurHandler,
  emailDirty,
  emailError,
}) => {
  return (
    <div className={styles.formLine}>
      <input
        onChange={(e) => emailHandler(e.target.value)}
        value={email}
        onBlur={(e) => blurHandler(e)}
        type="email"
        className={`${styles.emailInput} ${
          emailDirty && emailError ? styles.red : ""
        }`}
        placeholder="Enter your email"
      />
      {emailDirty && emailError && <p className={styles.error}>{emailError}</p>}
    </div>
  );
};

export default EmailInput;

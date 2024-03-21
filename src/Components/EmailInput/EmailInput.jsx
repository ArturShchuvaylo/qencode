import React from "react";
import styles from "./EmailInput.module.css";

const EmailInput = ({
  email,
  emailHandler,
  blurEmailHandler,
  emailDirty,
  emailError,
}) => {
  return (
    <div className={styles.formLine}>
      <input
        value={email}
        onBlur={() => blurEmailHandler()}
        onChange={(e) => emailHandler(e.target.value)}
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

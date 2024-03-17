import React from "react";
import PasswordInput from "../PasswordInput/PasswordInput";
import Button from "../Button/Button";

import styles from "./ResetPassword.module.css";

const ResetPassword = ({
  isValid,
  blurHandler,
  password,
  passwordHandler,
  passwordDirty,
}) => {
  return (
    <div>
      <h2>Create new Password?</h2>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <PasswordInput
            title="Password"
            isValid={isValid}
            blurHandler={blurHandler}
            password={password}
            passwordHandler={passwordHandler}
            passwordDirty={passwordDirty}
          />
          <PasswordInput title="Confirm Password" />
        </div>

        <Button title="ResetPassword " />
      </form>
    </div>
  );
};

export default ResetPassword;

import React from "react";
import EmailInput from "../EmailInput/EmailInput";
import Button from "../Button/Button";

import styles from "./ForgotPassword.module.css";

const ForgotPassword = ({
  passwordForgot,
  isValid,
  email,
  emailDirty,
  blurHandler,
  emailHandler,
  emailError,
  setEmail,
}) => {
  return (
    <div>
      <h2>Forgot Password?</h2>
      <form action="#" className={styles.form}>
        <div className={styles.inputs}>
          <EmailInput
            email={email}
            setEmail={setEmail}
            emailDirty={emailDirty}
            blurHandler={blurHandler}
            emailHandler={emailHandler}
            emailError={emailError}
          />
        </div>
        <Button title="Send" isValid={!emailError} />
        <Button
          title="Cancel"
          variant="cancel"
          onClick={() => passwordForgot()}
        />
      </form>
    </div>
  );
};

export default ForgotPassword;

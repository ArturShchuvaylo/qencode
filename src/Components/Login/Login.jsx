import React, { useState } from "react";
import PasswordInput from "../PasswordInput/PasswordInput";
import EmailInput from "../EmailInput/EmailInput";
import LoginWithSocialMedia from "../LoginWithSocialMedia/LoginWithSocialMedia";
import Button from "../Button/Button";

import styles from "./Login.module.css";

const Login = ({
  passwordForgot,
  blurHandler,
  emailHandler,
  email,
  emailDirty,
  emailError,
  isValid,
  password,
  passwordHandler,
  handleLogin,
}) => {
  return (
    <div>
      <h2>Log in to your account</h2>
      <LoginWithSocialMedia />
      <div className={styles.separator}>
        <span className={styles.separatorText}>OR</span>
      </div>
      <form onSubmit={(e) => handleLogin(e)} className={styles.form}>
        <div className={styles.inputs}>
          <EmailInput
            emailHandler={emailHandler}
            email={email}
            blurHandler={blurHandler}
            emailDirty={emailDirty}
            emailError={emailError}
          />

          {!emailError ? (
            <>
              <PasswordInput
                password={password}
                passwordHandler={passwordHandler}
              />
              {/* eslint-disable-next-line */}
              <a
                onClick={() => passwordForgot()}
                href="#"
                className={styles.forgotPassword}
              >
                Forgot your password?
              </a>
            </>
          ) : null}
        </div>

        <Button isValid={isValid} />
        <p className="signup-link">
          Is your company new to Qencode?
          {/* eslint-disable-next-line */}
          <a href="#"> Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;

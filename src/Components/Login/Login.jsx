import React from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../PasswordInput/PasswordInput";
import EmailInput from "../EmailInput/EmailInput";
import LoginWithSocialMedia from "../LoginWithSocialMedia/LoginWithSocialMedia";
import Button from "../Button/Button";
import useEmailValidation from "../../Hooks/ useEmailValidation";
import usePasswordValidation from "../../Hooks/ usePasswordValidation";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    email,
    emailDirty,
    emailError,
    blurEmailHandler,
    setEmailError,
    emailHandler,
  } = useEmailValidation();

  const {
    password,
    setPasswordDirty,
    passwordDirty,
    passwordError,
    setPasswordError,
    passwordHandler,
    blurPasswordHandler,
  } = usePasswordValidation();

  const navigate = useNavigate();

  const mapErrors = (data) => {
    setPasswordDirty(true);
    if (Array.isArray(data.detail)) {
      data.detail.map((elem) => {
        if (elem.field_name === "password") {
          return setPasswordError(elem.error);
        } else if (elem.field_name === "email") {
          setEmailError(elem.error);
        }
        return null;
      });
    } else {
      setPasswordError(data.detail);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    blurEmailHandler();
    if (emailError || passwordError) return;

    try {
      const response = await fetch(
        "https://auth-qa.qencode.com/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        console.log(data);
        localStorage.setItem("accessToken", data.access_token);
        localStorage.setItem("refreshToken", data.refresh_token);

        navigate("/home");
      } else {
        mapErrors(data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
            blurEmailHandler={blurEmailHandler}
            emailDirty={emailDirty}
            emailError={emailError}
          />

          {!emailError ? (
            <>
              <PasswordInput
                password={password}
                passwordHandler={passwordHandler}
                passwordDirty={passwordDirty}
                passwordError={passwordError}
                blurPasswordHandler={blurPasswordHandler}
              />
              <div className={styles.forgotPassword}>
                <Link to="forgot"> Forgot your password?</Link>
              </div>
            </>
          ) : null}
        </div>

        <Button />
        <p>
          Is your company new to Qencode?
          {/* eslint-disable-next-line */}
          <a href="#"> Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;

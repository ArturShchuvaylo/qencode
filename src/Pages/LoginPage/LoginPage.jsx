import React, { useEffect, useState } from "react";
import Login from "../../Components/Login/Login";
import Logo from "../../Components/Logo/Logo";
import ForgotPassword from "../../Components/ForgotPassword/ForgotPassword";
import ResetPassword from "../../Components/ResetPassword/ResetPassword";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const [isForgot, setIsForgot] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("This field cannot be empty");
  const [passwordError, setPasswordError] = useState(
    "This field cannot be empty"
  );

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [emailError, passwordError]);

  const handleLogin = async (e) => {
    e.preventDefault();

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
      } else {
        console.log(data.detail);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const blurHandler = (e) => {
    switch (e.target.type) {
      case "email":
        setEmailDirty(true);
        break;

      case "password":
        setPasswordDirty(true);

      default:
        break;
    }
  };

  const emailHandler = (value) => {
    setEmail(value);
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!emailRegex.test(String(value).toLowerCase())) {
      setEmailError(value ? "Invalid email" : "This field cannot be empty");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (value) => {
    setPassword(value);
    if (value.length > 7) {
      setPasswordError("");
    } else {
      setPasswordError("Must be bigger");
    }
  };

  const passwordForgot = () => {
    setIsForgot((previous) => !previous);
    setEmail("");
    setEmailDirty(false);
    setEmailError("This field cannot be empty");
  };

  return (
    <div className={styles.login}>
      <Logo />
      {!isForgot && (
        <Login
          passwordForgot={passwordForgot}
          isValid={isValid}
          email={email}
          emailDirty={emailDirty}
          blurHandler={blurHandler}
          emailHandler={emailHandler}
          password={password}
          passwordHandler={passwordHandler}
          passwordDirty={passwordDirty}
          emailError={emailError}
          handleLogin={handleLogin}
        />
      )}
      {isForgot && (
        <ForgotPassword
          passwordForgot={passwordForgot}
          // isValid={isValid}
          email={email}
          setEmail={setEmail}
          emailDirty={emailDirty}
          blurHandler={blurHandler}
          emailHandler={emailHandler}
          emailError={emailError}
        />
      )}
      {/* <ResetPassword
        isValid={isValid}
        blurHandler={blurHandler}
        password={password}
        passwordHandler={passwordHandler}
        passwordDirty={passwordDirty}
      /> */}
    </div>
  );
};

export default LoginPage;

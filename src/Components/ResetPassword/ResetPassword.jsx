import React from "react";
import PasswordInput from "../PasswordInput/PasswordInput";
import Button from "../Button/Button";
import usePasswordValidation from "../../Hooks/ usePasswordValidation";
import styles from "./ResetPassword.module.css";

const ResetPassword = () => {
  const {
    passwordError,
    blurPasswordHandler,
    password,
    passwordHandler,
    passwordDirty,
  } = usePasswordValidation();

  const {
    setPasswordError: setConfirmPasswordError,
    passwordError: confirmPasswordError,
    blurPasswordHandler: confirmBlurPasswordHandler,
    password: confirmPassword,
    passwordHandler: confirmPasswordHandler,
    passwordDirty: confirmPasswordDirty,
  } = usePasswordValidation();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setConfirmPasswordError("Password doesn't match!!!");
    } else {
      const token = localStorage.getItem("accessToken");
      console.log(token);
      const secret =
        "a3e8b95c217c594a1f8a432674f2921b5f67a05f06a858b662643e424f26a2e4";
      const password_confirm = confirmPassword;

      try {
        const response = await fetch(
          "https://auth-qa.qencode.com/v1/auth/password-set",

          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token, secret, password, password_confirm }),
          }
        );
        const data = await response.json();

        if (response.ok) {
          console.log(data);
        } else {
          console.log(data);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div>
      <h2>Create new Password?</h2>
      <form onSubmit={(e) => handleLogin(e)} className={styles.form}>
        <div className={styles.inputs}>
          <PasswordInput
            title="Password"
            password={password}
            passwordHandler={passwordHandler}
            passwordDirty={passwordDirty}
            passwordError={passwordError}
            blurPasswordHandler={blurPasswordHandler}
          />
          <PasswordInput
            title="Confirm Password"
            password={confirmPassword}
            passwordHandler={confirmPasswordHandler}
            passwordDirty={confirmPasswordDirty}
            passwordError={confirmPasswordError}
            blurPasswordHandler={confirmBlurPasswordHandler}
          />
        </div>

        <Button title="Reset Password" />
      </form>
    </div>
  );
};

export default ResetPassword;

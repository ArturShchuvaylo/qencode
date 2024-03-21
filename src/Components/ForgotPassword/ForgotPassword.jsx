import React from "react";
import { useNavigate, Link } from "react-router-dom";
import useEmailValidation from "../../Hooks/ useEmailValidation";
import EmailInput from "../EmailInput/EmailInput";
import Button from "../Button/Button";
import styles from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  const {
    email,
    setEmail,
    emailDirty,
    emailError,
    blurEmailHandler,
    emailHandler,
  } = useEmailValidation();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    blurEmailHandler();
    if (emailError) return;

    const redirect_url = "http://localhost:3000/login/reset";

    try {
      const response = await fetch(
        "https://auth-qa.qencode.com/v1/auth/password-reset",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, redirect_url }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        navigate("/login/reset");
      } else {
        console.log(data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Forgot Password?</h2>
      <form onSubmit={(e) => handleLogin(e)} className={styles.form}>
        <div className={styles.inputs}>
          <EmailInput
            email={email}
            setEmail={setEmail}
            emailDirty={emailDirty}
            blurEmailHandler={blurEmailHandler}
            emailHandler={emailHandler}
            emailError={emailError}
          />
        </div>
        <Button title="Send" isValid={!emailError} />
        <Link>
          <Button title="Cancel" variant="cancel" />
        </Link>
      </form>
    </div>
  );
};

export default ForgotPassword;

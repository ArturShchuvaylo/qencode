import React from "react";
import SocialLoginButton from "../SocialLoginButton/SocialLoginButton";
import styles from "./LoginWithSocialMedia.module.css";

const LoginWithSocialMedia = () => {
  const buttons = [
    { title: "Google", img: "/Google.svg" },
    { title: "GitHub", img: "/GitHub.svg" },
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttons.map((elem) => (
        <SocialLoginButton key={elem.title} title={elem.title} img={elem.img} />
      ))}
    </div>
  );
};

export default LoginWithSocialMedia;

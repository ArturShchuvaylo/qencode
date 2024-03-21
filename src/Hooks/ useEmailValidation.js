import { useState } from "react";

const useEmailValidation = () => {
  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("This field cannot be empty");

  const blurEmailHandler = () => {
    setEmailDirty(true);
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

  return {
    email,
    setEmail,
    emailDirty,
    setEmailDirty,
    emailError,
    setEmailError,
    blurEmailHandler,
    emailHandler,
  };
};

export default useEmailValidation;

import { useState } from "react";

const usePasswordValidation = () => {
  const [password, setPassword] = useState("");
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordError, setPasswordError] = useState(
    "This field cannot be empty"
  );

  const blurPasswordHandler = () => {
    setPasswordDirty(true);
  };

  const passwordHandler = (value) => {
    setPassword(value);
    if (value.length > 0) {
      setPasswordError("");
    } else {
      setPasswordError("This field cannot be empty");
    }
  };

  return {
    password,
    setPassword,
    passwordDirty,
    setPasswordDirty,
    passwordError,
    setPasswordError,
    passwordHandler,
    blurPasswordHandler,
  };
};

export default usePasswordValidation;

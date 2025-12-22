import { useState } from "react";

const useAuth = (initialState, validation) => {
  const [value, setValue] = useState(() => {
    if (typeof initialState === "function") {
      return initialState();
    }
    return initialState;
  });
  const [error, setError] = useState({});
  const [showEye, setShowEye] = useState(false);

  const handleChange = (e) => {
    const { name, value: inputValue } = e.target;

    setValue((prev) => ({
      ...prev,
      [name]: inputValue,
    }));

    // validation
    // email validation
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inputValue)) {
        setError((prev) => ({
          ...prev,
          email: "Format email tidak valid",
        }));
        return;
      }
    }

    // password validation
    if (name === "password" && validation.pattern) {
      if (!validation.pattern.test(inputValue)) {
        setError((prev) => ({
          ...prev,
          password: validation.patternMessage || "Password tidak valid",
        }));
        return;
      }
    }

    // valid
    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
  //
  const validateAll = () => {
    const newError = {};

    if (!value.email.trim()) {
      newError.email = "Email wajib diisi";
    }

    if (!value.password.trim()) {
      newError.password = "Password wajib diisi";
    }

    setError(newError);

    return Object.keys(newError).length === 0;
  };

  //
  const handleEye = (e) => {
    e.preventDefault();
    setShowEye((prev) => !prev);
  };

  const isValid = Object.values(error).every((e) => !e);

  const resetForm = () => {
    setValue(initialState);
    setError({});
  };

  return {
    value,
    handleChange,
    showEye,
    handleEye,
    error,
    isValid,
    validateAll,
    resetForm,
  };
};

export default useAuth;

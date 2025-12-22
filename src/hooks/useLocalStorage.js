import { useEffect, useState } from "react";

const useLocalStorage = (key, initialState) => {
  const [value, setValue] = useState(() => {
    const old = localStorage.getItem(key);
    if (!old) {
      if (typeof initialState === "function") {
        return initialState();
      }
      return initialState;
    }
    return JSON.parse(old);
  });
  //
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  //
  const removeValue = () => {
    localStorage.removeItem(key);
    setValue(initialState);
  };
  //
  return [value, setValue, removeValue];
};
//
export default useLocalStorage;
//

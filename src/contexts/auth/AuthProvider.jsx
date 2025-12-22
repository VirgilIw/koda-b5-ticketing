import { useReducer } from "react";
import { authContext as AuthContext } from "./authContext";
const AuthProvider = ({ children }) => {
  //
  const initialState = {
    users: [],
    user: null,
    isLogin: false
  };
  // action itu bentukannya object
  const [state, dispatch] = useReducer((prevState, action) => {
    switch (action.type) {
      case "NEW_USER": {
        const newUser = [...prevState.users, action.payload];
        return {
          ...prevState,
          user: newUser,
        };
      }
       default:
         return prevState;
    }
  }, initialState);
  // 
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [], // semua akun terdaftar
  user: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // signUp: (prevState, action) => {
    //   prevState.users = [
    //     ...prevState.users,
    //     { email: action.payload.email,
    //       password: action.payload.password
    //     },
    //   ];
    // },
    signIn: (prevState, action) => {
      prevState.user = {
        email: action.payload.email,
      };
      prevState.isLogin = true;
    },
    signOut: (prevState) => {
      prevState.user = null;
      prevState.isLogin = false;
    },
  },
});

export const {
  // signUp,
  signIn,
  signOut,
} = authSlice.actions;

export default authSlice.reducer;

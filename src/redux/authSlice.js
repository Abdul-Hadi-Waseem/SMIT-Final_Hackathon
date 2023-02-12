import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    Login(state) {
      state.isLoggedIn = true;
    },
    Logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = AuthSlice.actions;
export default AuthSlice;
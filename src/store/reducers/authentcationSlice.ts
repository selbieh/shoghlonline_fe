import { AuthenticationInitialState } from "@/utils/types/sliceInitialStates/IAuthenticationInitialState";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthenticationInitialState = {
  loginEmail: null,
  registerEmail: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginEmail: (state, action) => {
      state.loginEmail = action.payload;
    },
    setRegisterEmail: (state, action) => {
      state.registerEmail = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;

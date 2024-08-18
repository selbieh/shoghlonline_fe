import { AuthenticationInitialState } from "@/utils/types/sliceInitialStates/IAuthenticationInitialState";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthenticationInitialState = { email: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { authReducer } from "./reducers/authentcationSlice";
import { ProfileReducer } from "./reducers/freelanceProfile";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: ProfileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { authReducer } from "./reducers/authentcationSlice";
import { ProfileReducer } from "./reducers/freelanceProfile";
import { FreelanceReducer } from "./reducers/freelanceSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: ProfileReducer,
    freelance: FreelanceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

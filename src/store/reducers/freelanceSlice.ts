import { GetReq, handelErrors } from "@/app/api/api";
import { freelanceInitialState } from "@/utils/types/sliceInitialStates/IFreelanceInitialState";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";

const initialState: freelanceInitialState = {};

export const getVacancies = createAsyncThunk(
  "freelance/vacancies",
  async (config: AxiosRequestConfig, { rejectWithValue }) => {
    try {
      const res = await GetReq(`api/v1/vacancy/vacancies`, config);
      return res;
    } catch (error: any) {
      return rejectWithValue(handelErrors(error));
    }
  }
);

const freelanceSlice = createSlice({
  name: "freelance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVacancies.pending, (state: any) => {
      state.getVacanciesLoading = true;
      state.getVacanciesError = null;
    }),
      builder.addCase(getVacancies.fulfilled, (state: any) => {
        state.getVacanciesLoading = true;
        state.getVacanciesError = null;
      }),
      builder.addCase(getVacancies.pending, (state: any) => {
        state.getVacanciesLoading = true;
        state.getVacanciesError = null;
      });
  },
});

export const FreelanceReducer = freelanceSlice.reducer;
export const freelanceActions = freelanceSlice.actions;

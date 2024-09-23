import { GetReq, handelErrors } from "@/app/api/api";
import { freelanceInitialState } from "@/utils/types/sliceInitialStates/IFreelanceInitialState";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";

const initialState: freelanceInitialState = {
  vacancies: { count: 0, next: null, previous: null, results: [] },
  getVacanciesError: null,
  getVacanciesLoading: false,
  searchValue: null,
};

export const getVacancies = createAsyncThunk(
  "freelance/vacancies",
  async (config: AxiosRequestConfig, { rejectWithValue }) => {
    try {
      const res = await GetReq(`api/v1/vacancy/vacancies/`, config);
      return res;
    } catch (error: any) {
      return rejectWithValue(handelErrors(error));
    }
  }
);

const freelanceSlice = createSlice({
  name: "freelance",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getVacancies.pending, (state: any, action) => {
      state.getVacanciesLoading = true;
      state.getVacanciesError = null;
    }),
      builder.addCase(getVacancies.fulfilled, (state: any, action: any) => {
        state.getVacanciesLoading = false;
        state.getVacanciesError = null;
        state.vacancies = action.payload.data;
      }),
      builder.addCase(getVacancies.rejected, (state: any, action) => {
        state.getVacanciesLoading = false;
        state.getVacanciesError = action.payload;
      });
  },
});

export const FreelanceReducer = freelanceSlice.reducer;
export const freelanceActions = freelanceSlice.actions;

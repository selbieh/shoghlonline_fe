import { GetReq, handelErrors, postRequest } from "@/app/api/api";
import { freelanceInitialState } from "@/utils/types/sliceInitialStates/IFreelanceInitialState";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";

const initialState: freelanceInitialState = {
  vacancies: { count: 0, next: null, previous: null, results: [] },
  getVacanciesError: null,
  getVacanciesLoading: false,
  vacancy: null,
  getVacancyLoading: false,
  getVacancyError: null,
  queryParams: {
    searchValue: null,
    services: null,
    experience: null,
    skills: null,
    location: null,
    jop_type: null,
    min_fixed_price: null,
    max_fixed_price: null,
    min_hour_price: null,
    max_hour_price: null,
    payment_verified: null,
    ordering: null,
  },
  test: null,
  searchValue: null,
  services: null,
  experience: null,
  skills: null,
  location: null,
  jop_type: null,
  min_fixed_price: null,
  max_fixed_price: null,
  min_hour_price: null,
  max_hour_price: null,
  payment_verified: null,
  ordering: null,
  getBookmarkedVacanciesLoading: false,
  getBookmarkedVacanciesError: null,
  bookmarkedVacancies: { count: 0, next: null, previous: null, results: [] },
  bookmarkGigError: null,
  bookmarkGigLoading: false,
  bookmarkGig: null,
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

export const getVacancyById = createAsyncThunk(
  "freelance/vacancyById",
  async (
    [id, config]: [id: string, config: AxiosRequestConfig],
    { rejectWithValue }
  ) => {
    try {
      const res = await GetReq(`api/v1/vacancy/vacancies/${id}/`, config);
      return res;
    } catch (error: any) {
      return rejectWithValue(handelErrors(error));
    }
  }
);

export const getBookmarkedVacancies = createAsyncThunk(
  "freelance/bookmarkedVacancies",
  async (config: AxiosRequestConfig, { rejectWithValue }) => {
    try {
      const res = await GetReq(`api/v1/vacancy/watchlist/`, config);
      return res;
    } catch (error: any) {
      return rejectWithValue(handelErrors(error));
    }
  }
);

export const bookmarkGig = createAsyncThunk(
  "freelance/bookmarkGig",
  async (body: { vacancy: number }, { rejectWithValue }) => {
    try {
      const res = await postRequest(`api/v1/vacancy/watchlist/`, body);
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
    setQueryParams(state, action) {
      state.queryParams = action.payload;
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
    builder.addCase(getVacancyById.pending, (state: any, action) => {
      state.getVacancyLoading = true;
      state.getVacancyError = null;
    }),
      builder.addCase(getVacancyById.fulfilled, (state: any, action: any) => {
        state.getVacancyLoading = false;
        state.getVacancyError = null;
        state.vacancy = action.payload.data;
      }),
      builder.addCase(getVacancyById.rejected, (state: any, action) => {
        state.getVacancyLoading = false;
        state.getVacancyError = action.payload;
      });
    builder.addCase(getBookmarkedVacancies.pending, (state: any, action) => {
      state.getBookmarkedVacanciesLoading = true;
      state.getBookmarkedVacanciesError = null;
    }),
      builder.addCase(
        getBookmarkedVacancies.fulfilled,
        (state: any, action: any) => {
          state.getBookmarkedVacanciesLoading = false;
          state.getBookmarkedVacanciesError = null;
          state.bookmarkedVacancies = action.payload.data;
        }
      ),
      builder.addCase(getBookmarkedVacancies.rejected, (state: any, action) => {
        state.getBookmarkedVacanciesLoading = false;
        state.getBookmarkedVacanciesError = action.payload;
      });
    builder.addCase(bookmarkGig.pending, (state: any, action) => {
      state.bookmarkGigLoading = true;
      state.bookmarkGigError = null;
    }),
      builder.addCase(bookmarkGig.fulfilled, (state: any, action: any) => {
        state.bookmarkGigLoading = false;
        state.bookmarkGigError = null;
        state.bookMarkGigResponse = action.payload.data;
      }),
      builder.addCase(bookmarkGig.rejected, (state: any, action) => {
        state.bookmarkGigLoading = false;
        state.bookmarkGigError = action.payload;
      });
  },
});

export const FreelanceReducer = freelanceSlice.reducer;
export const freelanceActions = freelanceSlice.actions;

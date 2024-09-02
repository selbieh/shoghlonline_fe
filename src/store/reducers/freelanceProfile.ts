import { GetReq, handelErrors } from "@/app/api/api";
import { FreelancerProfileInitialState } from "@/utils/types/sliceInitialStates/IFreelancerProfile";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";

const initialState: FreelancerProfileInitialState = {
  loadingGetFreelancerProfileData: false,
  getFreelancerProfileDataServerError: null,
  freelancerProfileData: null,
  loadingGetAvailableSkills: false,
  getAvailableSkillsServerError: null,
  availableSkills: null,
  skillsList: [],
  loadingGetAvailableServices: false,
  getAvailableServicesServerError: null,
  availableServices: [],
  profileReady: 0,
};

export const getAvailableSkills = createAsyncThunk(
  "profile/getAvailableSkills",
  async (config: AxiosRequestConfig, { rejectWithValue }) => {
    try {
      const res = await GetReq(`api/v1/client/skills/`, config);
      return res;
    } catch (error: any) {
      return rejectWithValue(handelErrors(error));
    }
  }
);

export const getAvailableServices = createAsyncThunk(
  "profile/getAvailableServices",
  async (config: AxiosRequestConfig, { rejectWithValue }) => {
    try {
      const res = await GetReq(`api/v1/client/services/`, config);
      return res;
    } catch (error: any) {
      return rejectWithValue(handelErrors(error));
    }
  }
);

export const getFreelancerProfileData = createAsyncThunk(
  "profile/getFreelancerProfileData",
  async (
    [config, freelancerId]: [AxiosRequestConfig, number],
    { rejectWithValue }
  ) => {
    try {
      const res = await GetReq(
        `api/v1/client/profile/${freelancerId}/`,
        config
      );
      return res;
    } catch (error: any) {
      return rejectWithValue(handelErrors(error));
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAvailableSkills.pending, (state) => {
      state.loadingGetAvailableSkills = true;
      state.getAvailableSkillsServerError = null;
    });
    builder.addCase(getAvailableSkills.fulfilled, (state, action) => {
      state.loadingGetAvailableSkills = false;
      // state.availableSkills = action?.payload?.data;
      state.skillsList = action.payload.data?.results?.map((skill: any) => {
        return {
          label: skill.name,
          value: skill.id,
        };
      });
    });
    builder.addCase(getAvailableSkills.rejected, (state, action) => {
      state.loadingGetAvailableSkills = false;
      state.getAvailableSkillsServerError = action.payload;
    });
    builder.addCase(getFreelancerProfileData.pending, (state, action) => {
      state.loadingGetFreelancerProfileData = true;
      state.getFreelancerProfileDataServerError = action?.payload;
    });
    builder.addCase(getFreelancerProfileData.fulfilled, (state, action) => {
      state.loadingGetFreelancerProfileData = false;
      state.freelancerProfileData = action?.payload?.data;
      state.profileReady =
        Number(action?.payload?.data?.services?.length > 0) +
        Number(action?.payload?.data?.skills?.length > 0) +
        Number(action?.payload?.data?.educations?.length > 0) +
        Number(action?.payload?.data?.experiences?.length > 0);
    });
    builder.addCase(getFreelancerProfileData.rejected, (state, action) => {
      state.loadingGetFreelancerProfileData = false;
      state.getFreelancerProfileDataServerError = action.payload;
    });
    builder.addCase(getAvailableServices.pending, (state, action) => {
      state.loadingGetAvailableServices = true;
      state.getAvailableServicesServerError = action.payload;
    });
    builder.addCase(getAvailableServices.fulfilled, (state, action) => {
      state.loadingGetAvailableServices = false;
      state.availableServices = action?.payload?.data?.results?.map(
        (skill: any) => {
          return {
            label: skill.name,
            value: skill.id,
            children: skill?.subservices?.map((subservice: any) => {
              return {
                label: subservice?.name,
                value: subservice?.id,
              };
            }),
          };
        }
      );
    });
    builder.addCase(getAvailableServices.rejected, (state, action) => {
      state.loadingGetAvailableServices = false;
      state.getAvailableServicesServerError = action.payload;
    });
  },
});

export const ProfileReducer = profileSlice.reducer;
export const profileActions = profileSlice.actions;

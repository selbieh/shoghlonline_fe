import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile_picture: null,
  job_title: null,
  bio_text: null,
  bio_video: null,
  location: null,
  website: null,
  linkedin: null,
  github: null,
  skills: null,
  experience: null,
  education: null,
  certifications: null,
  projects: null,
  languages: null,
  interests: null,
  resume: null,
  portfolio: null,
  availability: null,
  services: null,
  hourly_price: null,
  first_name: null,
  last_name: null,
  gender: null,
  date_of_birth: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
});

export const ProfileReducer = profileSlice.reducer;
export const profileActions = profileSlice.actions;

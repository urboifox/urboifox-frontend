import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const websiteDataSlice = createSlice({
  name: "website_data",
  initialState,
  reducers: {
    initiateData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { initiateData } = websiteDataSlice.actions;
export default websiteDataSlice;

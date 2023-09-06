import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: null,
  wasNull: false,
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    setWasNull: (state, action) => {
      state.wasNull = action.payload;
    },
  },
});

export const { setSelected, setWasNull } = aboutSlice.actions;
export default aboutSlice;

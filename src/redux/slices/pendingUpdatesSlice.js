import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modified: false,
  toDelete: [],
  toUpdate: [],
};

const pendingUpdatesSlice = createSlice({
  name: "pendingUpdates",
  initialState,
  reducers: {
    addToDelete: (state, action) => {
      state.toDelete = [
        ...state.toDelete.filter((i) => i.id !== action.payload.id),
        action.payload,
      ];
      state.modified = true;
    },
    addToUpdate: (state, action) => {
      state.toUpdate = [
        ...state.toUpdate.filter((i) => i.id !== action.payload.id),
        action.payload,
      ];
      state.modified = true;
    },

    clearPendingUpdates: (state) => {
      state.toDelete = [];
      state.toUpdate = [];
      state.modified = false;
    },
  },
});

export const { addToDelete, addToUpdate, clearPendingUpdates } =
  pendingUpdatesSlice.actions;
export default pendingUpdatesSlice;

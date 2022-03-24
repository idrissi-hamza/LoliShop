import { createSlice } from "@reduxjs/toolkit";

const uiStateInit = {
  isShown: false,
};

const uiSlice = createSlice({
  name: "uiSlice",
  initialState: uiStateInit,
  reducers: {
    toggle: (state) => {
      state.isShown = !state.isShown;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;

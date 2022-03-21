import { createSlice } from "@reduxjs/toolkit";

const uiState = {
  isShown: false,
};

const uiStore = createSlice({
  name: "uiStore",
  initialState: uiState,
  reducers: {
    toggle: (state) => {
      state.isShown = !state.isShown;
      console.log(state);
    },
  },
});
export const uiActions = uiStore.actions;
export default uiStore;

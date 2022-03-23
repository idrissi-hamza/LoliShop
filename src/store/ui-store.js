import { createSlice } from "@reduxjs/toolkit";

const uiStateInit = {
  isShown: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "uiSlice",
  initialState: uiStateInit,
  reducers: {
    toggle: (state) => {
      state.isShown = !state.isShown;
    },

    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;

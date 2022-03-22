import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-store";
import shopSlice from "./shop-store";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    shop: shopSlice.reducer,
  },
});

export default store;

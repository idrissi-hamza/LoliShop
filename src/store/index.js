import { configureStore } from "@reduxjs/toolkit";
import uiStore from "./ui-store";


const store = configureStore({ reducer: { ui:uiStore.reducer } });


export default store;



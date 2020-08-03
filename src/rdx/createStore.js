import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";

const reducer = {
  user: userSlice.reducer,
};

export const createStore = () =>
  configureStore({
    reducer,
  });

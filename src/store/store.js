import { configureStore } from "@reduxjs/toolkit";
import resultsReducer from "./resultsSlice.js";

export const store = configureStore({
  reducer: {
    results: resultsReducer,
  },
});

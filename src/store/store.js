import { configureStore } from "@reduxjs/toolkit";
import harryPotterReducer from "./slices/harryPotterSlice";
import loaderReducer from "./slices/loaderSlice";

export const rootreducer = {
  harryPotter: harryPotterReducer,
  loader: loaderReducer,
};

const store = configureStore({
  reducer: rootreducer,
});

export default store;

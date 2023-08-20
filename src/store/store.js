import { configureStore } from "@reduxjs/toolkit";
import casasReducer from "./slices/casasSlice";
import loaderReducer from "./slices/loaderSlice";

export const rootreducer = {
  casas: casasReducer,
  loader: loaderReducer,
};

const store = configureStore({
  reducer: rootreducer,
});

export default store;

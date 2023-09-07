import { configureStore } from "@reduxjs/toolkit";
import harryPotterReducer from "./slices/harryPotterSlice";
import loaderReducer from "./slices/loaderSlice";
import firstBlockSlice from "./slices/firstBlockSlice";
import secBlockSlice from "./slices/secBlockSlice";

export const rootreducer = {
  firstBlock: firstBlockSlice,
  secBlock: secBlockSlice,
  harryPotter: harryPotterReducer,
  loader: loaderReducer,
};

const store = configureStore({
  reducer: rootreducer,
});

export default store;

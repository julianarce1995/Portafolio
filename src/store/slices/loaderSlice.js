import { createSlice } from "@reduxjs/toolkit";

const initialState = { show: false };

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    showSpinner: (state) => {
      state.show = true;
      return state;
    },
    hideSpinner: (state) => {
      state.show = false;
      return state;
    },
  },
});

const { reducer, actions } = loaderSlice;
export const { showSpinner, hideSpinner } = actions;
export default reducer;

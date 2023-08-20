import { createSelector } from "@reduxjs/toolkit";

export const selectLoaderState = (state) => state.loader;

export const selectLoaderValue = createSelector(
  selectLoaderState,
  (state) => state.show
);

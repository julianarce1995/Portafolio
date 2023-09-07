import { createSelector } from "@reduxjs/toolkit";

export const selectBlockState = (state) => state.firstBlock;

export const selectFirstColor = createSelector(
  selectBlockState,
  (state) => state.colorBlock
);
export const selectFirstId = createSelector(
  selectBlockState,
  (state) => state.id
);
export const selectFirstIsSelected = createSelector(
  selectBlockState,
  (state) => state.selected
);

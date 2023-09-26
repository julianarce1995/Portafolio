import { createSelector } from "@reduxjs/toolkit";

export const selectBlockState = (state) => state.secBlock;

export const selectSecColor = createSelector(
  selectBlockState,
  (state) => state.colorBlock
);
export const selectSecId = createSelector(
  selectBlockState,
  (state) => state.id
);
export const selectSecIsSelected = createSelector(
  selectBlockState,
  (state) => state.idSelected
);

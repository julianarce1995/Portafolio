import { createSelector } from "@reduxjs/toolkit";

export const selectHarryPotterState = (state) => state.harryPotter;

export const selectHarryPotterData = createSelector(
  selectHarryPotterState,
  (state) => state.data
);

export const selectHarryPotterStatus = createSelector(
  selectHarryPotterState,
  (state) => state.status
);

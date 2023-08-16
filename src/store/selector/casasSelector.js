import { createSelector } from "@reduxjs/toolkit";

export const selectCasasState = (state) => state.casas

export const selectCasasInfo = createSelector(
    selectCasasState,
    (casas) => casas.data
)



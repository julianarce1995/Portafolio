import { createSelector } from "@reduxjs/toolkit";

export const selectCasasState = (state) => state

export const selectCasasInfo = createSelector(
    (casas) => casas
)



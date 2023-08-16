import { configureStore } from "@reduxjs/toolkit"
import casasReducer from "./slices/casasSlice"

export const rootreducer = {
    casas: casasReducer,
}

const store = configureStore({
    reducer :rootreducer
})

export default store
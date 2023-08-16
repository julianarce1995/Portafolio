import { createSlice, createAsyncThunk, rejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";


export const casasApi = createAsyncThunk(
    'casas/casasApi',
    async () => {
        try {
            const { data:{id}} = await axios.get('https://hp-api.onrender.com/api')
            return {id}
        } catch (e) {
            const error = e.response?.data?.error || 'network error'
            return rejectedWithValue(error)
        }
    }
)

const initialState = {}

const casasSlice = createSlice({
    name: 'casas',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(casasApi.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(casasApi.fulfilled,(state, action) => {
                state.status = 'succeeded'
                state = action.payload
                localStorage.setItem('favoritos', action.payload)
            })
            .addCase(casasApi.rejected,(state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

const {reducer, action} = casasSlice
export default reducer
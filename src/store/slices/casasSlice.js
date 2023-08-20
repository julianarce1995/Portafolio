import {
  createSlice,
  createAsyncThunk,
  rejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";

export const casasApi = createAsyncThunk("casas/casasApi", async () => {
  try {
    const response = await axios.get(
      "https://hp-api.onrender.com/api/characters"
    );
    return response.data;
  } catch (e) {
    const error = e;
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        return "404";
      }
    }
    console.log(error);
    return "Network error!";
  }
});

const initialState = { error: null, data: [] };

const casasSlice = createSlice({
  name: "casas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(casasApi.pending, (state) => {
        state.status = "pending";
      })
      .addCase(casasApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        localStorage.setItem("favoritos", action.payload);
      })
      .addCase(casasApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

const { reducer } = casasSlice;
export default reducer;

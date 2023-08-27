import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const harryPotterApi = createAsyncThunk("harryPotter/harryPotterApi", async () => {
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
    return "Network error!";
  }
});

const initialState = { error: null, data: [] };

const harryPotterSlice = createSlice({
  name: "harryPotter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(harryPotterApi.pending, (state) => {
        state.status = "pending";
      })
      .addCase(harryPotterApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(harryPotterApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

const { reducer } = harryPotterSlice;
export default reducer;

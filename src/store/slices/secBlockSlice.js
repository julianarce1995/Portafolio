import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colorBlock: undefined,
  id: undefined,
  idSelected: undefined,
};

const secBlockSlice = createSlice({
  name: "secBlock",
  initialState,
  reducers: {
    setSecBlockInfo: (state, action) => {
      state.colorBlock = action.payload.colorBlock;
      state.id = action.payload.id;
      state.idSelected = action.payload.selected;
      return state;
    },
  },
});

const { reducer, actions } = secBlockSlice;
export const { setSecBlockInfo } = actions;
export default reducer;

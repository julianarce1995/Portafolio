import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colorBlock: undefined,
  id: undefined,
  selected: undefined,
};

const firstBlockSlice = createSlice({
  name: "firstBlock",
  initialState,
  reducers: {
    setFirstBlockInfo: (state, action) => {
      state.colorBlock = action.payload.colorBlock;
      state.id = action.payload.id;
      state.selected = action.payload.selected;
      return state;
    },
  },
});

const { reducer, actions } = firstBlockSlice;
export const { setFirstBlockInfo } = actions;
export default reducer;

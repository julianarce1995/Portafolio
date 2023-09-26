import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colorBlock: undefined,
  id: undefined,
  idSelected: undefined,
};

const firstBlockSlice = createSlice({
  name: "firstBlock",
  initialState,
  reducers: {
    setFirstBlockInfo: (state, action) => {
      state.colorBlock = action.payload.colorBlock;
      state.id = action.payload.id;
      state.idSelected = action.payload.idSelected;
      return state;
    },
  },
});

const { reducer, actions } = firstBlockSlice;
export const { setFirstBlockInfo } = actions;
export default reducer;

import { createSlice } from "@reduxjs/toolkit";

export const chefsSlice = createSlice({
  name: "chefs",
  initialState: {
    value: [],
  },
  reducers: {
    setChefs: (state, action) => {
      state.value = action.payload;
    },
  },
});


// Action creators are generated for each case reducer function
export const { setChefs } = chefsSlice.actions;

export default chefsSlice.reducer;

const { createSlice } = require("@reduxjs/toolkit");

const readSlice = createSlice({
  name: "read",
  initialState: {
    readList: [],
  },
  reducers: {
    addread: (state, action) => {
      state.readList.push(action.payload);
    },
    removeread: (state, action) => {
      let index = state.readList.indexOf(action.payload);
      if (index !== -1) {
        state.raedList.splice(index, 1);
      }
    },
  },
});

export const { addread, removeread } = readSlice.actions;
export default readSlice.reducer;

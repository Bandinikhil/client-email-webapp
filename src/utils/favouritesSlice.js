const { createSlice } = require("@reduxjs/toolkit");

const favouritesSlice = createSlice({
  name: "favourite",
  initialState: {
    favList: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      state.favList.push(action.payload);
    },
    removeFavourite: (state, action) => {
      let index = state.favList.indexOf(action.payload);
      if (index !== -1) {
        state.favList.splice(index, 1);
      }
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;

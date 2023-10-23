import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    favourites: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      state.favourites.push(action.payload);
    },
    removeFavourite: (state, action) => {
      state.favourites = state.favourites.filter((id) => id !== action.payload);
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;

export const selectFavourites = (state) => state.favourites.favourites;

export default favouritesSlice.reducer;

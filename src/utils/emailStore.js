import emailsSlice from "./emailsSlice";
import favouriteSlice from "./favouriteSlice";
import favouritesSlice from "./favouritesSlice";
import readSlice from "./readSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    favourite: favouritesSlice,
    read: readSlice,
    emails: emailsSlice,
    favourites: favouriteSlice,
  },
});

export default store;

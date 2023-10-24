import emailsSlice from "./emailsSlice";
import favouriteSlice from "./favouriteSlice";
import favouritesSlice from "./favouritesSlice";
import readSlice from "./readSlice";

const { configureStore } = require("@reduxjs/toolkit");
// redux store which stores which manages complete state management and store and the reducer which have data that is filtered
const store = configureStore({
  reducer: {
    favourite: favouritesSlice,
    read: readSlice,
    emails: emailsSlice,
    favourites: favouriteSlice,
  },
});

export default store;

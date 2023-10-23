const { createSlice } = require("@reduxjs/toolkit");

const emailsSlice = createSlice({
  name: "emails",
  initialState: {
    items: null,
  },
  reducers: {
    setEmails: (state, action) => {
      state.items = action.payload;
    },
    removeEmails: (state, action) => {
      state.items = null;
    },
  },
});

export const { setEmails, removeEmails } = emailsSlice.actions;
export default emailsSlice.reducer;

import { configureStore, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  ideaCategory: "",
  ideaTitle: "",
  ideaDesc: "",
};

const ideaSlice = createSlice({
  name: "idea",
  initialState: INITIAL_STATE,
  reducers: {
    setIdea: (state, action) => {
      state.ideaCategory = action.payload.ideaCategory;
      state.ideaTitle = action.payload.ideaTitle;
      state.ideaDesc = action.payload.ideaDesc;
    },
  },
});

const store = configureStore({
  reducer: {
    idea: ideaSlice.reducer,
  },
});

export default store;
export const ideaActions = ideaSlice.actions;

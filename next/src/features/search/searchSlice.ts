import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISearchCategory, ISearchstate } from "@type/search";

const initialState: ISearchstate = {
  isClicked: false,
  searchCategory: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isClicked = !state.isClicked;
    },
    open: (state) => {
      state.isClicked = true;
      state.searchCategory = "";
    },
    close: (state) => {
      state.isClicked = false;
      state.searchCategory = "";
    },
    choose: (state, actions: PayloadAction<ISearchCategory>) => {
      state.isClicked = false;
      state.searchCategory = actions.payload.searchCategory;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;

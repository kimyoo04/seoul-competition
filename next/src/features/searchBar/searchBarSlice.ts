import { createSlice } from "@reduxjs/toolkit";
import { ISearchBarstate } from "@type/searchBar";

const initialState: ISearchBarstate = {
  isClicked: false,
};

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isClicked = !state.isClicked;
    },
    open: (state) => {
      state.isClicked = true;
    },
    close: (state) => {
      state.isClicked = false;
    },
  },
});

export const searchBarActions = searchBarSlice.actions;
export default searchBarSlice.reducer;

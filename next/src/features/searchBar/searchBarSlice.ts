import { createSlice } from "@reduxjs/toolkit";
import { ISearchBarstate } from "@type/searchBar";

const initialState: ISearchBarstate = {
  isClicked: false,
};

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
    isClickedToggle: (state) => {
      state.isClicked = !state.isClicked;
    },
  },
});

export const searchBarActions = searchBarSlice.actions;
export default searchBarSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IChoose, ISearchBarstate } from "@type/search";

const initialState: ISearchBarstate = {
  isClicked: false,
  choose: "",
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
      state.choose = "";
    },
    close: (state) => {
      state.isClicked = false;
      state.choose = "";
    },
    choose: (state, actions: PayloadAction<IChoose>) => {
      state.isClicked = false;
      state.choose = actions.payload.choose;
    },
  },
});

export const searchBarActions = searchBarSlice.actions;
export default searchBarSlice.reducer;

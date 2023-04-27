import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISearchCategory, ISearchName, ISearchState } from "@type/search";

const initialState: ISearchState = {
  searchCategory: "educations",
  searchName: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    chooseCategory: (state, actions: PayloadAction<ISearchCategory>) => {
      state.searchCategory = actions.payload.searchCategory;
    },
    searchName: (state, actions: PayloadAction<ISearchName>) => {
      state.searchName = actions.payload.searchName;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;

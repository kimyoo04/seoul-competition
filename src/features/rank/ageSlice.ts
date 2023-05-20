import { readKeywordRank } from "@api/rank/readKeywordRank";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const ageSlice = createSlice({
  name: "age",
  initialState: {
    isOpen: false,
    selectedAge: "",
  },
  reducers: {
    // 더보기 버튼 열고 닫을 때
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen;
    },

    // 연령별 버튼 클릭했을 때 : age
    selectAge: (state, actions: PayloadAction<string>) => {
      state.selectedAge = actions.payload;
      state.isOpen = false;
    },

    // "전체" 버튼 클릭했을 때
    selectTotal: (state, actions: PayloadAction<string>) => {
      state.selectedAge = actions.payload;
      readKeywordRank();
      state.isOpen = false;
    },
  },
});

export const ageActions = ageSlice.actions;
export default ageSlice.reducer;

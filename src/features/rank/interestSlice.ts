// 상태 슬라이스 파일 (예: interestSlice.js)
import { readEducationInterestRank } from "@api/rank/readEducationInterestRank";
import { readEducationRank } from "@api/rank/readEducationRank";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const interestSlice = createSlice({
  name: "interest",
  initialState: {
    isOpen: false,
    selectedInterest: "",
  },
  reducers: {
    // 더보기 버튼 열고 닫을 때
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen;
    },

    // 관심사별 버튼 클릭했을 때
    selectInterest: (state, actions: PayloadAction<string>) => {
      state.selectedInterest = actions.payload;
      readEducationInterestRank(actions.payload);
      state.isOpen = false;
    },

    // "전체" 버튼 클릭했을 때
    selectTotal: (state, actions: PayloadAction<string>) => {
      state.selectedInterest = actions.payload;
      readEducationRank();
      state.isOpen = false;
    },
  },
});

export const interestActions = interestSlice.actions;
export default interestSlice.reducer;

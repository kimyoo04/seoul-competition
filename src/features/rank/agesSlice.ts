import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAgesState } from "@type/rank";
import { IAgesData } from "@type/userForm";

const initialState: IAgesState = {
  isOpen: false,
  selectedAgesStr: "",
  selectedAges: "",
};

export const agesSlice = createSlice({
  name: "ages",
  initialState,
  reducers: {
    // 더보기 버튼 열고 닫을 때
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen;
    },

    // 연령별 버튼 클릭했을 때 : ages
    selectAge: (state, actions: PayloadAction<IAgesData>) => {
      state.selectedAgesStr = actions.payload.agesStr;
      state.selectedAges = actions.payload.ages;
      state.isOpen = false;
    },

    // "전체" 버튼 클릭했을 때
    selectTotal: (state) => {
      state.selectedAgesStr = "";
      state.selectedAges = "";
      state.isOpen = false;
    },
  },
});

export const ageActions = agesSlice.actions;
export default agesSlice.reducer;

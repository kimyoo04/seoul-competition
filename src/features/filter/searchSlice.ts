import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IFilterState,
  IStatus,
  IEndDate,
  IStartDate,
  IBothDate,
  IMinPrice,
  IMaxPrice,
} from "@type/filter";

const initialState: IFilterState = {
  status: "",
  startDate: "",
  endDate: "",
  minPrice: 0,
  maxPrice: 1000000,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    // 교육 상태 업데이트
    setStatus: (state, action: PayloadAction<IStatus>) => {
      state.status = action.payload.status;
    },

    // 교육 기간 업데이트
    setStartDate: (state, action: PayloadAction<IStartDate>) => {
      state.startDate = action.payload.startDate;
    },
    setEndDate: (state, action: PayloadAction<IEndDate>) => {
      state.endDate = action.payload.endDate;
    },
    setBothDate: (state, action: PayloadAction<IBothDate>) => {
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
    },

    // 교육 가격 업데이트
    setMinPrice: (state, action: PayloadAction<IMinPrice>) => {
      state.minPrice = action.payload.minPrice;
    },
    setMaxPrice: (state, action: PayloadAction<IMaxPrice>) => {
      state.maxPrice = action.payload.maxPrice;
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;

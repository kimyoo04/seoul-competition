import { createSlice } from "@reduxjs/toolkit";
import { fetchEducations } from "@api/fetchEducations";
import { IEducationstate } from "@type/education";

const initialState: IEducationstate = {
  cards: [],
  status: "idle",
  error: null,
  page: 1,
  hasMore: true,
};

export const educationslice = createSlice({
  name: "educations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEducations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEducations.fulfilled, (state, action) => {
        state.status = "idle";
        state.cards = [...state.cards, ...action.payload];
        state.hasMore = action.payload.length > 0;
        state.page = state.page + 1;
      })
      .addCase(fetchEducations.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default educationslice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { fetchPostDetail } from "@api/fetchPostDetail";
import { IPostDetailState } from "@type/postDetail";
import postsSlice from "./postsSlice";

const initialState: IPostDetailState = {
  post: {
    id: 0,
    nickname: "",
    title: "",
    content: "",
    createdAt: "",
    hits: -1,
    comments: [],
  },
  status: "idle",
  error: null,
};

export const postDetailSlice = createSlice({
  name: "postDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPostDetail.fulfilled, (state, action) => {
        state.status = "idle";
        state.post = { ...action.payload };
      })
      .addCase(fetchPostDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default postDetailSlice.reducer;

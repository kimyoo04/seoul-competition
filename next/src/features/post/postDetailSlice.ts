import { createSlice } from "@reduxjs/toolkit";
import { fetchPostDetail } from "@api/fetchPostDetail";
import { IPostDetailState } from "@type/postDetail";

const initialState: IPostDetailState = {
  post: {
    id: 0,
    nickname: "",
    title: "",
    content: "",
    createdAt: "",
    count: "",
    comments: [],
  },
  status: "idle",
  error: null,
};

export const postsSlice = createSlice({
  name: "posts",
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

export default postsSlice.reducer;

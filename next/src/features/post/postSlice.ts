import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "@api/fetchPosts";
import { IPostState } from "@type/post";

const initialState: IPostState = {
  posts: [],
  status: "idle",
  error: null,
  page: 1,
  hasMore: true,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "idle";
        state.posts = [...state.posts, ...action.payload];
        state.hasMore = action.payload.length > 0;
        state.page = state.page + 1;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default postsSlice.reducer;

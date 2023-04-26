import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "@api/fetchPosts";
import { IPostsState } from "@type/posts";

const initialState: IPostsState = {
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
        console.log(...action.payload.data);
        state.status = "idle";
        state.posts = [...state.posts, ...action.payload.data];
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

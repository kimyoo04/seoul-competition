import { configureStore } from "@reduxjs/toolkit";

import alertReducer from "@features/alert/alertSlice";
import educationReducer from "@features/education/educationSlice";
import postsReducer from "@features/post/postsSlice";
import postDetailReducer from "@features/post/postDetailSlice";
import searchBarReducer from "@features/search/searchSlice";

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    education: educationReducer,
    posts: postsReducer,
    postDetail: postDetailReducer,
    searchBar: searchBarReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// useDispatch, useSelect를 사용할 때 필요
export type AppDispatch = typeof store.dispatch;

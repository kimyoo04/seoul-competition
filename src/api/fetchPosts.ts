import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@api/axiosInstance";

export const fetchPosts = createAsyncThunk(
  "posts/fetchposts",
  async (page: number) => {
    const response = await axios.get(`/posts?page=${page}`);
    return response.data.data;
  }
);

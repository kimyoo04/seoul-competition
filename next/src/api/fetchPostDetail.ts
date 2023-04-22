import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@api/axiosInstance";

export const fetchPostDetail = createAsyncThunk(
  "postDetail/fetchpostDetail",
  async (id: string) => {
    const response = await axios.get(`/api/posts/${id}`);
    return response.data;
  }
);

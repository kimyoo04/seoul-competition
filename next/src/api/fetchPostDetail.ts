import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@api/axiosInstance";

export const fetchPostDetail = createAsyncThunk(
  "postDetail/fetchpostDetail",
  async (id: string) => {
    const response = await axios.get(`/posts/${id}`);
    return response.data.data;
  }
);

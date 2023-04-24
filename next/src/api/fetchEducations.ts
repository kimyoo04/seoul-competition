import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@api/axiosInstance";

export const fetchEducations = createAsyncThunk(
  "educations/fetcheducations",
  async (page: number) => {
    const response = await axios.get(`/educations?page=${page}`);
    return response.data.data;
  }
);

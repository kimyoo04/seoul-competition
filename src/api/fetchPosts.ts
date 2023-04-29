import axios from "@api/axiosInstance";

export const fetchPosts = async (pageParam = 0) => {
  const response = await axios.get(`/posts?page=${pageParam}`);
  return response.data;
};

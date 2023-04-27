import axios from "@api/axiosInstance";

export const fetchPosts = async ({ pageParam = 1 }) => {
  const response = await axios.get(`/posts?page=${pageParam}`);
  return response.data;
};

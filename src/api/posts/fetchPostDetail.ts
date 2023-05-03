import axios from "@api/axiosInstance";

export const fetchPostDetail = async (id: string) => {
  const response = await axios.get(`/posts/${id}`);
  return response.data;
};

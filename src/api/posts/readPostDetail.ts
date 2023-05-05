import axios from "@api/axiosInstance";

export const readPostDetail = async (id: string) => {
  const response = await axios.get(`/posts/${id}`);
  return response.data;
};

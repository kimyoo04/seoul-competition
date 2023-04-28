import axios from "@api/axiosInstance";

export const fetchEducations = async (pageParam = 0) => {
  const response = await axios.get(`/educations?page=${pageParam}`);
  return response.data;
};

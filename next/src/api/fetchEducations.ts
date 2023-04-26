import axios from "@api/axiosInstance";

export const fetchEducations = async ({ pageParam = 1 }) => {
  const response = await axios.get(`/educations?page=${pageParam}`);
  return response.data;
};

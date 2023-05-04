import axios from "@api/axiosInstance";

export const readEducationDetail = async (id: string) => {
  const response = await axios.get(`/educations/${id}`);
  return response.data.data;
};

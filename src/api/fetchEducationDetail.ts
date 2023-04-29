import axios from "@api/axiosInstance";

export const fetchEducationDetail = async (id: string) => {
  const response = await axios.get(`/educations/${id}`);
  return response.data.data;
};

import axios from "@api/axiosInstance";
import { ICreateReview } from "@type/commentOrReview";

export const createReview = async (data: ICreateReview) => {
  return await axios.post(`/review`, data);
};

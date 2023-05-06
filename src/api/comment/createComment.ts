import axios from "@api/axiosInstance";
import { ICreateComment } from "@type/commentOrReview";

export const createComment = async (data: ICreateComment) => {
  return await axios.post(`/comment`, data);
};

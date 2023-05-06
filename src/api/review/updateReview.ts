import axios from "@api/axiosInstance";
import { IUpdateCommentOrReview } from "@type/commentOrReview";

export const updateReview = async (data: IUpdateCommentOrReview) => {
  const { id, ...postData } = data;
  return await axios.put(`/review/${id}`, { ...postData });
};

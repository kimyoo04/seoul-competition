import axios from "@api/axiosInstance";
import { IUpdateCommentOrReview } from "@type/commentOrReview";

export const updateComment = async (data: IUpdateCommentOrReview) => {
  const { id, ...postData } = data;
  return await axios.put(`/comment/${id}`, { ...postData });
};

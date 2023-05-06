import axios from "@api/axiosInstance";
import { IMatchCheckCommentOrReview } from "@type/commentOrReview";

export const matchCheckComment = async (data: IMatchCheckCommentOrReview) => {
  return await axios.post(`/comment/${data.id}/matchCheck`, {
    password: data.password,
  });
};

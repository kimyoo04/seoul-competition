import axios from "@api/axiosInstance";
import { IDeleteCommentOrReview } from "@type/commentOrReview";

export const deleteComment = async (data: IDeleteCommentOrReview) => {
  return await axios.delete(`/comment/${data.id}`, {
    data: { password: data.password },
  });
};

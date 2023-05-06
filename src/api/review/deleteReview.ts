import axios from "@api/axiosInstance";
import { IDeleteCommentOrReview } from "@type/commentOrReview";

export const deleteReview = async (data: IDeleteCommentOrReview) => {
  return await axios.delete(`/review/${data.id}`, {
    data: { password: data.password },
  });
};

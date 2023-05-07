import axios from "@api/axiosInstance";
import { IDeleteCommentOrReview } from "@type/commentOrReview";

export const deleteComment = async (data: IDeleteCommentOrReview) => {
  try {
    await axios.delete(`/comment/${data.id}`, {
      data: { password: data.password },
    });

    return true;
  } catch (err) {
    return false;
  }
};

import axios from "@api/axiosInstance";
import { IDeleteCommentOrReview } from "@type/commentOrReview";

export const deleteReview = async (data: IDeleteCommentOrReview) => {
  try {
    await axios.delete(`/review/${data.id}`, {
      data: { password: data.password },
    });

    return true;
  } catch (err) {
    return false;
  }
};

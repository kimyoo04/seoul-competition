import axios from "@api/axiosInstance";
import { IMatchCheckCommentOrReview } from "@type/commentOrReview";

export const matchCheckReview = async (data: IMatchCheckCommentOrReview) => {
  return await axios.post(`/review/${data.id}/matchCheck`, {
    password: data.password,
  });
};

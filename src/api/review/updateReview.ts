import axios from "@api/axiosInstance";
import { IUpdateCommentOrReview } from "@type/commentOrReview";

export const updateReview = async (data: IUpdateCommentOrReview) => {
  try {
    const { id, ...putData } = data;
    await axios.put(`/review/${id}`, { ...putData });

    return true;
  } catch (err) {
    return false;
  }
};

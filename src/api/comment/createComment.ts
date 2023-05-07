import axios from "@api/axiosInstance";
import { ICreateComment } from "@type/commentOrReview";

export const createComment = async (data: ICreateComment) => {
  try {
    await axios.post(`/comment`, data);

    return true;
  } catch (err) {
    return false;
  }
};

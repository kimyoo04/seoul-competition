import axios from "@api/axiosInstance";
import { ICreateReview } from "@type/commentOrReview";

export const createReview = async (data: ICreateReview) => {
  try {
    await axios.post(`/review`, data);

    return true;
  } catch (err) {
    return false;
  }
};

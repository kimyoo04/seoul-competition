import axios from "@api/axiosInstance";
import { ICreateComment, ICreateReview } from "@type/commentOrReview";

// 자유 게시판 댓글
export const createComment = async (data: ICreateComment) => {
  try {
    await axios.post(`/comment`, data);
    return true;
  } catch (err) {
    return false;
  }
};

// 교육 게시판 리뷰
export const createReview = async (data: ICreateReview) => {
  try {
    await axios.post(`/review`, data);

    return true;
  } catch (err) {
    return false;
  }
};

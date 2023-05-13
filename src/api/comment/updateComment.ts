import axios from "@api/axiosInstance";
import { IUpdateCommentOrReview } from "@type/commentOrReview";

export const updateComment = async (data: IUpdateCommentOrReview) => {
  try {
    const { id, ...putData } = data;
    console.log("🚀 ~ file: updateComment.ts:7 ~ updateComment ~ putData:", putData)
    await axios.put(`/comment/${id}`, { ...putData });

    return true;
  } catch (err) {
    return false;
  }
};

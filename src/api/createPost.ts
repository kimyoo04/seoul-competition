import axios from "@api/axiosInstance";
import { IPostForm } from "@type/postForm";

export const createPost = async (newPost: IPostForm) => {
  try {
    const response = await axios.post(`/posts`, newPost);
    return response; // 성공하면 반환 데이터 없음
  } catch (error) {
    return error;
  }
};

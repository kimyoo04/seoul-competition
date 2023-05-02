import axios from "@api/axiosInstance";
import { IPostForm } from "@type/postForm";

export const createPost = async (newPost: IPostForm) => {
  try {
    const response = await axios.post(`/posts/new`, newPost);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

import axios from "@api/axiosInstance";

export const deletePostDetail = async (data: any) => {
  try {
    await axios.delete(`/posts/${data.id}`, {
      data: { password: data.password },
    });
    return true;
  } catch (err) {
    return false;
  }
};

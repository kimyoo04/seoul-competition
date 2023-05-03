import axios from "@api/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IPostForm, IUpdatePostForm } from "@type/posts";
import { useRouter } from "next/router";

// 게시글 Create
export const createPost = async (newPost: IPostForm) => {
  const response = await axios.post(`/posts`, newPost);
  return response; // 성공하면 반환 데이터 없음
};

// 게시글 Update

export const updatePost = async (updatedPost: IUpdatePostForm) => {
  const response = await axios.put(`/posts/${updatedPost.postId}`, updatedPost);
  return response;
};

// useCreateMutation
export const useCreateMutation = () => {
  const router = useRouter();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["post"] });

      router.push("/posts");
    },
    onError: (err) => {
      console.error(err);
    },
    onSettled: () => {
      console.log("완료");
    },
  });
};

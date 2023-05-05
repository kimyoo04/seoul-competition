import axios from "@api/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IUpdatePostForm } from "@type/posts";
import { useRouter } from "next/router";

// 게시글 Update

export const updatePostDetail = async (updatedPost: IUpdatePostForm) => {
  const response = await axios.put(`/posts/${updatedPost.postId}`, updatedPost);
  return response;
};

// useUpdateMutation
export const useUpdateMutation = () => {
  const router = useRouter();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePostDetail,
    onSuccess: async (_, variables) => {
      await queryClient.invalidateQueries({ queryKey: ["updatedpost"] });

      router.push(`/posts/${variables.postId}`);
    },
    onError: (err) => {
      console.error(err);
    },
    onSettled: () => {
      console.log("완료");
    },
  });
};

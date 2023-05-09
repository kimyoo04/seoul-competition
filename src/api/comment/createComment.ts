import axios from "@api/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ICreateComment } from "@type/commentOrReview";
import { useRouter } from "next/router";

// 자유 게시판 댓글
export const createComment = async (data: ICreateComment) => {
  try {
    await axios.post(`/comment`, data);
    return true;
  } catch (err) {
    return false;
  }
};

// 자유 게시판 댓글 Mutation
export const useCreateCommentMutation = () => {
  const router = useRouter();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createComment,
    onSuccess: async (_, variables) => {
      await queryClient.invalidateQueries({
        queryKey: ["postDetail", variables.postId],
      });
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

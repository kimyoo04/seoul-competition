import axios from "@api/axiosInstance";
import { alertActions } from "@features/alert/alertSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAppDispatch } from "@toolkit/hook";
import { IUpdatePostCheck, IUpdatePostForm } from "@type/posts";
import { useRouter } from "next/router";

// 게시글 Update

export const updatePostDetail = async (updatedPost: IUpdatePostForm) => {
  const response = await axios.put(`/posts/${updatedPost.postId}`, updatedPost);
  return response;
};

// 게시글 Update Password Check
export const updatePostPwd = async (postIdPwd: IUpdatePostCheck) => {
  const response = await axios.post(
    `/posts/${postIdPwd.postId}/matchcheck`,
    postIdPwd.password
  );
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

// useUpdateMutation
export const useUpdatePostPwdMutation = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePostPwd,
    onSuccess: async (_, variables) => {
      await queryClient.invalidateQueries({ queryKey: ["checkedPost"] });

      router.push(`/posts/modify/${variables.postId}`);
    },
    onError: (err) => {
      console.error(err);

      dispatch(
        alertActions.alert({
          alertType: "Warning",
          content: "비밀번호가 일치하지 않습니다. 다시 입력해주세요.",
        })
      );
    },
    onSettled: () => {
      console.log("완료");
    },
  });
};

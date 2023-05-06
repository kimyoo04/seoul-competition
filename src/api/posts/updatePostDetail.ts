import axios from "@api/axiosInstance";
import { alertActions } from "@features/alert/alertSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAppDispatch } from "@toolkit/hook";
import { IUpdatePostCheck, IUpdatePostForm } from "@type/posts";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

// 게시글 Update

export const updatePostDetail = async (updatedPost: IUpdatePostForm) => {
  const response = await axios.put(`/posts/${updatedPost.postId}`, updatedPost);
  return response;
};

// 게시글 Update Password Check
export const updatePostPwd = async (postIdPwd: IUpdatePostCheck) => {
  try {
    const response = await axios.post(`/posts/${postIdPwd.postId}/matchCheck`, {
      password: postIdPwd.password,
    });
    return "success";
  } catch (err) {
    return "fail";
  }
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

// useUpdatePostPwdMutation
export const useUpdatePostPwdMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePostPwd,
    onSuccess: async (_, variables) => {
      await queryClient.invalidateQueries({ queryKey: ["checkedPost"] });
    },
    onError: (err) => {
      console.error(err);
    },
    onSettled: () => {
      console.log("완료");
    },
  });
};

import { motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import { IMatchCheckCommentOrReviewForm, TId } from "@type/commentOrReview";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@toolkit/hook";
import { matchCheckComment } from "@api/comment/matchCheckComment";
import { alertActions } from "@features/alert/alertSlice";
import { deleteComment } from "@api/comment/deleteComment";
import { deleteReview } from "@api/review/deleteReview";
import { commentActions } from "@features/comment/commentSlice";

export default function CommentDelButton({ id }: { id: TId }) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { beforeDelete, beforeUpdate, commentId } = useAppSelector(
    (state) => state.comment
  );

  const { register, handleSubmit } = useForm<IMatchCheckCommentOrReviewForm>({
    defaultValues: {},
  });

  const onValid: SubmitHandler<IMatchCheckCommentOrReviewForm> = async (
    data
  ) => {
    if (router.pathname.split("/")[1] === "posts") {
      const isMatch = await matchCheckComment({
        id,
        password: data.password,
      });
      if (!isMatch) {
        // 경고창 활성화
        dispatch(
          alertActions.alert({
            alertType: "Warning",
            content: "비밀번호가 일치하지 않습니다.",
          })
        );
        return;
      } else {
        // 삭제 요청
        await deleteComment({ id: id, password: data.password });

        // 성공 알람 활성화
        dispatch(
          alertActions.alert({
            alertType: "Success",
            content: "댓글이 삭제되었습니다.",
          })
        );
      }
    } else {
      const reviewData = {
        educationId: router.query.id as string,
        id: id,
        ...data,
      };
      const isMatch = await matchCheckComment({
        id: reviewData.id,
        password: reviewData.password,
      });
      if (!isMatch) {
        // 경고창 활성화
        dispatch(
          alertActions.alert({
            alertType: "Warning",
            content: "비밀번호가 일치하지 않습니다.",
          })
        );
        return;
      } else {
        // 삭제 요청
        await deleteReview({ id: id, password: data.password });

        dispatch(
          alertActions.alert({
            alertType: "Success",
            content: "댓글이 삭제되었습니다.",
          })
        );
        // 목록 페이지 이동
        router.push(`/educations/${reviewData.educationId}`);
      }
    }

    // 비밀 번호 확인
  };

  return (
    <>
      {beforeDelete && commentId === id ? (
        <form
          onSubmit={handleSubmit(onValid)}
          className="row-center relative gap-2"
        >
          <div className="absolute right-0 top-8">
            <input
              {...register("password", {
                required: "비밀번호를 입력해 주세요.",

                minLength: {
                  value: 4,
                  message: "최소 4 글자 이상 입력해 주세요.",
                },
                maxLength: {
                  value: 12,
                  message: "최대 12 글자까지 입력할 수 있어요.",
                },
              })}
              id="password"
              type="password"
              name="password"
              autoComplete="off"
              placeholder="4 자 이상"
              maxLength={13}
              className=" h-8 w-[100px] rounded-lg placeholder:text-sm placeholder:font-bold placeholder:text-gray_2"
            />
          </div>

          {/* 댓글 삭제 확인 버튼 */}
          <button type="submit" className="delete_btn">
            삭제
          </button>

          {/* 댓글 삭제 취소 버튼 */}
          <div
            className="create_btn cursor-pointer"
            onClick={() => dispatch(commentActions.clickCancel())}
          >
            취소
          </div>
        </form>
      ) : (
        <motion.button
          whileTap={{ scale: 0.8 }}
          className="delete_btn"
          onClick={() => dispatch(commentActions.clickDelete(id))}
        >
          삭제
        </motion.button>
      )}
    </>
  );
}

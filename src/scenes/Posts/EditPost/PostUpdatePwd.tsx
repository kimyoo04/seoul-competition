import { useUpdatePostPwdMutation } from "@api/posts/updatePostDetail";
import { IUpdatePostCheck, IUpdatePostCheckForm } from "@type/posts";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

export default function PostUpdatePwd({ id }: { id: string }) {
  // useForm 활용
  const router = useRouter();
  const { data, isLoading, mutate, mutateAsync } = useUpdatePostPwdMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    control,
  } = useForm<IUpdatePostCheckForm>({
    defaultValues: {},
  });

  const onValid: SubmitHandler<IUpdatePostCheckForm> = async (data) => {
    if (!data.password) {
      const errMsg: { [key: string]: string } = {};

      if (!data.password) errMsg.password = "비밀번호를 입력해 주세요.";

      const setErrors = (errors: Record<string, string>) => {
        Object.entries(errors).forEach(([key, value]) => {
          setError(key as "password", {
            message: value,
            type: "required",
          });
        });
      };
      setErrors(errMsg);
      return;
    }

    const checkedData: IUpdatePostCheck = {
      postId: id,
      ...data,
    };

    await mutateAsync(checkedData);
    router.push(`/posts/modify/${id}`);
  };

  return (
    <div className="w-full px-4">
      <div className="col-center mx-auto my-16 flex max-w-md">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <div className="mb-4 text-xl font-bold text-alert_info">
            * 작성 시 입력한 비밀번호와 일치해야 합니다.
          </div>
          <form onSubmit={handleSubmit(onValid)}>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="mb-2 block font-bold text-gray-700"
              >
                비밀번호를 입력해 주세요.
              </label>
              <input
                type="password"
                id="password"
                className="w-full rounded-md border-2 border-gray-400 p-2"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="rounded-md bg-main_color px-4 py-2 text-white hover:bg-blue-700"
              >
                확인
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

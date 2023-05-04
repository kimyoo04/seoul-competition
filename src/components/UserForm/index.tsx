import { IUserForm } from "@type/userForm";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { genders, ages, locations, interests } from "./userFormData";
import classNames from "classnames";
import fetchUser from "@api/user/postUser";
import { motion } from "framer-motion";

export default function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
    reset,
  } = useForm<IUserForm>({
    defaultValues: {},
  });

  const onValid: SubmitHandler<IUserForm> = async (data) => {
    if (
      !data.age ||
      !data.gender ||
      data.location == "" ||
      data.interest == "" ||
      !data.confirm
    ) {
      const errMsg: { [key: string]: string } = {};

      errMsg.gender = "성별을 골라주세요.";
      errMsg.age = "연령대을 골라주세요.";
      errMsg.location = "거주 지역을 골라주세요.";
      errMsg.interest = "관심사를 골라주세요.";
      errMsg.confirm = "동의를 해주세요";

      const setErrors = (errors: Record<string, string>) => {
        Object.entries(errors).forEach(([key, value]) => {
          setError(
            key as "gender" | "age" | "location" | "interest" | "confirm",
            {
              message: value,
              type: "required",
            }
          );
        });
      };

      setErrors(errMsg);
      return;
    }

    const response = await fetchUser(data);
    console.log(response);
  };

  return (
    <>
      {/* 오버레이 */}
      <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-black/60"></div>

      {/* 유저 폼 영역 */}
      {genders && ages && locations && interests && (
        <form
          className="col-start z-50 gap-4 rounded-2xl bg-white p-8"
          onSubmit={handleSubmit(onValid)}
        >
          <div className="col-start gap-2">
            <div className="row-start gap-4">
              <span className="font-bold">성별</span>
              <span className="text-sm text-main_color">
                {errors.gender?.message}
              </span>
            </div>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => {
                return (
                  <div {...field} className="grid w-full grid-cols-2 gap-3">
                    {genders.map((gender) => {
                      return (
                        <label
                          htmlFor={gender}
                          key={gender}
                          className={`undraggable rounded-2xl border border-main_color px-3 py-0.5 transition-all ${classNames(
                            {
                              "bg-main_color font-bold text-font_white shadow-md":
                                field.value == gender,
                            }
                          )}`}
                        >
                          <input
                            type="radio"
                            id={gender}
                            name={gender}
                            value={gender}
                            checked={field.value == gender}
                            onChange={(e) => {
                              field.onChange(e.target.value);
                            }}
                            className="hidden"
                          />
                          {gender}
                        </label>
                      );
                    })}
                  </div>
                );
              }}
            />
          </div>

          <div className="col-start gap-2">
            <div className="row-start gap-4">
              <span className="font-bold">연령대</span>
              <span className="text-sm text-main_color">
                {errors.age?.message}
              </span>
            </div>
            <Controller
              name="age"
              control={control}
              render={({ field }) => {
                return (
                  <div
                    {...field}
                    className="grid w-full grid-cols-2 justify-stretch gap-3 sm:grid-cols-3"
                  >
                    {ages.map((age) => {
                      return (
                        <label
                          htmlFor={age}
                          key={age}
                          className={`undraggable rounded-2xl border border-main_color px-3 py-0.5 transition-all ${classNames(
                            {
                              "bg-main_color font-bold text-font_white shadow-md":
                                field.value == age,
                            }
                          )}`}
                        >
                          <input
                            type="radio"
                            id={age}
                            name={age}
                            value={age}
                            checked={field.value == age}
                            onChange={(e) => {
                              field.onChange(e.target.value);
                            }}
                            className="hidden"
                          />
                          {age}
                        </label>
                      );
                    })}
                  </div>
                );
              }}
            />
          </div>

          <div className="col-start relative w-full gap-2">
            <div className="row-start gap-4">
              <span className="font-bold">거주 지역</span>
              <span className="text-sm text-main_color">
                {errors.location?.message}
              </span>
            </div>
            <select
              {...register("location")}
              className="w-full appearance-none rounded-2xl border border-main_color py-0.5 pl-2 outline-none"
            >
              <option value={""}>- 클릭해주세요. -</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-2 top-[27px] flex items-center">
              <i className="ri-arrow-down-s-line text-4xl text-main_color"></i>
            </div>
          </div>

          <div className="col-start relative w-full gap-2">
            <div className="row-start gap-4">
              <span className="font-bold">관심사</span>
              <span className="text-sm text-main_color">
                {errors.interest?.message}
              </span>
            </div>
            <select
              {...register("interest")}
              className="w-full appearance-none rounded-2xl border border-main_color py-0.5 pl-2 outline-none"
            >
              <option value={""}>- 클릭해주세요. -</option>
              {interests.map((interest) => (
                <option key={interest} value={interest}>
                  {interest}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-2 top-[27px] flex items-center">
              <i className="ri-arrow-down-s-line text-4xl text-main_color"></i>
            </div>
          </div>

          {/* 동의 버튼 */}
          <Controller
            name="confirm"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <>
                <label
                  {...field}
                  htmlFor="confirm"
                  className={`row-center ${
                    field.value
                      ? "font-bold"
                      : errors.confirm?.message
                      ? "text-main_color"
                      : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    id="confirm"
                    className="mr-3 h-5 w-5 border-none shadow-none"
                  />
                  정보의 확인 및 사용에 동의합니다.
                </label>
              </>
            )}
          />

          {/* 확인 버튼 */}
          <motion.button
            whileTap={{ scale: 0.9, transition: { duration: 0.05 } }}
            type="submit"
            className="accent_btn_border col-center h-8 w-full transition-all hover:bg-main_color hover:text-font_white"
          >
            확인하기
          </motion.button>
        </form>
      )}
    </>
  );
}

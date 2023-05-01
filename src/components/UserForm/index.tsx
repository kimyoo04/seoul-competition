import { IUserForm } from "@type/userForm";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { genders, ages, cities, favorites } from "./userFormData";
import classNames from "classnames";

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

  const onValid: SubmitHandler<IUserForm> = (data) => {
    if (!data.age) return;

    console.log(data.gender, data.age, data.city, data.favorite, data.confirm);
  };

  return (
    <>
      {/* 오버레이 */}
      <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-black/60"></div>

      {/* 유저 폼 영역 */}
      {genders && ages && cities && favorites && (
        <form
          className="col-start z-50 gap-4 rounded-2xl bg-white p-8"
          onSubmit={handleSubmit(onValid)}
        >
          <div className="col-start gap-2">
            <span>성별</span>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => {
                return (
                  <div {...field} className="grid grid-cols-3 gap-3">
                    {genders.map((gender) => {
                      return (
                        <label
                          htmlFor={gender}
                          key={gender}
                          className={`undraggable rounded-2xl border border-main_color px-3 py-0.5 transition-all ${classNames(
                            {
                              "bg-main_color text-font_white shadow-md":
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
            <span>연령대</span>
            <Controller
              name="age"
              control={control}
              render={({ field }) => {
                return (
                  <div {...field} className="grid grid-cols-3 gap-3">
                    {ages.map((age) => {
                      return (
                        <label
                          htmlFor={age}
                          key={age}
                          className={`undraggable rounded-2xl border border-main_color px-3 py-0.5 transition-all ${classNames(
                            {
                              "bg-main_color text-font_white shadow-md":
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
            <span>거주 지역</span>
            <select
              {...register("city")}
              className="w-full appearance-none rounded-2xl border border-main_color py-0.5 pl-2"
              placeholder="나는"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-1 top-[26px] flex items-center">
              <i className="ri-arrow-down-s-line text-4xl text-main_color"></i>
            </div>
          </div>

          <div className="col-start relative w-full gap-2">
            <span>관심 키워드</span>
            <select
              {...register("favorite")}
              className="w-full appearance-none rounded-2xl border border-main_color py-0.5 pl-2"
              placeholder="나는"
            >
              {favorites.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-1 top-[26px] flex items-center">
              <i className="ri-arrow-down-s-line text-4xl text-main_color"></i>
            </div>
          </div>

          {/* 동의 버튼 */}
          <Controller
            name="confirm"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <label {...field} htmlFor="confirm" className="row-center">
                  <input
                    type="checkbox"
                    id="confirm"
                    className="mr-3 h-5 w-5"
                  />
                  정보의 확인 및 사용에 동의합니다.
                </label>
              </>
            )}
          />

          {/* 확인 버튼 */}
          <button type="submit" className="base_btn col-center h-8">
            확인하기
          </button>
        </form>
      )}
    </>
  );
}

import { IUserForm } from "@type/userForm";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { genders, ages, cities } from "./userFormData";
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
  };

  return (
    <>
      {/* 오버레이 */}
      <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-black/60"></div>

      {/* 유저 폼 영역 */}
      <form
        className="col-start z-50 gap-4 rounded-2xl bg-white p-8"
        onSubmit={handleSubmit(onValid)}
      >
        <Controller
          name="gender"
          control={control}
          render={({ field }) => {
            return (
              <form {...field} className="grid grid-cols-3 gap-2">
                {genders.map((gender) => {
                  return (
                    <label
                      htmlFor={gender}
                      className={`undraggable rounded-2xl border border-main_color px-2 py-0.5 transition-all ${classNames(
                        {
                          "bg-main_color text-font_white shadow-md":
                            field.value == gender,
                        }
                      )}`}
                    >
                      <input
                        type="radio"
                        key={gender}
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
              </form>
            );
          }}
        />

        <Controller
          name="age"
          control={control}
          render={({ field }) => {
            return (
              <form {...field} className="grid grid-cols-3 gap-2">
                {ages.map((age) => {
                  return (
                    <label
                      htmlFor={age}
                      className={`undraggable rounded-2xl border border-main_color px-2 py-0.5 transition-all ${classNames(
                        {
                          "bg-main_color text-font_white shadow-md":
                            field.value == age,
                        }
                      )}`}
                    >
                      <input
                        type="radio"
                        key={age}
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
              </form>
            );
          }}
        />

        <select
          {...register("city")}
          className="w-full rounded-2xl border border-main_color py-0.5"
          placeholder="나는"
        >
          {cities.map((city) => (
            <option value={city}>{city}</option>
          ))}
        </select>

        <span>관심 키워드</span>
        <select
          {...register("favorite")}
          className="w-full rounded-2xl border border-main_color py-0.5"
          placeholder="나는"
        >
          {cities.map((city) => (
            <option value={city}>{city}</option>
          ))}
        </select>

        <button type="submit" className="base_btn col-center h-8">
          확인하기
        </button>
      </form>
    </>
  );
}

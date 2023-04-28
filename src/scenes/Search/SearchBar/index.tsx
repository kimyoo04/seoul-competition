import { useForm } from "react-hook-form";
import { ISearchField } from "@type/search";

import { useAppDispatch } from "@toolkit/hook";
import { searchActions } from "@features/search/searchSlice";

export default function SearchBar() {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
    reset,
  } = useForm<ISearchField>({
    defaultValues: {},
  });

  const onValid = (data: ISearchField) => {
    // validation
    if (!data.search) return;

    // category에 따라 요청 보내기
    console.log(data.search);
    dispatch(searchActions.searchName({ searchName: data.search }));
  };

  return (
    <section>
      <form className="group relative w-full" onSubmit={handleSubmit(onValid)}>
        {/* 검색어 입력 영역 */}
        <input
          {...register("search", {
            required: "검색어가 필요합니다!",
          })}
          className="textfield absolute h-8 w-full pl-9 transition-all"
          id="search"
          name="search"
          placeholder={
            errors.search ? errors?.search?.message : "검색어를 입력해주세요."
          }
          autoComplete="off"
        />

        {/* Search Icon */}
        <button
          type="submit"
          className="col-center absolute bottom-4 left-5 text-2xl font-bold "
        >
          <i className="ri-search-line absolute transition-all group-hover:text-main_color"></i>
        </button>

        {/* 더미 div 태그 */}
        <div className="dummy h-8 w-full"> </div>
      </form>
    </section>

    //? 추후 연관 검색어 추천 넣기
  );
}

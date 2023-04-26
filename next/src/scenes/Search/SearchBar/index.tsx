import { useForm } from "react-hook-form";
import { ISearchField, TSearchCategory } from "@type/search";

interface ISearchBar {
  category: TSearchCategory;
}

export default function SearchBar({ category = "" }: ISearchBar) {
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
  };

  return (
    <form className="relative w-full group" onSubmit={handleSubmit(onValid)}>
      {/* 검색어 입력 영역 */}
      <input
        {...register("search", {
          required: "검색어가 필요합니다!",
        })}
        className="absolute w-full h-8 pl-4 transition-all textfield"
        id="search"
        name="search"
        placeholder={
          errors.search ? errors?.search?.message : "검색어를 입력해주세요."
        }
        autoComplete="off"
      />

      {/* Search Bar 아이콘 */}
      <button
        type="submit"
        className="absolute text-2xl font-bold bottom-4 right-6 col-center "
      >
        <i className="absolute transition-all ri-search-line group-hover:text-main_color"></i>
      </button>

      {/* 더미 div 태그 */}
      <div className="w-full h-8 dummy"> </div>
    </form>
  );
}

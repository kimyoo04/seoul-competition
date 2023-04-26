import Link from "next/link";
import { useForm } from "react-hook-form";

import { ISearchField } from "@type/search";

export default function SearchBar({ isLink = false }) {
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

    // 요청 보내기
    console.log(data.search);
    reset({ search: "" });
  };

  return isLink ? (
    <Link href={"/search"}>
      <div className="relative w-full py-4 group">
        {/* Search Bar 영역 */}
        <div className="absolute w-full h-8 pl-4 transition-all bg-white border rounded-full group-hover:border-main_color"></div>

        {/* Search Bar 아이콘 */}
        <button className="absolute text-2xl font-bold bottom-4 right-4 col-center ">
          <i className="transition-all ri-search-line group-hover:text-main_color"></i>
        </button>

        {/* 더미 div 태그 */}
        <div className="w-full h-8 dummy"> </div>
      </div>
    </Link>
  ) : (
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

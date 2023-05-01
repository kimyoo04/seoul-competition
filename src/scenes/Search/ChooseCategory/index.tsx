import { TSearchCategory, TSearchCategoryKor } from "@type/search";
import { useRouter } from "next/router";

export default function ChooseCategory() {
  const router = useRouter();

  const categoriesKor: TSearchCategoryKor[] = [
    "교육 정보 검색",
    "자유게시판 검색",
  ];
  const categoriesEng: TSearchCategory[] = ["educations", "posts"];

  return (
    <section className="z-10 mt-2 flex w-full items-center justify-between">
      {categoriesKor.map((category, index) => {
        if (router.pathname.substring(1) === categoriesEng[index]) {
          return (
            <button className="px-3 font-bold text-white">{category}</button>
          );
        }
      })}
    </section>
  );
}

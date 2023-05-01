import { TSearchCategory, TSearchCategoryKor } from "@type/search";
import { useRouter } from "next/router";

export default function SearchCategory() {
  const router = useRouter();

  const categoriesKor: TSearchCategoryKor[] = [
    "교육 정보 검색",
    "자유게시판 검색",
  ];
  const categoriesEng: TSearchCategory[] = ["educations", "posts"];

  return (
    <section>
      {categoriesKor.map((category, index) => {
        if (router.pathname.substring(1) === categoriesEng[index]) {
          return (
            <h2 key={category} className="px-3 text-h4 font-bold text-white">
              {category}
            </h2>
          );
        }
      })}
    </section>
  );
}

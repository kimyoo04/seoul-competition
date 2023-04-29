import { TSearchCategory, TSearchCategoryKor } from "@type/search";
import ChooseButton from "./ChooseButton";

export default function ChooseCategory() {
  const categoriesKor: TSearchCategoryKor[] = [
    "교육 정보 검색",
    "자유게시판 검색",
  ];
  const categoriesEng: TSearchCategory[] = ["educations", "posts"];

  return (
    <section className="z-10 mt-2 flex w-full items-center justify-between">
      {categoriesKor.map((category, index) => {
        return (
          <ChooseButton
            key={categoriesEng[index]}
            categoryEng={categoriesEng[index]}
          >
            {category}
          </ChooseButton>
        );
      })}
    </section>
  );
}

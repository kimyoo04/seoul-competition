import { TSearchCategory } from "@type/search";
import ChooseButton from "./ChooseButton";

export default function ChooseCategory() {
  const categories: TSearchCategory[] = ["educations", "posts"];

  return (
    <section className="mt-2 flex w-full items-center justify-between">
      {categories.map((category) => (
        <ChooseButton key={category}>{category}</ChooseButton>
      ))}
    </section>
  );
}

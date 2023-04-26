import ChooseButton from "./ChooseButton";

export default function ChooseCategory() {
  const categories = ["educations", "posts"];

  return (
    <div className="flex items-center justify-between mt-2">
      {categories.map((category) => (
        <ChooseButton key={category}>{category}</ChooseButton>
      ))}
    </div>
  );
}

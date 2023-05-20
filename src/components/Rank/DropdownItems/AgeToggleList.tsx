import { IAgesMinMax } from "@type/rank";

export default function AgeToggleList({
  data,
  onSelect,
}: {
  data: IAgesMinMax;
  onSelect: (data: IAgesMinMax) => void;
}) {
  const handleClick = () => {
    onSelect(data);
  };
  return (
    <>
      <li className="col-center w-40 border-b" onClick={handleClick}>
        {data.age}
      </li>
    </>
  );
}

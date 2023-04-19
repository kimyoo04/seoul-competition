import ScrollButton from "@components/ScrollButton";
import { educationData } from "public/data/educationData";
import Card from "./Card";

export default function Education() {
  return (
    <div className="w-screen h-screen px-4 bg-gray_4">
      {/* 교육 리스트 영역 */}
      <div className="gap-3 col-center">
        {educationData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>

      {/* 최상단 이동 버튼 */}
      <ScrollButton />
    </div>
  );
}

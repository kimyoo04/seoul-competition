import { IEducationCard } from "@type/education";
import Link from "next/link";

export default function Card({ education }: { education: IEducationCard }) {
  return (
    <Link
      href={`/educations/${education.id}`}
      className="flex flex-col w-full max-w-2xl gap-4 p-4 bg-white rounded-2xl"
    >
      {/* 교육 이름 */}
      <div className="">
        <span className="font-bold text-h4">{education.name}</span>
      </div>

      {/* 교육 정보 */}
      <div className="flex justify-between gap-4">
        <div className="col-start">
          <div className="gap-2 col-start">
            <span className="">정원</span>
            <span className="">{education.capacity}</span>
          </div>
        </div>

        <div className="col-start">
          <div className="gap-2 col-start">
            <span className="">강좌 비용</span>
            <span className="">{education.price}</span>
          </div>
        </div>

        <div className="col-start">
          <div className="gap-2 col-start">
            <span className="">강좌 상태</span>
            <span className="">{education.status}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

import { IEducationData } from "@type/educations";
import Link from "next/link";

export default function EducationItem({
  education,
}: {
  education: IEducationData;
}) {
  return (
    <Link
      href={`/educations/${education.id}`}
      className="flex w-full flex-col gap-4 rounded-2xl bg-white p-4 shadow-md"
    >
      {/* 교육 이름 */}
      <div className="">
        <span className="text-h4 font-bold">{education.name}</span>
      </div>

      {/* 교육 정보 */}
      <div className="flex justify-between gap-4">
        <div className="col-start">
          <div className="col-start gap-2">
            <span className="">정원</span>
            <span className="">{education.capacity}</span>
          </div>
        </div>

        <div className="col-start">
          <div className="col-start gap-2">
            <span className="">강좌 비용</span>
            <span className="">{education.price}</span>
          </div>
        </div>

        <div className="col-start">
          <div className="col-start gap-2">
            <span className="">강좌 상태</span>
            <span className="">{education.status}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

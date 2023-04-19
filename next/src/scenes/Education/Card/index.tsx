import { IEducation } from "@type/education";

export default function Card({ data }: { data: IEducation }) {
  return (
    <a
      href={data.link}
      className="flex flex-col w-full max-w-2xl gap-4 p-4 bg-white rounded-2xl"
    >
      <div className="">
        <span className="font-bold text-h4">{data.name}</span>
      </div>

      <div className="flex justify-between gap-4">
        <div className="col-start">
          <div className="gap-2 col-start">
            <span className="">정원</span>
            <span className="">{data.capacity}</span>
          </div>
        </div>

        <div className="col-start">
          <div className="gap-2 col-start">
            <span className="">강좌 비용</span>
            <span className="">{data.price}</span>
          </div>
        </div>

        <div className="col-start">
          <div className="gap-2 col-start">
            <span className="">강좌 상태</span>
            <span className="">{data.status}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="col-start">
          <span className="">등록 시작 및 종료일</span>
          <div className="gap-4 row-center">
            <span>{data.applyStart}</span>
            <span>{data.applyEnd}</span>
          </div>
        </div>

        <div className="col-start">
          <span className="">강좌 시작 및 종료일</span>
          <div className="gap-4 row-center">
            <span>{data.start}</span>
            <span>{data.end}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

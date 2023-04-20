import { useAppDispatch } from "@toolkit/hook";
import { IEducationCard } from "@type/education";
import Link from "next/link";

export default function Card({ data }: { data: IEducationCard }) {
  const dispatch = useAppDispatch();

  return (
    <Link
      href={`/educations${data.id}`}
      className="flex flex-col w-full max-w-2xl gap-4 p-4 bg-white rounded-2xl"
      // onClick={() => dispatch()}
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
    </Link>
  );
}

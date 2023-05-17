import Chart from "@components/Chart";
import ContentItem from "./ContentItem";
import { contents } from "@constants/home/contents";

export default function Home() {
  return (
    <div className="col-center w-full gap-8">
      <div>
        {/* Home 메시지 */}
        <h2 className="pb-4 text-2xl font-bold">
          오늘은 무엇을 하고 싶으신가요?
        </h2>
      </div>

      {/* 콘텐츠 리스트 */}
      <div className="col-center w-full max-w-7xl gap-4 md:flex-row md:justify-between md:gap-8 lg:gap-12">
        {contents &&
          contents.map((content, index) => (
            <ContentItem key={index + content.title} data={content} />
          ))}
      </div>
      <Chart/>
    </div>
  );
}

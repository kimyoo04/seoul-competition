import { IRankKeywordsData } from "@type/rank";

export default function SearchKeywordRankItem({
  keywords,
}: {
  keywords: IRankKeywordsData;
}) {
  return (
    <div className=" border-b">
      <div className="my-1 flex justify-between">
        {/* 키워드 */}
        <div className="text-lg">{keywords.keyword}</div>

        {/* 조회수 */}
        <div className=" text-md text-gray-500">조회 {keywords.hits}</div>
      </div>
    </div>
  );
}

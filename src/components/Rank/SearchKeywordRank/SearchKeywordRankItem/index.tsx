import { IRankKeywordsData } from "@type/rank";

export default function SearchKeywordRankItem({
  keywords,
}: {
  keywords: IRankKeywordsData;
}) {
  return (
    <li className="border-b">
      <div className="my-1 flex justify-between">
        {/* 키워드 */}
        <span className="text-lg">{keywords.keyword}</span>

        {/* 조회수 */}
        <span className=" text-md text-gray-500">조회 {keywords.hits}</span>
      </div>
    </li>
  );
}

import { IRankKeywordsData } from "@type/rank";
import SearchKeywordRankItem from "../SearchKeywordRankItem";

export default function SearchKeywordRankList({
  data,
}: {
  data: IRankKeywordsData[];
}) {
  return (
    <div className="col-center w-full gap-4">
      <ul className="grid w-full grid-cols-1">
        {data.map((keyword) => (
          <SearchKeywordRankItem
            key={keyword.id}
            keywords={keyword as IRankKeywordsData}
          />
        ))}
      </ul>
    </div>
  );
}

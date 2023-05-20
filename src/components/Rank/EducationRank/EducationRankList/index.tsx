import { IEducationData } from "@type/educations";
import EducationRankItem from "../EducationRankItem";
import { IRankEducationData } from "@type/rank";

export default function EducationRankList({
  data,
}: {
  data: IRankEducationData[];
}) {
  return (
    <div className="col-center w-full gap-4">
      <ul className="grid w-full grid-cols-1">
        {/*  교육 정보 아이템  */}
        {data.map((education) => (
          <EducationRankItem
            key={education.id}
            education={education as IEducationData}
          />
        ))}
      </ul>
    </div>
  );
}

// <section className="col-center w-full gap-4">
// {status === "loading" ? (
//   <PostListLoader />
// ) : status === "error" ? (
//   <>{error && <p>Error: {error.message}</p>}</>
// ) : (
//   <>
//     {/* //! 검색 정보 헤더 */}
//     <SearchHeader />

//     {/* //! 자유게시판 검색결과 무한 스크롤 영역 */}
//     <ul className="grid w-full grid-cols-1">
// {data.map((post) => (
//   <TopPostItem key={post.id} post={post as IPostData} />
// ))}
// </ul>
//   </>
// )}
// </section>

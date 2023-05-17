import TopPostList from "./TopPostList";

export default function Chart() {
  return (
    <div>
      <div className="mb-4 text-center text-xl font-medium">
        지난주에 가장 인기 있던 게시글이에요.
      </div>
        <TopPostList/>
      <div className="mb-4 text-center text-xl font-medium">-----------</div>
      <div className="mb-4 text-center text-xl font-medium">
        지난주에 가장 많이 검색된 단어예요.
      </div>
    </div>
  );
}

import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Item from "./Item";
import Loading from "@components/Loading";
import ScrollButton from "@components/ScrollButton";

import { useAppDispatch, useAppSelector } from "@toolkit/hook";
import { fetchPosts } from "@api/fetchPosts";

export default function Posts() {
  const dispatch = useAppDispatch();
  const { posts, error, hasMore, page, status } = useAppSelector(
    (state) => state.post
  );

  // 최초 게시글들 API 요청
  useEffect(() => {
    dispatch(fetchPosts(page));
  }, [dispatch]);

  // 추가 게시글들 API 요청
  const fetchMorePosts = () => {
    if (hasMore) {
      dispatch(fetchPosts(page));
    }
  };

  return (
    <div className="w-screen h-screen px-4 bg-gray_4">
      {/* 교육 무한 스크롤 영역 */}
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchMorePosts}
        hasMore={hasMore}
        loader={<Loading />}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {posts.map((post) => (
            <Item key={post.id} post={post} />
          ))}
        </div>
      </InfiniteScroll>

      {/* fetch 에러 발생시 화면 출력 */}
      {error && <p className="text-alert_danger">{error}</p>}

      {/* 최상단 이동 버튼 */}
      <ScrollButton />
    </div>
  );
}

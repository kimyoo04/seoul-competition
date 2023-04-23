import { useRouter } from "next/router";
import MainLayout from "@layouts/MainLayout";
import PostDetail from "@scenes/Posts/postDetail";

export default function PostDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  if (typeof id === "string") {
    return (
      <MainLayout>
        <PostDetail id={id} />
      </MainLayout>
    );
  } else {
    // 잘못된 id를 받으면 자유게시판 redirect
    router.push("/posts");
  }
}

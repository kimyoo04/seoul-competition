import { useMutation, useQueryClient } from "@tanstack/react-query";
import PostForm from "../PostForm";
import { createPost } from "@api/createPost";
import ScrollButton from "@components/ScrollButton";
import { IPostForm } from "@type/postForm";

export default function AddPost() {
  const queryClient = useQueryClient();
  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["post"] });
      console.log("이게 왜 Success?");
    },
  });

  const handleAddPost = ({ post }: { post: IPostForm }) => {
    createPostMutation.mutate(post);
  };

  return (
    <div className="w-full px-4">
      <div className="mx-auto my-8 max-w-screen-lg">
        <PostForm
          onSubmit={handleAddPost}
          initialValue={{ nickname: "", password: "", title: "", content: "" }}
        />
      </div>

      {/* 최상단 이동 버튼 */}
      <ScrollButton />
    </div>
  );
}

import { motion } from "framer-motion";

export default function CommentUpDelButtons() {
  function handleUpdateComment() {
    console.log("임시"); // 빌드에러 방지용
  }

  function handleDeleteComment() {
    console.log("임시"); // 빌드에러 방지용
  }

  return (
    <div className="row-center">
      {/* <Link href="/commentsy"> */}
      <motion.button
        whileTap={{ scale: 0.8 }}
        className="update_btn mr-2"
        onClick={handleUpdateComment}
      >
        수정
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.8 }}
        className="delete_btn"
        onClick={handleDeleteComment}
      >
        삭제
      </motion.button>
    </div>
  );
}

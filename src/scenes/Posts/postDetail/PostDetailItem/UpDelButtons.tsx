import Link from "next/link";

export default function UpDelButtons({ id }: { id: number }) {
  return (
    <div className="row-center gap-2">
      <Link href={`/posts/modify/${id}`}>
        <button className="update_btn">수정</button>
      </Link>
      <button className="delete_btn">삭제</button>
    </div>
  );
}

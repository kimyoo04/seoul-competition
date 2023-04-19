import { useRouter } from "next/router";

export default function BoardDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Board {id}</h1>
    </div>
  );
}

import { useRouter } from "next/router";
import MainLayout from "@layouts/MainLayout";

export default function BoardDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <MainLayout>
      <h1>Board {id}</h1>
    </MainLayout>
  );
}

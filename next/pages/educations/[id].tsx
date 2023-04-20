import { useRouter } from "next/router";
import MainLayout from "@layouts/MainLayout";

export default function EducationDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <MainLayout>
      <h1>Education {id}</h1>
    </MainLayout>
  );
}

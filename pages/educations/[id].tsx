import { useRouter } from "next/router";
import MainLayout from "@layouts/MainLayout";
import EducationDetail from "@scenes/Educations/EducationDetail";

export default function EducationDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  if (typeof id === "string") {
    return (
      <MainLayout>
        <EducationDetail id={id} />
      </MainLayout>
    );
  }
}

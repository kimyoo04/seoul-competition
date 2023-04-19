import { useRouter } from "next/router";

export default function EducationDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Education {id}</h1>
    </div>
  );
}

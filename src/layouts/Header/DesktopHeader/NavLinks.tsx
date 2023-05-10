import { useRouter } from "next/router";
import Link from "next/link";
import ButtonWrapper from "@components/Animation/ButtonWrapper";

export default function NavLinks() {
  const router = useRouter();
  const pathsArr = router.asPath.split("/");

  return (
    <div className="flex gap-2 text-xl font-medium  md:gap-4">
      <Link href={"/educations"} className="col-end pt-[6px]">
        <ButtonWrapper>
          <span
            className={`text-lg ${
              pathsArr.includes("educations") ? "font-bold text-main_color" : ""
            }`}
          >
            교육 정보
          </span>
        </ButtonWrapper>
      </Link>
      <Link href={"/posts"} className="col-end pt-[6px]">
        <ButtonWrapper>
          <span
            className={`text-lg ${
              pathsArr.includes("posts") ? "font-bold text-main_color" : ""
            }`}
          >
            자유게시판
          </span>
        </ButtonWrapper>
      </Link>
      <Link href={"/chatbot"} className="col-end pt-[6px]">
        <ButtonWrapper>
          <span
            className={`text-lg ${
              pathsArr.includes("chatbot") ? "font-bold text-main_color" : ""
            }`}
          >
            챗봇
          </span>
        </ButtonWrapper>
      </Link>
    </div>
  );
}

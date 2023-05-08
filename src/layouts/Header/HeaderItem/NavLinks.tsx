import Link from "next/link";
import ButtonWrapper from "@components/Animation/ButtonWrapper";

// isClicked를 기준으로 Menu 토글
export default function NavLinks() {
  return (
    <div className="flex gap-2 text-xl font-bold md:gap-4">
      <Link href={"/educations"} className="col-end w-[100px] pt-[6px]">
        <ButtonWrapper>
          <span className="text-main_color">교육 정보</span>
        </ButtonWrapper>
      </Link>
      <Link href={"/posts"} className="col-end w-[100px] pt-[6px]">
        <ButtonWrapper>
          <span className="text-main_color">자유게시판</span>
        </ButtonWrapper>
      </Link>
    </div>
  );
}

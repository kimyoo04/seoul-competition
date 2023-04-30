import Link from "next/link";
import ButtonWrapper from "@components/Animation/ButtonWrapper";

// isClicked를 기준으로 Menu 토글
export default function NavLinks() {
  return (
    <>
      <div className="pt-[6px] w-[92px] col-center">
        <Link href={"/educations"}>
          <ButtonWrapper>
            <span className=" font-bold text-main_color dark:text-main_color">
              교육 정보
            </span>
          </ButtonWrapper>
        </Link>
      </div>
      <div className="pt-[6px] w-[92px] col-center">
        <Link href={"/posts"}>
          <ButtonWrapper>
            <span className="font-bold text-main_color dark:text-main_color">
              자유게시판
            </span>
          </ButtonWrapper>
        </Link>
      </div>
    </>
  );
}

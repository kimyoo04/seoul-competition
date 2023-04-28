import Link from "next/link";
import ButtonWrapper from "@components/Animation/ButtonWrapper";

// isClicked를 기준으로 Menu 토글
export default function NavLinks() {
  return (
    <>
      <div>
        <Link href={"/posts"}>
          <ButtonWrapper>
            <span className="text-xl font-bold text-main_color dark:text-main_color">
              자유게시판
            </span>
          </ButtonWrapper>
        </Link>
      </div>
      <div>
        <Link href={"/educations"}>
          <ButtonWrapper>
              <span className="text-xl font-bold text-main_color dark:text-main_color">
                교육
              </span>
            </ButtonWrapper>
        </Link>
      </div>
    </>
  );
}

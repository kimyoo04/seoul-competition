import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";

import Logo from "@components/Logo";
import Menu from "./menu";
import MenuToggle from "./menuToggle";

export default function MobileHeader({
  showMenu,
  setShowMenu,
}: {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const pathsArr = router.asPath.split("/");
  const isDetailPage = router.query.id ? true : false;

  return (
    <>
      {/* 헤더 영역 */}
      {isDetailPage ? (
        <div className="container relative mx-auto grid h-16 grid-cols-3 justify-between px-4">
          {/* 디테일 페이지 헤더 */}
          <button className="flex items-center justify-start">
            <i className="ri-arrow-left-s-line text-4xl text-main_color"></i>
            <span className="text-lg font-bold text-main_color">뒤로</span>
          </button>

          <div className="col-center">
            <h2 className="text-xl font-medium text-main_color">
              {pathsArr.includes("educations")
                ? "교육 정보"
                : pathsArr.includes("posts")
                ? "자유게시판"
                : "챗봇"}
            </h2>
          </div>

          <div className="flex items-center justify-end">
            <MenuToggle setShowMenu={setShowMenu} />
          </div>
        </div>
      ) : (
        <div className="container relative mx-auto flex h-16 items-center justify-between px-4">
          {/* 일반 페이지 헤더 */}
          <Logo />
          <MenuToggle setShowMenu={setShowMenu} />
        </div>
      )}

      {/* 링크 영역 */}
      {showMenu && <Menu />}
    </>
  );
}

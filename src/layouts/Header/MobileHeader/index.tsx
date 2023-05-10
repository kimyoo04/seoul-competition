import { Dispatch, SetStateAction } from "react";

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
  return (
    <>
      {/* 헤더 영역 */}
      <div className="container relative mx-auto flex h-16 items-center justify-between px-4">
        <Logo />
        <MenuToggle setShowMenu={setShowMenu} />
      </div>

      {/* 링크 영역 */}
      {showMenu && <Menu />}
    </>
  );
}

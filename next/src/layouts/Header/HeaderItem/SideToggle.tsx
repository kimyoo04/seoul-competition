import React, { useState } from "react";
import Menu from "@layouts/Header/Menu";
import { AnimatePresence } from "framer-motion";

export default function SideToggle() {
  //
  // isClicked를 기준으로 Menu 토글
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <AnimatePresence>
        {/* 메뉴 컴포넌트가 isClicked에 토글 됨 */}
        {isClicked && <Menu setIsClicked={setIsClicked} />}
      </AnimatePresence>

      {/* 메뉴 컴포넌트 토글 버튼 */}
      <button
        className="w-8 h-8 col-center"
        onClick={() => setIsClicked(!isClicked)}
      >
        <i className="text-xl ri-menu-3-line" />
      </button>
    </>
  );
}

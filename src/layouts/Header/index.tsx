import Logo from "./HeaderItem/Logo";
import SearchLink from "./HeaderItem/SearchLink";
import NavLinks from "./HeaderItem/NavLinks";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  // 헤더가 나타나는지, 사라지는지 추적
  const [showHeader, setShowHeader] = useState(true);

  // 직전 스크롤의 위치 추적
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 현재 스크롤 위치 저장
      const currentScrollPos = window.pageYOffset;

      // isScrollingUp: 현재 스크롤 위치가 이전 스크롤보다 위에 있는 상태
      const isScrollingUp = currentScrollPos < prevScrollPos;

      // 스크롤 방향에 따라 헤더 표시하기
      setShowHeader(isScrollingUp || currentScrollPos < 10);

      // prevScrollPos -> 현재 스크롤 위치
      setPrevScrollPos(currentScrollPos);
    };

    // 스크롤 할 때마다 handleScroll 실행
    window.addEventListener("scroll", handleScroll);

    // 이벤트 리스너 해제
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // prevScrollPos 값이 변경될 때마다 useEffect 실행
  }, [prevScrollPos]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: showHeader ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 z-40 w-full bg-white shadow-sm"
      >
        <div className="container mx-auto flex h-16 items-center justify-between gap-20 sm:gap-24 md:gap-36 lg:gap-72 xl:gap-96 px-4">
          <Logo />
          <div className="container flex h-16 items-center justify-between">
            <NavLinks />
            <SearchLink />
          </div>
        </div>
      </motion.header>
    </>
  );
}

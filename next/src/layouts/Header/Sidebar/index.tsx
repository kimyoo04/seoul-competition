import { AnimatePresence, motion } from "framer-motion";
import NavLinks from "./NavLinks";
import { useAppDispatch, useAppSelector } from "@toolkit/hook";
import { sidebarActions } from "@features/sidebar/sidebarSlice";
import Portal from "./Portal";
import ButtonWrapper from "@components/Animation/ButtonWrapper";

const SideBar = () => {
  const dispatch = useAppDispatch();
  const isSidebar = useAppSelector((state) => state.sidebar.isSidebar);

  return (
    <AnimatePresence>
      {/* 회색 오버레이 div가 isSidebar에 토글 */}
      {isSidebar && (
        <div
          key="backdrop"
          className="fixed top-0 left-0 z-40 w-screen h-screen bg-black/60"
          onClick={() => dispatch(sidebarActions.toggleSidebar())}
        ></div>
      )}

      {/* 사이드바가 isSidebar에 토클 */}
      {isSidebar && (
        <motion.div
          key="sidebar"
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
          transition={{ duration: 0.2 }}
          className="relative right-0 z-40 w-64 h-screen max-w-md p-8 shadow-lg bg-main_color"
        >
          {/* 네비게이션 링크 */}
          <NavLinks />

          {/* 닫기 버튼 */}
          <button
            className="absolute bottom-0 right-0 p-8"
            onClick={() => dispatch(sidebarActions.toggleSidebar())}
          >
            <i className="text-4xl text-font_white ri-close-line" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Portal(SideBar);

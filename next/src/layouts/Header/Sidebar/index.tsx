import { AnimatePresence, motion } from "framer-motion";
import NavLinks from "./NavLinks";
import { useAppDispatch, useAppSelector } from "@toolkit/hook";
import { sidebarActions } from "@features/sidebar/sidebarSlice";
import Portal from "./Portal";

const SideBar = () => {
  const dispatch = useAppDispatch();
  const isSidebar = useAppSelector((state) => state.sidebar.isSidebar);

  return (
    <AnimatePresence>
      {/* 회색 풀 스크린 div가 isSidebar에 토글*/}
      {isSidebar && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-gray-400 opacity-50 z-40"
          onClick={() => dispatch(sidebarActions.toggleSidebar())}
        ></div>
      )}

      {/* 사이드바가 isSidebar에 토클 */}
      {isSidebar && (
        <motion.div
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 z-40 w-48 h-screen max-w-md p-4 bg-main_color shadow-lg"
        >
          {/* 닫기 버튼 */}
          <button onClick={() => dispatch(sidebarActions.toggleSidebar())}>
            <i className="text-2xl text-font_white ri-close-line" />
          </button>

          {/* Modal의 Children = NavLinks */}
            <NavLinks />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Portal(SideBar);

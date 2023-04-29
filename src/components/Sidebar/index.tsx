import { AnimatePresence, motion } from "framer-motion";
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
          className="fixed left-0 top-0 z-40 h-screen w-screen bg-black/60"
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
          className="relative right-0 z-40 h-screen w-64 max-w-md bg-main_color p-8 shadow-lg"
        >
          <span>Filter</span>
          {/* 닫기 버튼 */}
          <button
            className="absolute bottom-0 right-0 p-4"
            onClick={() => dispatch(sidebarActions.toggleSidebar())}
          >
            <ButtonWrapper>
              <i className="ri-close-line text-4xl text-font_white" />
            </ButtonWrapper>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Portal(SideBar);

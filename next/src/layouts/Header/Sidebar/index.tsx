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
      {/* 메뉴 컴포넌트가 isClicked에 토글 됨 */}
      {isSidebar && (
        <motion.div
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 z-40 w-64 h-screen max-w-md p-4 bg-blue-500 shadow-lg"
          onClick={() => dispatch(sidebarActions.toggleSidebar())}
        >
          {/* 닫기 버튼 */}
          <button className="text-gray-400 hover:text-gray-500">
            <i className="text-3xl ri-close-line" />
          </button>

          {/* Modal의 Children = NavLinks */}
          <NavLinks />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Portal(SideBar);


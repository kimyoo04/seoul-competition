import { motion } from "framer-motion";
import Header from "./Header";
import Sidebar from "./Header/Sidebar";
import { useAppSelector } from "@toolkit/hook";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isSidebar = useAppSelector((state) => state.sidebar.isSidebar);

  return (
    <>
      {/* 해더 영역 */}
      <Header />

      {/* 메인 영역 */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="container px-4 pt-16 mx-auto col-center">
          {children}
        </div>
      </motion.main>

      {/* 사이드바 영역 */}
      {isSidebar && <Sidebar />}
    </>
  );
}

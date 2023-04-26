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
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="col-center container mx-auto h-full w-full px-4 pt-16 ">
          {children}
        </div>
      </motion.div>

      {/* 사이드바 영역 */}
      {isSidebar && <Sidebar />}
    </>
  );
}

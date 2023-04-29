import { motion } from "framer-motion";
import Header from "./Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <div className="bg-gray_4 col-center container mx-auto px-4 pt-16">
          {children}
        </div>
      </motion.main>
    </>
  );
}

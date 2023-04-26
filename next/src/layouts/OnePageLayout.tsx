import { motion } from "framer-motion";
import Header from "./Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="container w-full h-full px-5 pt-16 mx-auto col-center ">
          {children}
        </div>
      </motion.div>
    </>
  );
}

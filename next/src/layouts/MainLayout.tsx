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
      <motion.div exit={{ opacity: 0 }}>
        <div className=" mt-20 container px-5 col-center">{children}</div>
      </motion.div>
    </>
  );
}

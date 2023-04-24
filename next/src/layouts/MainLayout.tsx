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
      <motion.div className="col-center mt-20" exit={{ opacity: 0 }}>
        <div className="container px-5 col-center">{children}</div>
      </motion.div>
    </>
  );
}

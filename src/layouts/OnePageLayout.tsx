import { motion } from "framer-motion";
import Header from "./Header";
import { useAppSelector } from "@toolkit/hook";
import Alert from "@components/Alert";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isSidebar = useAppSelector((state) => state.sidebar.isSidebar);
  const isAlert = useAppSelector((state) => state.alert.isAlert);

  return (
    <>
      <Header />

      {isAlert && <Alert />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="col-center container mx-auto h-screen w-screen px-4 pt-16 ">
          {children}
        </div>
      </motion.div>
    </>
  );
}

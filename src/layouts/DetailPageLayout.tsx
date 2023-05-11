import { motion } from "framer-motion";
import Header from "./Header";
import Alert from "@components/Alert";
import { useAppSelector } from "@toolkit/hook";
import Chat from "@components/Chat";

export default function DetailPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAlert = useAppSelector((state) => state.alert.isAlert);
  return (
    <>
      {/* 해더 영역 */}
      <Header />

      {/* Alert */}
      {isAlert && <Alert />}

      {/* 채팅창 */}
      <Chat />

      {/* 메인 영역 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="ol-center container mx-auto px-0 pt-20 md:px-4">
          {children}
        </div>
      </motion.div>
    </>
  );
}

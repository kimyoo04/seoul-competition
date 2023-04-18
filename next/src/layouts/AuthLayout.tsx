import { motion } from "framer-motion";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <div className="w-screen h-screen col-center">{children}</div>
    </motion.div>
  );
}

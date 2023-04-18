import { motion } from "framer-motion";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </motion.div>
  );
}

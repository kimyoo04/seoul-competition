import { motion } from "framer-motion";
import React from "react";

export default function ButtonWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileTap={{
        scale: 0.8,
        type: "spring",
        transition: { duration: 0.05 },
      }}
    >
      {children}
    </motion.div>
  );
}

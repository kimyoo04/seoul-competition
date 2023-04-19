import { motion } from "framer-motion";

const loadingCircleVariants = {
  start: {
    rotate: 0,
  },
  end: {
    rotate: 360,
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export default function Loading() {
  if (typeof window !== "undefined") {
    window.document.body.style.overflow = "hidden";
  }

  return (
    <motion.div
      transition={{ duration: 0.4 }}
      className="flex items-center justify-center h-screen"
      variants={loadingCircleVariants}
      animate="end"
      initial="start"
    >
      <div className="w-10 h-10 border-4 border-t-4 border-gray-200 rounded-full border-t-blue-500"></div>
    </motion.div>
  );
}

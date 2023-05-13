import Link from "next/link";
import { motion } from "framer-motion";

export default function CreateButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.1, transition: { duration: 0.05 } }}
      whileTap={{
        scale: 0.8,
      }}
      className="row-center fixed bottom-6 left-0 right-0 z-10 mx-auto h-10 w-20 rounded-full bg-main_color shadow-md"
    >
      <Link href="/posts/new">
        <i className="ri-pencil-line text-2xl  text-font_white"></i>
      </Link>
    </motion.button>
  );
}

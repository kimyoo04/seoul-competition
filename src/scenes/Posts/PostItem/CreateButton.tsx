import Link from "next/link";
import { motion } from "framer-motion";

export default function CreateButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.1, transition: { duration: 0.05 } }}
      whileTap={{
        scale: 0.8,
      }}
      className="row-center fixed  bottom-4 left-16 z-10 mx-auto h-12 w-12 rounded-full bg-main_color shadow-md"
    >
      <Link href="/posts/new">
        <i className="ri-pencil-line text-2xl  text-font_white"></i>
      </Link>
    </motion.button>
  );
}

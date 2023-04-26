import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href={"/"} className="relative h-[32px]">
      <motion.div
        whileTap={{
          scale: 0.9,
        }}
        className="absolute w-[72px] z-20"
      >
        <span className="text-2xl font-semibold text-main_color dark:text-main_color">
          Senior+
        </span>
      </motion.div>
    </Link>
  );
}

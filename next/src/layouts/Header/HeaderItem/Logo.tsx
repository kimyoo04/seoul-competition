import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href={""} className="relative h-[32px]">
      <div className="absolute left-0 top-2">
        <div className="top-[8px] h-[1px] w-full bg-light_gray_1 dark:bg-night_gray_1" />
        <div className="w-[72px] z-20 h-4"></div>
        <div className="bottom-[8px] h-[1px] w-full bg-light_gray_1 dark:bg-night_gray_1" />
      </div>
      <motion.div
        whileTap={{
          scale: 0.9,
        }}
        className="absolute w-[72px] z-20"
      >
        <span className="text-2xl font-bold text-main_color dark:text-main_color">
        Senior+
        </span>
      </motion.div>
    </Link>
  );
}

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href={"/"}>
      <motion.div
        whileTap={{
          scale: 0.9,
        }}
        className="col-center w-[72px] h-8"
      >
        <span className="pb-[4px] leading-7 text-xl font-bold text-main_color dark:text-main_color">
          Senior+
        </span>
      </motion.div>
    </Link>
  );
}

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href={"/"}>
      <motion.div
        whileTap={{
          scale: 0.9,
        }}
        className="col-center"
      >
        <span className="pb-[6px] text-3xl font-bold text-main_color dark:text-main_color">
          Senior+
        </span>
      </motion.div>
    </Link>
  );
}

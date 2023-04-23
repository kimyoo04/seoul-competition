import NavLink from "./NavLink";

import { motion } from "framer-motion";
import { staggerContainer } from "@util/variants/container";

// isClicked를 기준으로 Menu 토글
export default function NavLinks() {
  return (
    <motion.nav
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`w-48 gap-4 col-start sm:mt-auto`}
    >
      <NavLink linkpath={"home"} name={"Home"} delay={0.1} />
      <NavLink linkpath={"posts"} name={"Posts"} delay={0.2} />
      <NavLink linkpath={"educations"} name={"Educations"} delay={0.3} />
    </motion.nav>
  );
}

import NavLink from "./NavLink";
import { motion } from "framer-motion";
import { staggerContainer } from "@util/variants/container";
import { sidebarActions } from "@features/sidebar/sidebarSlice";
import { useAppDispatch } from "@toolkit/hook";

// isClicked를 기준으로 Menu 토글
export default function NavLinks() {
  const dispatch = useAppDispatch();
  return (
    <motion.nav
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`w-48 gap-4 col-start h-full my-auto`}
    >
      <div onClick={() => dispatch(sidebarActions.toggleSidebar())}>
        <NavLink linkpath={""} name={"Home"} delay={0.1} />
      </div>
      <div onClick={() => dispatch(sidebarActions.toggleSidebar())}>
        <NavLink linkpath={"posts"} name={"Posts"} delay={0.2} />
      </div>
      <div onClick={() => dispatch(sidebarActions.toggleSidebar())}>
        <NavLink linkpath={"educations"} name={"Educations"} delay={0.3} />
      </div>
    </motion.nav>
  );


}

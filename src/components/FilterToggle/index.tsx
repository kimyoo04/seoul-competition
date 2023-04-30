import React from "react";
import { useAppDispatch } from "@toolkit/hook";
import { sidebarActions } from "@features/sidebar/sidebarSlice";

import { motion } from "framer-motion";

export default function FilterToggle() {
  const dispatch = useAppDispatch();

  return (
    <motion.button
      className="col-start fixed -right-6 bottom-40 h-40 w-16 rounded-l-2xl bg-main_color pl-2"
      whileHover={{ x: -8 }}
      onClick={() => dispatch(sidebarActions.toggleSidebar())}
    >
      <i className="ri-equalizer-line text-2xl text-font_white" />
      <span className="w-6 text-lg font-bold text-font_white">골라보기</span>
    </motion.button>
  );
}

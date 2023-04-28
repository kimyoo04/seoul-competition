import React from "react";
import { useAppDispatch } from "@toolkit/hook";
import { sidebarActions } from "@features/sidebar/sidebarSlice";

import { motion } from "framer-motion";

export default function FilterToggle() {
  const dispatch = useAppDispatch();

  return (
    <motion.button
      className="col-start fixed -right-4 top-40 h-40 w-16 rounded-l-2xl bg-main_color px-3"
      whileHover={{ x: -15 }}
      onClick={() => dispatch(sidebarActions.toggleSidebar())}
    >
      <button>
        <i className="ri-equalizer-line text-2xl text-font_white" />
      </button>
      <span className="ml-[2.5px] w-6 text-xl font-bold text-font_white">
        골라보기
      </span>
    </motion.button>
  );
}

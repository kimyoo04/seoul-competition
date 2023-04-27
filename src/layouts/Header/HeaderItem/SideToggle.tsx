import React from "react";
import { useAppDispatch } from "@toolkit/hook";
import { sidebarActions } from "@features/sidebar/sidebarSlice";

import ButtonWrapper from "@components/Animation/ButtonWrapper";
import { motion } from "framer-motion";

export default function SideToggle() {
  const dispatch = useAppDispatch();

  return (
    <ButtonWrapper>
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.05 },
        }}
      >
        <button
          className="w-8 h-8 col-center"
          onClick={() => dispatch(sidebarActions.toggleSidebar())}
        >
          <i className="text-3xl ri-menu-3-line text-main_color" />
        </button>
      </motion.div>
    </ButtonWrapper>
  );
}

import { motion } from "framer-motion";

import NavLinks from "./NavLinks";
import Modal from "../HeaderItem/Modal";
import { Dispatch } from "react";

interface IIsOnOff {
  setIsClicked: Dispatch<boolean>;
}

export default function Menu({ setIsClicked }: IIsOnOff) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative z-40 w-screen h-screen col-end"
      >
        <Modal setIsClicked={setIsClicked}>
          {/* 네비게이션 버튼들 */}
          <NavLinks />
        </Modal>
      </motion.div>
    </>
  );
}

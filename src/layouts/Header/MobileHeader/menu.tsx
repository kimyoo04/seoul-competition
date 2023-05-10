import { useRouter } from "next/router";
import { motion } from "framer-motion";

import ButtonWrapper from "@components/Animation/ButtonWrapper";
import Link from "next/link";

export default function Menu() {
  const router = useRouter();
  const pathsArr = router.asPath.split("/");

  return (
    <>
      <motion.div
        key={"menu"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 top-16 w-screen bg-white shadow-sm"
      >
        <div className="col-center border-t border-main_color/30">
          <Link
            href={"/educations"}
            className="col-center w-full border-b border-main_color/30 py-2"
          >
            <ButtonWrapper>
              <span
                className={`text-lg ${
                  pathsArr.includes("educations")
                    ? "font-bold text-main_color"
                    : ""
                }`}
              >
                교육 정보
              </span>
            </ButtonWrapper>
          </Link>
          <Link
            href={"/posts"}
            className="col-center w-full border-b border-main_color/30 py-2"
          >
            <ButtonWrapper>
              <span
                className={`text-lg ${
                  pathsArr.includes("posts") ? "font-bold text-main_color" : ""
                }`}
              >
                자유게시판
              </span>
            </ButtonWrapper>
          </Link>
          <Link
            href={"/chatbot"}
            className="col-center w-full border-b border-main_color/30 py-2"
          >
            <ButtonWrapper>
              <span
                className={`text-lg ${
                  pathsArr.includes("chatbot")
                    ? "font-bold text-main_color"
                    : ""
                }`}
              >
                챗봇
              </span>
            </ButtonWrapper>
          </Link>
        </div>
      </motion.div>
    </>
  );
}

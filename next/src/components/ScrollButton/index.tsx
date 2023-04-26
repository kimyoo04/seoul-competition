import { scrollTo } from "@util/variants";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

export default function ScrollButton() {
  const scrollTopAni = useAnimation();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (position) => {
    if (
      position !== 0 &&
      position + window.innerHeight + 20 < document.body.scrollHeight
    ) {
      scrollTopAni.start("middle");
    } else if (position !== 0) {
      scrollTopAni.start("middle");
    } else {
      scrollTopAni.start("top");
    }
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <motion.button
      variants={scrollTo.top}
      animate={scrollTopAni}
      whileHover={{ scale: 1.1, transition: { duration: 0.05 } }}
      whileTap={{
        scale: 0.8,
      }}
      onClick={() => scrollToTop()}
      className="fixed left-0 right-0 z-10 w-8 h-8 mx-auto rounded-full shadow-md bg-main_color bottom-6 row-center"
    >
      <i className="text-3xl text-font_white ri-arrow-up-s-line"></i>
    </motion.button>
  );
}

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
      whileHover={{ scale: 1.1 }}
      whileTap={{
        scale: 0.8,
      }}
      onClick={() => scrollToTop()}
      className="col-center group fixed bottom-20 right-4 z-10 h-10 w-10 rounded-full bg-white shadow-sm shadow-gray-400 transition-all "
    >
      <i className="ri-arrow-up-s-line text-3xl text-font_black transition-all "></i>
    </motion.button>
  );
}

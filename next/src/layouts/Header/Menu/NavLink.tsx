import { colorVariants } from "@util/Theme/colorVariants";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { fadeIn } from "@util/variants";

export default function NavLink({
  linkpath,
  name,
  delay,
}: {
  linkpath: string;
  name: string;
  delay: number;
}) {
  const router = useRouter();
  const link = `/${linkpath}`;

  return (
    <motion.div variants={fadeIn("left", "easeInOut", delay, 0.4)}>
      <Link href={link} className="group">
        <div
          className={`block w-8 h-[1px] transition-all duration-500 group-hover:w-48 ${
            "/home" === router.pathname && "/home" === link
              ? colorVariants.maincolor.borderActive
              : "/posts" === router.pathname && "/posts" === link
              ? colorVariants.maincolor.borderActive
              : router.pathname.includes("/educations") && "/educations" === link
              ? colorVariants.maincolor.borderActive
              : null
          } ${
            "/home" === link
              ? colorVariants.maincolor.borderHover
              : "/posts" === link
              ? colorVariants.maincolor.borderHover
              : "/educations" === link
              ? colorVariants.maincolor.borderHover
              : null
          }`}
        />
        <span
          className={`text-4xl transition-all duration-500  ${
            "/home" === router.pathname && "/home" === link
              ? colorVariants.maincolor.textActive
              : "/posts" === router.pathname && "/posts" === link
              ? colorVariants.maincolor.textActive
              : router.pathname.includes("/educations") &&
                "/educations" === link
              ? colorVariants.maincolor.textActive
              : null
          } ${
            "/home" === link
              ? colorVariants.maincolor.textHover
              : "/posts" === link
              ? colorVariants.maincolor.textHover
              : "/educations" === link
              ? colorVariants.maincolor.textHover
              : "/contactus" === link
              ? colorVariants.maincolor.textHover
              : null
          }`}
        >
          {name}
        </span>
        <div
          className={`block w-8 h-[1px] transition-all duration-500 group-hover:w-48 ${
            "/home" === router.pathname && "/home" === link
              ? colorVariants.maincolor.borderActive
              : "/posts" === router.pathname && "/posts" === link
              ? colorVariants.maincolor.borderActive
              : router.pathname.includes("/educations") &&
                "/educations" === link
              ? colorVariants.maincolor.borderActive
              : "/contactus" === router.pathname && "/contactus" === link
              ? colorVariants.maincolor.borderActive
              : null
          } ${
            "/home" === link
              ? colorVariants.maincolor.borderHover
              : "/posts" === link
              ? colorVariants.maincolor.borderHover
              : "/educations" === link
              ? colorVariants.maincolor.borderHover
              : "/contactus" === link
              ? colorVariants.maincolor.borderHover
              : null
          }`}
        />
      </Link>
    </motion.div>
  );
}

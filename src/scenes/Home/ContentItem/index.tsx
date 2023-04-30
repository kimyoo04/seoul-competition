import Link from "next/link";
import { motion } from "framer-motion";

interface IContent {
  title: string;
  link: string;
  content: string;
  img: string;
}

export default function Content({ data }: { data: IContent }) {
  return (
    <Link href={`/${data.link}`} className="h-full w-full">
      <motion.div
        className="flex w-full items-center justify-between gap-8 rounded-2xl bg-main_color/5 p-4 shadow-md md:w-full md:flex-col md:items-start"
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.05 },
        }}
        whileTap={{
          scale: 0.9,
          type: "spring",
          transition: { duration: 0.05 },
        }}
      >
        {/* 콘텐츠의 제목과 내용 */}
        <div className="col-start gap-2">
          <span className="text-xl font-bold">{data.title}</span>
          <span className="w-48 sm:w-full md:h-16 lg:h-8">{data.content}</span>
        </div>

        {/* 콘텐츠 이미지 */}
        <div className="col-center h-28 w-28 bg-slate-300 md:h-52 md:w-full lg:h-64 xl:h-80">
          {data.img}
        </div>
      </motion.div>
    </Link>
  );
}

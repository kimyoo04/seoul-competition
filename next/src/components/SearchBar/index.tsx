import Link from "next/link";

export default function SearchBar() {
  return (
    <Link href={"/search"}>
      <div className="relative w-full py-4 group">
        {/* Search Bar 영역 */}
        <div className="absolute w-full h-8 pl-4 transition-all bg-white border rounded-full group-hover:border-main_color"></div>

        {/* Search Bar 아이콘 */}
        <button className="absolute text-2xl font-bold bottom-4 left-4 col-center ">
          <i className=" ri-search-line group-hover:text-main_color"></i>
        </button>

        {/* 더미 div 태그 */}
        <div className="w-full h-8 dummy"> </div>
      </div>
    </Link>
  );
}

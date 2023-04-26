import Logo from "./HeaderItem/Logo";
import SideToggle from "./HeaderItem/SideToggle";

export default function Header() {
  return (
    <>
      <div className="fixed top-0 z-40 w-full h-16 shadow-sm bg-white">
        <header className="text-gray-600 body-font">
          <div className="container flex flex-wrap items-center justify-between gap-4 p-4 mx-auto">
            <Logo />
            <SideToggle />
          </div>
        </header>
      </div>
    </>
  );
}

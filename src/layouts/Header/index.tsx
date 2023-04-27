import Logo from "./HeaderItem/Logo";
import SideToggle from "./HeaderItem/SideToggle";
import SearchLink from "./HeaderItem/SearchLink";

export default function Header() {
  return (
    <>
      <header className="fixed top-0 z-40 w-full bg-white shadow-sm">
        <div className="container flex items-center justify-between h-16 gap-4 px-4 mx-auto">
          <Logo />
          <div className="flex gap-4">
            <SearchLink />
            <SideToggle />
          </div>
        </div>
      </header>
    </>
  );
}

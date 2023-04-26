import Logo from "./HeaderItem/Logo";
import SideToggle from "./HeaderItem/SideToggle";

export default function Header() {
  return (
    <header className="fixed top-0 z-40 w-full shadow-sm bg-white">
      <div className="container flex h-16 items-center justify-between gap-4 px-4 mx-auto">
        <Logo />
        <SideToggle />
      </div>
    </header>
  );
}

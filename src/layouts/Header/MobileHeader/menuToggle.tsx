import { Dispatch, SetStateAction } from "react";

export default function MenuToggle({
  setShowMenu,
}: {
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <button
      className="col-center h-8 w-8"
      onClick={() => setShowMenu((prev) => !prev)}
    >
      <i className="ri-menu-3-line text-2xl font-bold text-main_color" />
    </button>
  );
}

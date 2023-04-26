import React from "react";
import { useAppDispatch } from "@toolkit/hook";
import { sidebarActions } from "@features/sidebar/sidebarSlice";

export default function SideToggle() {
  const dispatch = useAppDispatch();

  return (
    <button
      className="w-8 h-8 col-center"
      onClick={() => dispatch(sidebarActions.toggleSidebar())}
    >
      <i className="text-xl font-semibold ri-menu-3-line" />
    </button>
  );
}

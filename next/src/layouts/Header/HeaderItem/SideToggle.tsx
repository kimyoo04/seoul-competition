import React from "react";
import { useAppDispatch } from "@toolkit/hook";
import { sidebarActions } from "@features/sidebar/sidebarSlice";
import ButtonWrapper from "@components/Animation/ButtonWrapper";

export default function SideToggle() {
  const dispatch = useAppDispatch();

  return (
    <div className="w-[72px] h-8 col-end">
      <ButtonWrapper>
    <button
      className="w-6 h-6 col-center rounded-2xl shadow-md"
      onClick={() => dispatch(sidebarActions.toggleSidebar())}
    >
      <i className="text-xl text-main_color ri-menu-3-line" />
    </button>
    </ButtonWrapper>
    </div>
  );
}

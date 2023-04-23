import { Dispatch, ReactElement } from "react";

interface IIsonOff {
  setIsClicked: Dispatch<boolean>;
  children: ReactElement;
}

export default function Modal({ setIsClicked, children }: IIsonOff) {
  return (
    <div
      className="fixed inset-y-0 right-0 flex flex-col w-64 max-w-md bg-white shadow-lg z-50"
      onClick={() => setIsClicked(false)}
    >
      <div className="relative flex-1 p-8">
        {/* 닫기 버튼 */}
        <button
          className="absolute text-gray-400 top-4 right-4 hover:text-gray-500"
          onClick={() => setIsClicked(false)}
        >
          <i className="text-xl ri-close-line" />
        </button>

        {/* Modal의 Children = NavLinks */}
        {children}
      </div>
    </div>
  );
}

import { interests } from "@components/UserForm/userFormData";
import { useState } from "react";
import InterestToggleList from "./InterestToggleList";

export default function InterestToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="col-center relative">
      <button
        className="w-1/2 rounded-t-md bg-main_color/90 text-font_white shadow-md"
        onClick={handleToggle}
      >
        더보기
      </button>
      {isOpen && (
        <ul className="col-center z-1 absolute top-6 w-1/2 rounded-b-md bg-white shadow-md">
          <li className="col-center w-40 border-b">전체</li>
          {interests.map((interest, indx) => (
            <InterestToggleList key={indx + interest} interest={interest} />
          ))}
        </ul>
      )}
    </div>
  );
}

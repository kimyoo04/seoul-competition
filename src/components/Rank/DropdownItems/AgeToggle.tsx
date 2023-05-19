import { useState } from "react";
import AgeToggleList from "./AgeToggleList";

export default function AgeToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const agesMinMax = [
    { age: "49세 이하", minAge: 0, maxAge: 49 },
    { age: "50 - 54세", minAge: 50, maxAge: 54 },
    { age: "55 - 59세", minAge: 55, maxAge: 59 },
    { age: "60 - 64세", minAge: 60, maxAge: 64 },
    { age: "65 - 69세", minAge: 65, maxAge: 69 },
    { age: "70세 이상", minAge: 70, maxAge: 100 },
  ];

  return (
    <div className="col-center relative">
      <button
        className="w-1/2 rounded-t-md bg-main_color/90 text-font_white shadow-md"
        onClick={handleToggle}
      >
        더보기
        <span></span>
      </button>
      {isOpen && (
        <ul className="col-center z-1 absolute top-6 w-1/2  rounded-b-md bg-white shadow-md">
          <li className="col-center w-40 border-b">전체</li>
          {agesMinMax.map((data, indx) => (
            <AgeToggleList key={indx + data.age} age={data.age} />
          ))}
        </ul>
      )}
    </div>
  );
}

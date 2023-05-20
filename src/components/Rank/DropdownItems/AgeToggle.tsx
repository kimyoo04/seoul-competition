import AgeToggleList from "./AgeToggleList";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@toolkit/hook";
import { ageActions } from "@features/rank/ageSlice";
import { readKeywordAgeRank } from "@api/rank/readKeywordAgeRank";
import { IAgesMinMax } from "@type/rank";

export default function AgeToggle() {
  const dispatch = useDispatch();
  const { isOpen, selectedAge } = useAppSelector((state) => state.age);

  const agesMinMax = [
    { age: "49세 이하", minAge: 0, maxAge: 49 },
    { age: "50 - 54세", minAge: 50, maxAge: 54 },
    { age: "55 - 59세", minAge: 55, maxAge: 59 },
    { age: "60 - 64세", minAge: 60, maxAge: 64 },
    { age: "65 - 69세", minAge: 65, maxAge: 69 },
    { age: "70세 이상", minAge: 70, maxAge: 100 },
  ];

  const handleSelectAge = (data: IAgesMinMax) => {
    dispatch(ageActions.selectAge(data.age));
    readKeywordAgeRank({ minAge: data.minAge, maxAge: data.maxAge });
  };

  return (
    <div className="col-center relative">
      <button
        className="w-1/2 rounded-t-md bg-main_color/90 text-font_white shadow-md"
        onClick={() => dispatch(ageActions.toggleOpen())}
      >
        <>{selectedAge || "연령대별로 더보기"}</>
      </button>
      {isOpen && (
        <ul className="col-center z-1 absolute top-6 w-1/2  rounded-b-md bg-white shadow-md">
          {agesMinMax.map((data, indx) => (
            <AgeToggleList
              key={indx + data.age}
              data={data}
              onSelect={handleSelectAge}
            />
          ))}
          <li
            onClick={() => dispatch(ageActions.selectTotal("전체"))}
            className="col-center w-40 border-b"
          >
            전체
          </li>
        </ul>
      )}
    </div>
  );
}

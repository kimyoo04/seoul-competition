import { useDispatch } from "react-redux";
import { useAppSelector } from "@toolkit/hook";
import { ageActions } from "@features/rank/ageSlice";
import { ageDataArr } from "@constants/userForm/userFormData";

export default function AgeDropDown() {
  const dispatch = useDispatch();
  const { isOpen, selectedageStr } = useAppSelector((state) => state.age);

  return (
    <div className="col-center relative">
      {/* toggle button */}
      <button
        className="w-1/2 rounded-t-md bg-main_color/90 text-font_white shadow-md"
        onClick={() => dispatch(ageActions.toggleOpen())}
      >
        {selectedageStr === "" ? "연령대별로 더보기" : selectedageStr}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul className="col-center z-1 absolute top-6 w-1/2  rounded-b-md bg-white shadow-md">
          {ageDataArr.map((ageData, indx) => (
            <li
              key={indx + ageData.age}
              className="col-center w-40 border-b"
              onClick={() => dispatch(ageActions.selectAge({ ...ageData }))}
            >
              {ageData.ageStr}
            </li>
          ))}

          <li
            className="col-center w-40 border-b"
            onClick={() => dispatch(ageActions.selectTotal())}
          >
            전체
          </li>
        </ul>
      )}
    </div>
  );
}

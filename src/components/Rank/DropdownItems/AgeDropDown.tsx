import { useDispatch } from "react-redux";
import { useAppSelector } from "@toolkit/hook";
import { ageActions } from "@features/rank/agesSlice";
import { agesDataArr } from "@constants/userForm/userFormData";

export default function AgeDropDown() {
  const dispatch = useDispatch();
  const { isOpen, selectedAgesStr } = useAppSelector((state) => state.ages);

  return (
    <div className="col-center relative">
      {/* toggle button */}
      <button
        className="w-1/2 rounded-t-md bg-main_color/90 text-font_white shadow-md"
        onClick={() => dispatch(ageActions.toggleOpen())}
      >
        {selectedAgesStr === "" ? "연령대별로 더보기" : selectedAgesStr}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul className="col-center z-1 absolute top-6 w-1/2  rounded-b-md bg-white shadow-md">
          {agesDataArr.map((agesData, indx) => (
            <li
              key={indx + agesData.ages}
              className="col-center w-40 border-b"
              onClick={() => dispatch(ageActions.selectAge({ ...agesData }))}
            >
              {agesData.agesStr}
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

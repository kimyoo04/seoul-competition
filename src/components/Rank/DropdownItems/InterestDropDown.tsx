import { interests } from "@constants/userForm/userFormData";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@toolkit/hook";
import { interestActions } from "@features/rank/interestSlice";

export default function InterestDropDown() {
  const dispatch = useDispatch();
  const { isOpen, selectedInterest } = useAppSelector(
    (state) => state.interest
  );

  return (
    <div className="col-center relative">
      {/* toggle button */}
      <button
        className="w-1/2 rounded-t-md bg-main_color/90 text-font_white shadow-md"
        onClick={() => dispatch(interestActions.toggleOpen())}
      >
        {selectedInterest === "" ? "관심사별로 더보기" : selectedInterest}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul className="col-center absolute top-6 w-1/2 rounded-b-md bg-white shadow-md">
          {interests.map((interest, indx) => (
            <li
              key={indx + interest}
              className="col-center w-40 border-b"
              onClick={() => dispatch(interestActions.selectInterest(interest))}
            >
              {interest}
            </li>
          ))}

          <li
            className="col-center w-40 border-b"
            onClick={() => dispatch(interestActions.selectTotal())}
          >
            전체
          </li>
        </ul>
      )}
    </div>
  );
}

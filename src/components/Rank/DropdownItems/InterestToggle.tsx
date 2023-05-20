import { interests } from "@components/UserForm/userFormData";
import InterestToggleList from "./InterestToggleList";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@toolkit/hook";
import { interestActions } from "@features/rank/interestSlice";

export default function InterestToggle() {
  const dispatch = useDispatch();
  const { isOpen, selectedInterest } = useAppSelector(
    (state) => state.interest
  );

  return (
    <div className="col-center relative">
      <button
        className="w-1/2 rounded-t-md bg-main_color/90 text-font_white shadow-md"
        onClick={() => dispatch(interestActions.toggleOpen())}
      >
        {selectedInterest || "관심사별로 더보기"}
      </button>
      {isOpen && (
        <ul className="col-center absolute top-6 w-1/2 rounded-b-md bg-white shadow-md">
          {interests.map((interest, indx) => (
            <InterestToggleList
              key={indx + interest}
              interest={interest}
              onSelect={() =>
                dispatch(interestActions.selectInterest(interest))
              }
            />
          ))}
          <li
            onClick={() => dispatch(interestActions.selectTotal("전체"))}
            className="col-center w-40 border-b"
          >
            전체
          </li>
        </ul>
      )}
    </div>
  );
}

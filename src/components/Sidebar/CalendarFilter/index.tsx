import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";

import "react-datepicker/dist/react-datepicker.css";

import { filterActions } from "@features/filter/filterSlice";
import { useAppDispatch } from "@toolkit/hook";
import { useState } from "react";
import { getBarDate } from "@util/dateTime";

export default function CalendarFilter() {
  const dispatch = useAppDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="col-center z-0 w-full ">
      <span className="mb-2 font-bold text-font_white">기간 탐색</span>

      <div className="row-start w-full ">
        <div className="col-center w-full pr-1">
          <DatePicker
            locale={ko}
            selected={startDate}
            onChange={(date) => {
              if (date) {
                setStartDate(date);
                dispatch(
                  filterActions.setBothDate({
                    startDate: getBarDate(date),
                    endDate: getBarDate(endDate),
                  })
                );
              }
            }}
            startDate={startDate}
            endDate={endDate}
            selectsStart
            maxDate={endDate}
            dateFormat="yyyy-MM-dd"
            className="textfield m-0 h-8 w-full text-center font-bold shadow-none"
          />
        </div>
        <span className="undraggable text-xl font-bold text-font_white">-</span>
        <div className="col-center w-full pl-1">
          <DatePicker
            locale={ko}
            selected={endDate}
            onChange={(date) => {
              if (date) {
                setEndDate(date);
                dispatch(
                  filterActions.setBothDate({
                    startDate: getBarDate(startDate),
                    endDate: getBarDate(date),
                  })
                );
              }
            }}
            startDate={startDate}
            endDate={endDate}
            selectsEnd
            minDate={startDate}
            maxDate={new Date()}
            dateFormat="yyyy-MM-dd"
            className="textfield m-0 h-8 w-full text-center font-bold shadow-none"
          />
        </div>
      </div>
    </div>
  );
}

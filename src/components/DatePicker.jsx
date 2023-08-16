/* eslint-disable react/prop-types */
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "../assets/images/calendar.svg";

export default function DatePicker({
  placeholder,
  startDate,
  endDate,
  selectsEnd,
  setDate,
  selectsStart,
}) {
  return (
    <div className="input--container">
      <div>
        <img src={CalendarIcon} />
        <ReactDatePicker
          endDate={endDate}
          onChange={setDate}
          startDate={startDate}
          selectsEnd={selectsEnd}
          dateFormat={"dd/MM/yyyy"}
          selectsStart={selectsStart}
          placeholderText={placeholder}
          selected={
            selectsStart ? startDate : endDate < startDate ? startDate : endDate
          }
          minDate={selectsStart ? new Date() : startDate}
        />
      </div>
    </div>
  );
}

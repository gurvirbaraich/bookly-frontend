/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./HeroBookingForm.css";
import IconInput from "../components/IconInput";
import UserIcon from "../assets/images/user.svg";
import DatePicker from "../components/DatePicker";
import LocationPicker from "../components/LocationPicker";

export default function HeroBookingForm({ state, stickToBottom }) {
  const navigate = useNavigate();
  const [guests, setGuests] = useState(state?.guests ?? null);
  const [location, setLocation] = useState(state?.location ?? null);
  const [endDate, setEndDate] = useState(state?.endDate ?? new Date());
  const [startDate, setStartDate] = useState(state?.startDate ?? new Date());

  const searchRooms = function () {
    const payload = {
      guests,
      endDate,
      location,
      startDate,
    };

    navigate("/discover", {
      state: payload,
    });
  };

  return (
    <div className="hero--form" style={{ transform: `translateY(${stickToBottom ? "50%" : "-50%"})` }}>
      <LocationPicker defaultLocation={location} onLocationChange={setLocation} />
      <DatePicker
        endDate={endDate}
        startDate={startDate}
        selectsStart
        setDate={setStartDate}
        placeholder={"Check in date!"}
      />
      <DatePicker
        endDate={endDate}
        startDate={startDate}
        selectsEnd
        setDate={setEndDate}
        placeholder={"Check out date!"}
      />
      <IconInput
        min="1"
        type="number"
        icon={UserIcon}
        defaultValue={guests}
        onInputChange={setGuests}
        placeholder="Number of guests."
      />
      <button onClick={searchRooms}>Search</button>
    </div>
  );
}

import { useState } from "react";

import "./Home.css";
import IconInput from "../components/IconInput";
import DatePicker from "../components/DatePicker";
import UserIcon from "../assets/images/user.svg";
import LocationPicker from "../components/LocationPicker";
import FeaturedLocations from "../components/FeaturedLocations";

export default function Home() {
  const [guests, setGuests] = useState(null);
  const [location, setLocation] = useState(null);
  const [endDate, setEndDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  const searchRooms = function () {
    const payload = {
      guests,
      location,
      endDate: endDate.toDateString(),
      startDate: startDate.toDateString(),
    };

    console.table(payload);
  };

  return (
    <>
      <section className="hero--container">
        <div className="hero--banner">
          <h2>Enjoy your dream vacation</h2>
          <p>
            Plan and book our perfect trip with expert advice, travel tips,
            destination information and inspiration from us.
          </p>
        </div>
        <div className="hero--form">
          <LocationPicker onLocationChange={setLocation} />
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
            onInputChange={setGuests}
            placeholder="Number of guests."
          />
          <button onClick={searchRooms}>Search</button>
        </div>
      </section>
      <section className="featured--locations">
        <div>
          <h2>Enjoy your dream vacation</h2>
          <p>
            Plan and book our perfect trip with expert advice, travel tips,
            destination information and inspiration from us.
          </p>
        </div>
        <FeaturedLocations />
      </section>
    </>
  );
}

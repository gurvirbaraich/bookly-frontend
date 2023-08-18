/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./Discover.css";
import HeroBookingForm from "../components/HeroBookingForm";

export default function Discover() {
  const location = useLocation();
  const [hotels, setHotels] = useState([]);

  useEffect(
    function () {
      if (!location.state) return;

      const getHotelsFromServer = async function () {
        const request = await fetch(
          "http://localhost:4000/api/hotels/" + location.state.location
        );
        const hotels = await request.json();

        setHotels(hotels);
      };

      getHotelsFromServer();
    },
    [location.state]
  );

  return (
    <>
      <section className="form--container">
        <HeroBookingForm state={{ ...location.state }} stickToBottom={true} />
      </section>
      <section className="main--container">
        <section>
          {/* TODO: implement sidebar, with filters */}
        </section>
        <section>
          {hotels.length < 1 ? (
            location?.state?.location == undefined ? (
              "No hotels found..."
            ) : (
              "Loading hotels..."
            )
          ) : (
            <SearchResults
              hotels={hotels}
              location={location?.state?.location}
            />
          )}
        </section>
      </section>
    </>
  );
}

function SearchResults({ location, hotels }) {
  return (
    <h2>
      {location} — {hotels.length} hotels found.

      {/* TODO: implement sorting */}
      {/* TODO: display results */}
    </h2>
  );
}

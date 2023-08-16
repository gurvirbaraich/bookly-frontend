/* eslint-disable react/prop-types */
import LocationIcon from "../assets/images/location.svg";
import { useEffect, useRef, useState } from "react";

export default function LocationPicker({ onLocationChange }) {
  if (!onLocationChange) {
    onLocationChange = function () {};
  }

  const locationInputRef = useRef();
  const [places, setPlaces] = useState([]);

  const autoCompleteURL =
    "https://api.geoapify.com/v1/geocode/autocomplete?format=json&type=city&apiKey=55b7be14f46d4b179d86757fef09c7ad&text=";

  const autoCompletePlaces = (function () {
    let timeout;

    return (event) => {
      clearTimeout(timeout);
      timeout = setTimeout(async function () {
        if (event.target.value === "") return;
        onLocationChange(locationInputRef.current.value);

        const request = await fetch(autoCompleteURL + event.target.value);
        const json = await request.json();

        setPlaces(json?.results ?? []);
      }, 500);
    };
  })();

  const removeDuplicatePlaces = function () {
    const _places = [];

    const map = places.filter((place) => {
      if (
        _places.includes(
          `${place.address_line1}, ${place.state}, ${place.country}`
        )
      ) {
        return false;
      } else {
        _places.push(
          `${place.address_line1}, ${place.state}, ${place.country}`
        );
        return true;
      }
    });

    return map;
  };

  const selectPlace = (place) => {
    setPlaces([]);

    locationInputRef.current.value = `${place.address_line1}, ${place.state}, ${place.country}`;
    onLocationChange(locationInputRef.current.value);
  };

  useEffect(function () {
    if (!locationInputRef.current) return;

    locationInputRef.current.addEventListener("keyup", autoCompletePlaces);
  }, []);

  return (
    <div className="input--container">
      <div>
        <img src={LocationIcon} />
        <input
          type="text"
          ref={locationInputRef}
          placeholder="Where are you going?"
        />
      </div>
      <ul>
        {removeDuplicatePlaces(places).map((place) => (
          <button onClick={() => selectPlace(place)} key={place.place_id}>
            <li>
              {place.address_line1}, {place.state}, {place.country}
            </li>
          </button>
        ))}
      </ul>
    </div>
  );
}

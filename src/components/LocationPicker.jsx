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
    // getHotels(place.place_id);

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

// eslint-disable-next-line no-unused-vars
const getHotels = async function (placeId) {
  const request = await fetch(
    "https://api.geoapify.com/v2/places?apiKey=55b7be14f46d4b179d86757fef09c7ad&categories=accommodation&filter=place:" +
      placeId
  );

  const json = await request.json();

  json?.features.map(async function (feature) {
    const req = await fetch(
      "https://api.geoapify.com/v2/place-details?apiKey=55b7be14f46d4b179d86757fef09c7ad&id=" +
        feature.properties.place_id
    );

    const { features } = await req.json();

    features.map(async function ({ properties }) {
      const { name, place_id, city, country } = properties;

      const payload = {
        coords: {
          lat: properties.lat,
          lng: properties.lon,
        },

        description: "...",
        address: properties.formatted,
        rating: ((Math.random() * 4) + 1).toFixed(),
        price: (Math.random() * 9999).toFixed(),
        image: "https://source.unsplash.com/random/?Hotel",

        name,
        city,
        country,
        place_id,
      };

      const createHotelRequest = await fetch(
        "http://localhost:4000/api/hotels",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const createHotelResponse = await createHotelRequest.json();

      console.log(createHotelResponse);
    });
  });
};
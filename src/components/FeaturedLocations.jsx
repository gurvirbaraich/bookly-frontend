import { useEffect, useState } from "react";

export default function FeaturedLocations() {
  const [locations, setLocations] = useState([]);

  useEffect(function () {
    const getLocations = async function () {
      const request = await fetch("http://localhost:4000/api/locations/get");
      const json = await request.json();

      setLocations(json.slice(0, 4) ?? []);
    };

    getLocations();
  }, []);

  return (
    <div className="locations--container">
      {locations.map((location) => (
        <div key={location._id}>
          <img src={location.image.url} alt={location.name} />
          <div>{location.name}</div>
        </div>
      ))}
    </div>
  );
}

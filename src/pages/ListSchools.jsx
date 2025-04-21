import React, { useEffect, useState } from "react";
import { getSchools } from "../services/apiSchools";

function ListSchools() {
  const [userLocation, setUserLocation] = useState(null);
  const [schools, setSchools] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setUserLocation({ lat, lng });

        try {
          const schoolList = await getSchools(lat, lng);
          setSchools(schoolList);
        } catch (err) {
          setError("Failed to fetch schools");
          console.error(err);
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setError("Location access denied");
        setLoading(false);
        console.error(err);
      }
    );
  }, []);

  if (isLoading)
    return <div className="text-center mt-10">Loading schools...</div>;

  if (error)
    return (
      <div className="text-center text-red-500 mt-10">{error.message}</div>
    );

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Nearby Schools</h1>

      {!userLocation && (
        <div className="text-yellow-600 text-center mb-4">
          Getting your location...
        </div>
      )}

      <ul className="space-y-4">
        {schools.map((school) => (
          <li
            key={school.id}
            className="p-4 rounded-xl shadow bg-white border hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{school.name}</h2>
            <p className="text-gray-600">{school.address}</p>
            <p className="text-sm text-gray-500">
              {school.distance.toFixed(2)} km away
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListSchools;

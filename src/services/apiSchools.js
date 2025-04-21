import supabase from "./supabase";

function calcDistance(userLat, userLng, lat, lng) {
  const dx = Math.abs(lat - userLat);
  const dy = Math.abs(lng - userLng);
  return Math.sqrt(dx * dx + dy * dy);
}

export async function getSchools(lat, lng) {
  const { data: Schools, error } = await supabase.from("Schools").select("*");

  if (error) {
    throw new Error("Something went wrong while trying to fetch schools");
  }

  return Schools.map((school) => ({
    ...school,
    distance: calcDistance(lat, lng, school.latitude, school.longitude),
  })).sort((a, b) => a.distance - b.distance);
}

export async function addSchool({ name, address, latitude, longitude }) {
  if (isNaN(latitude) || isNaN(longitude)) {
    throw new Error("Latitude and longitude must be numbers.");
  }

  if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
    throw new Error(
      "Latitude must be between -90 and 90, and Longitude must be between -180 and 180."
    );
  }

  const { data, error } = await supabase
    .from("Schools")
    .insert([
      {
        name: name,
        address: address,
        latitude: latitude,
        longitude: longitude,
      },
    ])
    .select();

  if (error) {
    throw new Error("Something went wrong while adding a new school.");
  }

  return data;
}

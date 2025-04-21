import React from "react";
import { useAddSchool } from "./useAddSchool";
import { useForm } from "react-hook-form";

function AddSchools() {
  const { addSchool } = useAddSchool();

  const { register, handleSubmit, reset } = useForm();

  function onSubmit({ name, address, latitude, longitude }) {
    addSchool({ name, address, latitude, longitude }), { onSettled: reset };
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add a School</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">School Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "This field is required" })}
            className="w-full border rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Address</label>
          <input
            type="text"
            id="address"
            {...register("address", { required: "This field is required" })}
            className="w-full border rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Latitude</label>
          <input
            type="number"
            step="any"
            name="latitude"
            {...register("latitude", { required: "This field is required" })}
            className="w-full border rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Longitude</label>
          <input
            type="number"
            step="any"
            id="longitude"
            {...register("longitude", { required: "This field is required" })}
            className="w-full border rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl transition"
        >
          Add School
        </button>
      </form>
    </div>
  );
}

export default AddSchools;

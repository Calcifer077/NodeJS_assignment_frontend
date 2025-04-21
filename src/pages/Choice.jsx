import { useNavigate } from "react-router-dom";

function Choice() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Choose an Option</h1>

        <div className="flex flex-col space-y-4">
          <button
            onClick={() => navigate("/listSchools")}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            List Schools
          </button>

          <button
            onClick={() => navigate("/addSchool")}
            className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
          >
            Add School
          </button>
        </div>
      </div>
    </div>
  );
}

export default Choice;

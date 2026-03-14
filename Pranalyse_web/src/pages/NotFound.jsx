import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-7xl font-bold text-gray-900">404</h1>
      <p className="mt-4 text-lg text-gray-600">Page Not Found</p>

      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Go to Homepage
      </button>
    </div>
  );
}

export default NotFound;

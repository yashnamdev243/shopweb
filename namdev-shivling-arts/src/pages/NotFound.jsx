// ===== NotFound.jsx =====
import React from "react";
import { Link } from "react-router-dom";
import { FrownOutlined } from "@ant-design/icons";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-50 flex flex-col items-center justify-center text-center p-6">
      <div className="text-orange-500">
        <FrownOutlined style={{ fontSize: "5rem" }} />
      </div>
      <h1 className="text-6xl font-bold text-gray-800 mt-4">404</h1>
      <p className="text-lg text-gray-600 mt-2">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 transition-all duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;

import React from "react";

const Error = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Error 404</h1>
        <p className="text-gray-600">
          Lo sentimos, la página que buscas no se encuentra.
        </p>
        <button className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-red-300">
          <a href="/">Volver al inicio</a>
        </button>
      </div>
    </div>
  );
};

export default Error;

import React from "react";

const ConstructionPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-md rounded-md text-center">
        <h1 className="text-3xl font-bold mb-4">Página en Construcción</h1>
        <p className="text-gray-600 mb-8">
          Estamos trabajando en esta página. ¡Vuelve pronto para ver los
          cambios!
        </p>
        <img
          src="/construccion.png" // URL de una imagen de construcción
          alt="Under Construction"
          className="mx-auto mb-8"
        />
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Emiliano Miranda. Todos los derechos
          reservados.
        </p>
      </div>
    </div>
  );
};

export default ConstructionPage;

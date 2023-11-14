import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ComprarProducto from "./routes/ComprarProducto";
import Clientes from "./routes/Clientes";
import Empleados from "./routes/Empleados";
import VenderProducto from "./routes/VenderProducto";
import Error from "./routes/Error";
import ConstructionPage from "./routes/ConstructionPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <VenderProducto />,
      errorElement: <Error />,
    },
    {
      path: "/ComprarProductos",
      element: <ComprarProducto />,
    },
    {
      path: "/Clientes",
      element: <Clientes />,
    },
    {
      path: "/Empleados",
      element: <Empleados />,
    },
    {
      path: "/Reportes",
      element: <ConstructionPage />,
    },
  ]);

  return (
    <div className="App flex">
      {/* Sidebar */}
      <div className="bg-gray-100 h-screen">
        <Sidebar />
      </div>

      {/* Rest of the content */}
      <div className="flex-grow">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

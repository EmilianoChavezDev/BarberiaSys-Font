import { React, useState, useEffect } from "react";
import Table from "../components/Table";
import { RiEdit2Line, RiDeleteBin6Line } from "react-icons/ri";
import { opcionesFiltrarPor } from "../helpers";
import CustomModal from "../components/CustomModal";

const Clientes = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleEdit = (id) => {
    // Lógica para editar el cliente con el ID proporcionado
    console.log(`Editar cliente con ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Lógica para eliminar el cliente con el ID proporcionado
    console.log(`Eliminar cliente con ID: ${id}`);
  };
  const data = [
    {
      id: 1,
      nombre: "Cliente 1",
      telefono: "123456789",
      direccion: "Calle 123",
      cedula: "1234567890",
      email: "cliente1@example.com",
    },
    {
      id: 2,
      nombre: "Cliente 2",
      telefono: "987654321",
      direccion: "Avenida XYZ",
      cedula: "0987654321",
      email: "cliente2@example.com",
    },
  ];

  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "Teléfono",
      selector: (row) => row.telefono,
      sortable: true,
    },
    {
      name: "Dirección",
      selector: (row) => row.direccion,
      sortable: true,
    },
    {
      name: "Cédula",
      selector: (row) => row.cedula,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row) => (
        <div>
          <button
            onClick={() => handleEdit(row.id)}
            className="mr-2 inline-flex items-center px-2 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:bg-blue-200"
          >
            <RiEdit2Line className="w-4 h-4 mr-1" />
          </button>
          <button
            onClick={() => handleDelete(row.id)}
            className="inline-flex items-center px-2 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-red-600 bg-red-100 hover:bg-red-200 focus:outline-none focus:bg-red-200"
          >
            <RiDeleteBin6Line className="w-4 h-4 mr-1" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* Contenedor principal */}
      <div>
        <CustomModal isOpen={modalIsOpen} closeModal={closeModal} />
        {/**Cabecera */}
        <div className="flex flex-col bg-gray-200 p-4">
          {/* Título de la pantalla */}
          <div>
            <h1 className="text-2xl font-bold text-left">Clientes</h1>
          </div>

          <div className="flex items-center mt-4">
            {/* Input de búsqueda */}
            <div className="flex flex-1">
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Buscar cliente por ej.: Nombre o Cedula"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              {/* Select */}
              <div>
                <select className="py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                  {opcionesFiltrarPor.map((opcion, index) => (
                    <option
                      key={index}
                      value={opcion.value}
                      disabled={opcion.disabled}
                      hidden={opcion.hidden}
                    >
                      {opcion.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Botón para agregar nuevo cliente */}
            <button
              onClick={openModal}
              className="ml-auto px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-900 focus:outline-none"
            >
              Agregar Nuevo Cliente
            </button>
          </div>
        </div>

        {/**Div para la tabla */}
        <div className="mt-2 mx-4">
          <Table columns={columns} data={data} pagination />
        </div>
      </div>
    </>
  );
};

export default Clientes;

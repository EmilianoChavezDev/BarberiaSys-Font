import React, { useState } from "react";
import Modal from "react-modal";
import { RiCloseLine } from "react-icons/ri";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "300px", // Cambiar el ancho del modal según sea necesario
    maxHeight: "70vh", // Altura máxima del modal
    overflow: "auto", // Para agregar scroll si el contenido es demasiado largo
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
};

const ClienteModal = ({ isOpen, closeModal, Tittle }) => {
  const [valor, setValor] = useState("");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Ejemplo de Modal"
    >
      <div>
        <div className="flex flex-col">
          <div className="text-2xl">{Tittle}</div>
          {/* Botón de cierre */}
          <button style={customStyles.closeButton} onClick={closeModal}>
            <RiCloseLine size={24} />
          </button>
        </div>
        <div className="mt-2">
          <div className="mt-2 mb-2">
            <p className="text-xl">Nombre:</p>
            <input
              type="text"
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              placeholder={`Introduzca el nombre`}
            />
          </div>
          <button className="mt-auto py-2 px-4 bg-green-800 text-white rounded-md border-none cursor-pointer">
            Guardar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ClienteModal;

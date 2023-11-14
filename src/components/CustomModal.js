import React from "react";
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

const CustomModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Ejemplo de Modal"
    >
      {/* Botón de cierre */}
      <button style={customStyles.closeButton} onClick={closeModal}>
        <RiCloseLine size={24} />
      </button>

      {/* Contenido del modal */}
      <h2>Este es un modal</h2>
      <p>Contenido del modal...</p>
    </Modal>
  );
};

export default CustomModal;

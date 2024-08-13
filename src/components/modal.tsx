import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: any
  
}


// modal para abrir os componentes
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center mt-20">
      <div className="w-[680px] h-[860px] flex flex-col">
        <button onClick={() => onClose()} className="text-red-600 text-xl place-self-end">X</button>
        <div className="bg-white p-2 rounded text-black">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
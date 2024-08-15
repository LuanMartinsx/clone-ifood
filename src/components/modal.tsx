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
    <div className="fixed backdrop-brightness-75 flex justify-center items-center mt-20 z-50 w-full h-full -top-20 ">
      <div className="w-[680px] h-[860px] flex flex-col mt-6">
        <button onClick={() => onClose()} className="text-red-600 text-xl place-self-end">X</button>
        <div className="bg-gray-50 p-2 rounded text-black ">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
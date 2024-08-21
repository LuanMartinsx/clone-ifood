import React, { useEffect, useState } from "react";

interface ModalPopUpProps {
  isOpen: boolean;
  onClose: () => void;
  children?: any
  
}







const ModalPopUp: React.FC<ModalPopUpProps> = ({ isOpen, onClose, children}) => {
  const [isTransitioned, setIsTransitioned] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setIsTransitioned(true), 100); 
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={`fixed flex justify-center items-center ml-[406px] z-50 w-full transition-transform duration-300 opacity-0 ${isTransitioned ? 'translate-y-28 opacity-100' : 'translate-y-0'}`}>
          <div className="w-80 h-32 bg-gray-50 text-black border-1 shadow-lg flex flex-row rounded">
            
            <div className="bg-gray-50 p-2 rounded text-black ">{children}</div>
            <button onClick={() => onClose()} className="text-red-600 place-self-start mt-2 ml-4">X</button>
          </div>
        </div>
      );

}


export default ModalPopUp;
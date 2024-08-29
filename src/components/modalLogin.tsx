import React from "react";
import Image from 'next/image'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: any
  
}


// modal para abrir os componentes
const ModalLogin: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bg-gradient-to-r from-pink-200 to-pink-50 flex justify-center items-center mt-20 w-full h-full -top-20 ">
        <div className='absolute top-6 left-0'>
                <Image className='w-24 h-24 ml-10'
                    src="/image/ifood.png"
                     width={72}
                    height={72}
                    alt="Ifood"
      
                        />

                </div>
      <div className="w-[500px] h-[320px] bg-white flex flex-col mt-5 ml-[620px] rounded-md shadow-md">
        <div className="bg-gray-50 p-2 rounded text-black ">{children}</div>
      </div>
    </div>
  );
};

export default ModalLogin;
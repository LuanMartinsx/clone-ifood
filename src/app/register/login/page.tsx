"use client"

import ModalLogin from '@/components/modalLogin'
import { ChevronLeft, Facebook } from 'lucide-react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { useState } from 'react'


const poppins = Poppins({
    subsets: ['latin'],
    weight: '300'
  })


export default function login() {

    const [modalCel, setModalCel] = useState(false)
    const [modalEmail, setModalEmail] = useState(false)




    const setModalCelOpen = () => {
        setModalCel(true)
    }

    const setModalCelClose = () => {
        setModalCel(false)
    }

  
    const setModalEmailOpen = () => {
        setModalEmail(true)
    }

    const setModalEmailClose = () => {
        setModalEmail(false)
    }

    return (
        
        <main>
            <div className="w-full h-[939px] bg-gradient-to-r from-pink-200 to-pink-50">
                <div className='pt-6'>
                <Image className='w-24 h-24 ml-10'
                    src="/image/ifood.png"
                     width={72}
                    height={72}
                    alt="Ifood"
      
                        />

                </div>


                <div className='w-[500px] h-[435px] bg-white flex flex-col mt-28 ml-[1000px] items-center rounded-md shadow-md'>
                    <div className={poppins.className}>
                    <p className='text-4xl font-bold mt-12'>Falta pouco para <br /> matar sua fome!</p>
                    <p className='text-xl mt-6 mb-8 font-semibold text-gray-500 ml-8'>Como deseja continuar?</p>

                    </div>
                    <button className='bg-sky-700 hover:bg-sky-700/75 flex w-[420px] h-12 rounded-sm text-white items-center gap-20'>

                    <Image className='w-8 h-8 ml-6'
                        src="/image/facebook.png"
                        width={512}
                        height={512}
                        alt="Ifood" /> 
                    Continuar com Facebook</button>
                    <button className='w-[410px] h-9 border border-gray-400 mt-2 rounded-sm items-center flex gap-24 text-sm hover:bg-gray-100'>
                    <Image className='w-5 h-5 ml-4'
                        src="/image/google.png"
                        width={512}
                        height={512}
                        alt="Ifood" /> 
                        Fazer login com o Google</button>
                        <div className='flex flex-row mt-8 gap-8'>

                    <button className='w-48 h-12 flex items-center justify-center bg-white border border-gray-400 text-gray-400 rounded-sm hover:bg-red-500 hover:text-white hover:border-red-500' onClick={setModalCelOpen}>Celular</button>
                    <button className='w-48 h-12 flex items-center justify-center bg-white border border-gray-400 text-gray-400 rounded-sm hover:bg-red-500 hover:text-white hover:border-red-500' onClick={setModalEmailOpen}>E-mail</button>

                    
                            
                        </div>

                        
                </div>

                <ModalLogin isOpen={modalCel} onClose={() => {setModalCel(false)}}>
                        <div>
                        <button onClick={setModalCelClose} className='mt-4'>
                            <span className='items-center'><ChevronLeft  className='h-8 w-8 text-red-500'/></span>
                        </button>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className='text-gray-500/80 font-semibold '>Informe o número do seu celular para continuar</p>
                        </div>
                        <div className='flex flex-row gap-2 w-full mt-5 justify-center items-center'>
                            <div className='w-20 h-12 bg-gray-300 flex justify-center items-center rounded'><svg className="w-6 h-6 mr-1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" fill="#6da544" r="256"/><path d="m256 100.174 211.478 155.826-211.478 155.826-211.478-155.826z" fill="#ffda44"/><circle cx="256" cy="256" fill="#f0f0f0" r="89.043"/><g fill="#0052b4"><path d="m211.478 250.435c-15.484 0-30.427 2.355-44.493 6.725.623 48.64 40.227 87.884 89.015 87.884 30.168 0 56.812-15.017 72.919-37.968-27.557-34.497-69.958-56.641-117.441-56.641z"/><path d="m343.393 273.06c1.072-5.524 1.651-11.223 1.651-17.06 0-49.178-39.866-89.043-89.043-89.043-36.694 0-68.194 22.201-81.826 53.899 12.05-2.497 24.526-3.812 37.305-3.812 51.717-.001 98.503 21.497 131.913 56.016z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg> + 55</div>
                            <input className='w-80 h-12 border border-b-gray-400 rounded ' type="text" placeholder='   Informe o seu número de celular' />
                        </div>
                        
                        <div className='flex justify-center items-center mt-4'>
                            <p className=''>Como deseja receber seu código?</p>
                        </div>
                        <div className='flex justify-center items-center'>

                        <button className='bg-red-600 w-[420px] h-12 mt-4 text-white hover:bg-red-600/80 rounded'>WhatsApp</button>
                        </div>

                        
                        
                        
                        </ModalLogin>

                        <ModalLogin isOpen={modalEmail} onClose={() => {setModalCel(false)}}>
                        <div>
                        <button onClick={setModalEmailClose} className='mt-4'>
                            <span className='items-center'><ChevronLeft  className='h-8 w-8 text-red-500'/></span>
                        </button>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className='text-gray-500/80 font-semibold'>Informe o seu e-mail para continuar</p>
                        </div>
                        <div className='flex flex-row gap-2 w-full mt-5 justify-center items-center'>
                            <input className='w-[420px] h-12 border border-b-gray-400' type="text" placeholder='   Informe o seu e-mail' />
                        </div>
                        
                        <div className='flex justify-center items-center mt-4'>
                            <p className='text-xs text-start ml-2'>O iFood poderá enviar comunicações neste e-mail. Caso não queira <br/> receber comunicações nesse canal, é só acessar a opção “Configurações” <br/> no aplicativo ou se desinscrever na sua caixa de e-mail.</p>
                        </div>
                        <div className='flex justify-center items-center'>

                        <button className='bg-red-600 w-[420px] h-12 mt-4 text-white hover:bg-red-600/80'>Continuar</button>
                        </div>

                        
                        
                        
                        </ModalLogin>




            </div>
        </main>
        
    )

    
}


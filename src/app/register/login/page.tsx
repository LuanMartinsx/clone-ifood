import { Facebook } from 'lucide-react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'


const poppins = Poppins({
    subsets: ['latin'],
    weight: '300'
  })


export default function login() {



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


                <div className='w-[500px] h-[495px] bg-white flex flex-col mt-28 ml-[1000px] items-center rounded-md shadow-md'>
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

                    <button className='w-48 h-12 flex items-center justify-center bg-white border border-gray-400 text-gray-400 rounded-sm hover:bg-red-500 hover:text-white hover:border-red-500'>Celular</button>
                    <button className='w-48 h-12 flex items-center justify-center bg-white border border-gray-400 text-gray-400 rounded-sm hover:bg-red-500 hover:text-white hover:border-red-500'>E-mail</button>
                            
                        </div>
                        <div>
                        <hr className='bg-black mt-10 w-[415px]' />

                        </div>
                </div>




            </div>
        </main>
        
    )

    
}


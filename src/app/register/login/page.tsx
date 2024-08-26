import Image from 'next/image'





export default function login() {

    return (
        <>
        <main>
            <body className="w-full h-full bg-gradient-to-r from-pink-200 to-pink-50">
                <Image className='w-24 h-24'
                    src="/image/ifood.png"
                     width={72}
                    height={72}
                    alt="Ifood"
      
                        />



                <div className='w-[460px] h-[440px] bg-red-500 flex flex-col'>
                    <p>Falta pouco para <br /> Matar sua fome</p>
                    <p>Como deseja continuar?</p>
                    <button>Facebook</button>
                    <button>Google</button>
                    <button>Celular</button>
                    <button>E-mail</button>
                </div>




            </body>
        </main>
        
        </>
    )

    
}


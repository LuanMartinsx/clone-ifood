import Image from 'next/image'
import Link from "next/link"
import { Poppins } from 'next/font/google'
import { BadgeCheck } from 'lucide-react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '300'
})
export default function Home() {
  return (
    <main className={poppins.className}>
     <header className="bg-gray-100 w-full h-32 flex flex-row justify-start gap-12 items-center">
     <div className=' ml-80'>
     <Image
      src="/image/ifood.png"
      width={72}
      height={72}
      alt="Ifood"
      
    />
     </div>
      <div className="flex flex-row gap-12">
     
      <Link href=''>Entregador</Link>
      <Link href=''>Restaurante e Mercado</Link>      
      <Link href=''>Carreira</Link>
      <Link href=''>Ifood Card</Link>
      </div>
      <div className='flex flex-row gap-6 ml-72'>
        <button className='text-red-500'>criar conta</button>
        <button className='bg-red-500 rounded text-white pt-2 pb-2 pl-6 pr-6'>Entrar</button>
      </div>
        
        
    </header>
     <div className='flex flex-col items-center'>
      <div className='mt-60 flex flex-col justify-self-center absolute z-0'>
        <h1 className='text-4xl text-center pb-3 font-bold'>Faça mercado no iFood</h1>
        <h3>Entregamos tudo que você precisa na porta de sua casa, de horti-fruti a itens de limpeza</h3>
        <form action="Pesquisar" className='flex justify-center mt-16 gap-4'>
          <input type="text" placeholder='Em qual endereço você está?' className='bg-gray-100 w-80 pt-3 pb-3 pr-8 pl-8 rounded-lg text-left'/>
          <button className='bg-red-600 text-white pt-3 pb-3 pl-6 pr-6 rounded-lg'>Ver mercados proximos</button>
        </form>
        <div className='flex flex-row mt-12 gap-2 text-xs justify-center'>
          <button className='text-black bg-white border border-gray-200 rounded-full pr-3 pl-3 pt-2 pb-2'>Frios</button>
          <button className='text-black bg-white border border-gray-200 rounded-full pr-3 pl-3 pt-2 pb-2'>Laticinios</button>
          <button className='text-black bg-white border border-gray-200 rounded-full pr-3 pl-3 pt-2 pb-2'>Feira</button>
          <button className='text-black bg-white border border-gray-200 rounded-full pr-3 pl-3 pt-2 pb-2'>Bebidas</button>
          <button className='text-black bg-white border border-gray-200 rounded-full pr-3 pl-3 pt-2 pb-2'>Doces</button>
          <button className='text-black bg-white border border-gray-200 rounded-full pr-3 pl-3 pt-2 pb-2'>Massas Frescas</button>
          <button className='text-black bg-white border border-gray-200 rounded-full pr-3 pl-3 pt-2 pb-2'>Limpeza</button>
        </div>
        <div className='flex flex-row mt-2 justify-center gap-2 text-xs'>
          <button className='text-black bg-white border border-gray-200 rounded-full pr-3 pl-3 pt-2 pb-2'>Padaria</button>
          <button className='text-black bg-white border border-gray-200 rounded-full pr-3 pl-3 pt-2 pb-2'>Higíene</button>
          <button className='text-black bg-white border border-gray-200 rounded-full pr-3 pl-3 pt-2 pb-2'>Congelados</button>
          <button className='text-black bg-white border border-gray-200 rounded-full pr-3 pl-3 pt-2 pb-2'>Carnes</button>
          <button className='text-black bg-white border border-gray-200 rounded-full pr-3 pl-3 pt-2 pb-2'>Cerveja</button>
         
        </div>
      </div>
      <div className='flex flex-col static'>
     <Image className=''
      src="/image/ifoodbackground.png"
      width={1920}
      height={1080}
      alt="Background"
    />
      </div>
      
      {/* Botões Restaurantes e Mercado */}
    </div>  
      <div className='bg-gray-50 -bottom-52 content-none block h-48 left-0 absolute w-full -z-10 '>

      </div>

      <div className='flex flex-row absolute justify-center -bottom-80 inset-x-96 gap-8'>
      <button className='bg-red-600 w-96 h-52 z-10 flex  gap-2 rounded-[24px] duration-100 transform hover:scale-105 transition ease-linear'>
        <p className='text-white text-2xl block mt-10 ml-4 '>Restaurante</p>
        <div className='bg-red-800 w-40 py-2 text-white absolute bottom-8 text-center ml-4 items-center rounded-full'>Ver Opções</div>
        <div className='absolute ml-40 -bottom-0'>
        <Image
      src="/image/hamburguer.png"
      width={219}
      height={160}
      alt="Hamburguer"
      />

        </div>
        
      </button>
      
      <button className='bg-lime-500/75 w-96 h-52 z-10 flex rounded-[24px] duration-100 transform hover:scale-105 transition ease-linear'>
      <p className='text-white text-2xl block mt-10 ml-4 '>Mercado</p>
        <div className='bg-lime-800/50 w-40 py-2 text-white absolute bottom-8 text-center ml-4 items-center rounded-full '>Ver Opções</div>
        <div className='absolute ml-40 -bottom-0'>
        <Image
      src="/image/market.png"
      width={219}
      height={160}
      alt="Market"
      />

        </div>
      </button>
      </div>

      {/* Botoes Bedidas, Farmacia e Pet shop */}

      <div className="bg-white w-full h-44 z-10 flex flex-row justify-center mt-40 gap-32">
      <a className="flex flex-col w-36 h-32 justify-end p-4 items-center mr-6 cursor-pointer duration-100 transform hover:scale-105 transition ease-linear">
      <div className="w-48 h-11 bg-yellow-300 rounded-md relative border-0 block p-0">
      <Image
        className="absolute w-36 h-24"
        src="/image/drinks.png"
        width={135}
        height={95}
        alt="Bebidas"
        style={{ right: '20px', bottom: '0' }}
      />
     </div>
     <p className='mt-3 font-semibold'>Bebidas</p>
  </a>

  <a className="flex flex-col w-36 h-32 justify-end p-4 items-center mr-3 cursor-pointer duration-100 transform hover:scale-105 transition ease-linear">
      <div className="w-48 h-11 bg-rose-400 rounded-md relative border-0 block p-0">
      <Image
        className="absolute w-24 h-20"
        src="/image/farmacia.png"
        width={100}
        height={86}
        alt="Farmácia"
        style={{ right: '45px', bottom: '0' }}
      />
     </div>
     <p className='mt-3 font-semibold'>Farmácia</p>
  </a>

  <a className="flex flex-col w-36 h-32 justify-end p-4 items-center ml-4 cursor-pointer duration-100 transform hover:scale-105 transition ease-linear">
      <div className="w-48 h-11 bg-purple-700/75 rounded-md relative border-0 block p-0">
      <Image
        className="absolute w-32 h-20"
        src="/image/petshop.png"
        width={135}
        height={77}
        alt="Pet Shop"
        style={{ right: '30px', bottom: '0' }}
      />
     </div>
     <p className='mt-3 font-semibold'>Pet Shop</p>
  </a>
        
 </div>
 {/* quebra de linha */}
 <div className='flex justify-center'>
 <hr className='w-2/3 bg-gray-50 flex justify-center items-center' />
  </div>
   

   <div className='flex flex-col justify-start'>
    <h1 className='text-xl font-semibold ml-80 mt-10 mb-10'>Os melhores restaurantes</h1>
    {/* Restaurantes */}
    <div className='flex flex-row justify-center mb-10 gap-4 w-2/3 ml-80'>
      <a href="" className=' w-60 h-32 border border-gray-200 rounded-md hover:border-fuchsia-950 z-0'>
        <div className=' flex flex-row z-10'>
        <Image
        className="w-14 h-14 ml-5 mt-9"
        src="/image/mcdonalds.png"
        width={149}
        height={150}
        alt="Mcdonalds"
      />
        <div className='flex flex-col mt-12 ml-2 text-xs'>
          <p className='font-semibold'>Mcdonald's</p>
          <p className='text-gray-400 flex'>Lanches</p>
       </div>
      
       <BadgeCheck className='ml-14 mt-4 w-4 h-4 bg-red-600 text-white rounded-full' />

        </div>
      </a>
      <a href="" className='bg-white w-60 h-32 border border-gray-200 rounded-md hover:border-fuchsia-950'> <div className=' flex flex-row z-12'>
        <Image
        className="w-14 h-14 ml-5 mt-9 rounded-full"
        src="/image/cocoBambu.png"
        width={149}
        height={150}
        alt="Coco Bambu"
      />
        <div className='flex flex-col mt-12 ml-2 text-xs'>
          <p className='font-semibold'>Coco Bambu</p>
          <p className='text-gray-400 flex'>Frutos Do Mar</p>


        </div>
        <BadgeCheck className='ml-10 mt-4 w-4 h-4 bg-red-600 text-white rounded-full' />
        </div></a>
      <a href="" className='bg-white w-60 h-32 border border-gray-200 rounded-md hover:border-fuchsia-950'> <div className=' flex flex-row z-12'>
        <Image
        className="w-14 h-14 ml-5 mt-9 rounded-full"
        src="/image/chinaInBox.png"
        width={149}
        height={150}
        alt="China in Box"
      />
        <div className='flex flex-col mt-12 ml-2 text-xs'>
          <p className='font-semibold'>China in Box</p>
          <p className='text-gray-400 flex'>Chinesa</p>


        </div>
        <BadgeCheck className='ml-12 mt-4 w-4 h-4 bg-red-600 text-white rounded-full' />
        </div></a>
      <a href="" className='bg-white w-60 h-32 border border-gray-200 rounded-md hover:border-fuchsia-950'> <div className=' flex flex-row z-12'>
        <Image
        className="w-14 h-14 ml-5 mt-9 rounded-full"
        src="/image/habibs.png"
        width={149}
        height={150}
        alt="Habibs"
      />
        <div className='flex flex-col mt-12 ml-2 text-xs'>
          <p className='font-semibold'>Habib's</p>
          <p className='text-gray-400 flex'>Lanches</p>
        </div>
        <BadgeCheck className='ml-[72px] mt-4 w-4 h-4 bg-red-600 text-white rounded-full' />
        </div></a>
      <a href="" className='bg-white w-60 h-32 border border-gray-200 rounded-md hover:border-fuchsia-950'> <div className=' flex flex-row z-12'>
        <Image
        className="w-14 h-14 ml-5 mt-9 rounded-full"
        src="/image/outback.png"
        width={149}
        height={150}
        alt="Outback"
      />
        <div className='flex flex-col mt-12 ml-2 text-xs'>
          <p className='font-semibold'>Outback</p>
          <p className='text-gray-400 flex'>Lanches</p>


        </div>
        <BadgeCheck className='ml-[72px] mt-4 w-4 h-4 bg-red-600 text-white rounded-full' />
        </div></a>
    </div>
   </div>
        {/* Descontos */}
    <a className='flex flex-row mt-5 justify-center gap-5 mb-16'>
      <div>
       <Image src="/image/banner1.png" width={389} height={196} alt='Banner 1' /> 
      </div>
      <div>
      <Image src="/image/banner2.png" width={389} height={195} alt='Banner 1' /> 
      </div>
      <div>
      <Image src="/image/banner2.png" width={390} height={195} alt='Banner 1' /> 
      </div>


    </a>

    <div className='flex justify-center'>
 <hr className='w-2/3 bg-gray-50 flex justify-center items-center mb-20' />
  </div>

    </main>
  );
}

import Image from 'next/image'
import Link from "next/link"
import { Poppins } from 'next/font/google'
import { BadgeCheck, ChevronRight, Search  } from 'lucide-react';

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
        <button className='text-red-500 font-semibold'>criar conta</button>
        <button className='bg-red-500 rounded text-white pt-2 pb-2 pl-6 pr-6'>Entrar</button>
      </div>
        
        
    </header>
     <div className='flex flex-col items-center'>
      <div className='mt-60 flex flex-col justify-self-center absolute z-0'>
        <h1 className='text-[42px] text-center pb-3 font-bold'>Faça mercado no iFood</h1>
        <h3>Entregamos tudo que você precisa na porta de sua casa, de horti-fruti a itens de limpeza</h3>
        <form action="Pesquisar" className='flex justify-center mt-16 gap-4'>
          <div className='flex flex-row bg-gray-200/50 w-[350px] h-12 pt-3 pb-3 pr-8 rounded-lg gap-3'>
          <span><Search className='h-4 w-4 mt-1 ml-4 text-red-500'/></span>
          <input type="text" placeholder='Em qual endereço você esta?' className='bg-gray-100 w-full h-full text-sm'/>
          </div>
          <button className='bg-red-500 text-white pt-3 pb-3 pl-7 pr-7 rounded-lg text-sm font-semibold'>Ver mercados próximos</button>
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
        <p className='text-white text-3xl block mt-10 ml-4 font-bold '>Restaurante</p>
        <div className='bg-red-700/75 w-36 h-9 py-2 text-white absolute bottom-8 text-center ml-5 items-center rounded-xl flex flex-row justify-center text-sm font-semibold'>Ver opções <ChevronRight className='h-4 w-4 ml-2 font-semibold' /></div>
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
      <p className='text-white text-3xl block mt-10 ml-4 font-bold '>Mercado</p>
        <div className='bg-lime-600/75 w-36 h-9 py-2 text-white absolute bottom-8 text-center ml-5 items-center rounded-xl flex flex-row justify-center text-sm font-semibold '>Buscar lojas <ChevronRight className='h-4 w-4 ml-2 font-semibold' /></div>
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
     <p className='mt-3 font-semibold flex flex-row justify-center'>Bebidas <ChevronRight className='h-4 w-4 text-red-500 mt-1' /></p>
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
     <p className='mt-3 font-semibold flex flex-row justify-center'>Farmácia <ChevronRight className='h-4 w-4 text-red-500 mt-1' /></p>
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
     <p className='mt-3 font-semibold flex flex-row justify-center'>Pet Shop <ChevronRight className='h-4 w-4 text-red-500 mt-1' /></p>
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
 <hr className='w-2/3 bg-gray-50 flex justify-center items-center mb-16' />
  </div>

  <div className='flex flex-col justify-start'>
    <h1 className='text-xl font-semibold ml-80 mb-10'>Os melhores mercados</h1>
    {/* Mercados */}
    <div className='flex flex-row mb-10 gap-4 w-2/3 ml-80'>
      <a href="" className=' w-60 h-32 border border-gray-200 rounded-md hover:border-fuchsia-950 z-0'>
        <div className=' flex flex-row z-10'>
        <Image
        className="w-14 h-14 ml-5 mt-9 rounded-full"
        src="/image/dia.png"
        width={149}
        height={150}
        alt="Dia"
      />
        <div className='flex flex-col mt-14 ml-2 text-xs'>
          <p className='font-semibold'>Dia Supermercado</p>
       </div>
     </div>
      </a>
      <a href="" className='bg-white w-60 h-32 border border-gray-200 rounded-md hover:border-fuchsia-950'> <div className=' flex flex-row z-12'>
        <Image
        className="w-14 h-14 ml-5 mt-9 rounded-full"
        src="/image/big.png"
        width={149}
        height={150}
        alt="Big"
      />
        <div className='flex flex-col mt-14 ml-2 text-xs'>
          <p className='font-semibold'>Big</p>


        </div>
        </div></a>
      <a href="" className='bg-white w-60 h-32 border border-gray-200 rounded-md hover:border-fuchsia-950'> <div className=' flex flex-row z-12'>
        <Image
        className="w-14 h-14 ml-5 mt-9 rounded-full"
        src="/image/eataly.png"
        width={149}
        height={150}
        alt="Eataly"
      />
        <div className='flex flex-col mt-14 ml-2 text-xs'>
          <p className='font-semibold'>Eataly</p>


        </div>
        </div></a>
    </div>
   </div>
    

   <div className="flex justify-center items-center space-x-12 p-8">
  {/* Entregas */}
  <div className="flex justify-end space-x-6">
    <Image className='h-48 w-48' src="/image/delivery-man.png" width={242} height={251} alt="Delivery man" />
    <div className='pt-20 pb-20'>
      <h2 className="text-2xl font-bold">Quer fazer entregas pelo iFood?</h2>
      <p className="text-gray-600 mt-2">Faça agora o seu cadastro e comece o quanto antes.</p>
      <button className="bg-red-500 rounded text-white mt-4 px-6 py-2">Saiba mais</button>
    </div>
  </div>

  {/* Cadastro Restaurante */}
  <div className="flex items-center space-x-6">
    <Image className='h-48 w-48' src="/image/market2.png" width={242} height={251} alt="Market 2" />
    <div>
      <h2 className="text-2xl font-bold">A sua fome de crescer tá no iFood</h2>
      <p className="text-gray-600 mt-2">Cadastre seu restaurante ou o seu mercado.</p>
      <button className="bg-red-500 rounded text-white mt-4 px-6 py-2">Saiba mais</button>
    </div>
  </div>
</div>

  

    </main>
  );
}

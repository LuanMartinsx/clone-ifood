import Image from 'next/image'
import Link from "next/link"
export default function Home() {
  return (
    <main>
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
     <div className='flex justify-center'>
      <div className='mt-60 flex flex-col justify-self-center absolute'>
        <h1 className='text-4xl text-center pb-3 font-bold'>Faça mercado no iFood</h1>
        <h3>Entregamos tudo que você precisa na porta de sua casa, de horti-fruti a itens de limpeza</h3>
        <form action="Pesquisar" className='flex justify-center mt-16 gap-4'>
          <input type="text" placeholder='Em qual endereço você está?' className='bg-gray-100 w-80 pt-3 pb-3 pr-8 pl-8 rounded-lg text-left'/>
          <button className='bg-red-600 text-white pt-3 pb-3 pl-6 pr-6 rounded-lg'>Ver mercados proximos</button>
        </form>
      </div>
     <Image
      src="/image/ifoodbackground.png"
      width={1920}
      height={1080}
      alt="Ifood"
    /></div>
    </main>
  );
}
